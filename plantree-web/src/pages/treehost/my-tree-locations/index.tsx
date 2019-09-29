import React from 'react';
import './styles.scss';
import { Link } from './../../../util/router';
import {
  Image,
  Container,
  Content,
  Button,
  Columns,
  Column,
  Box,
  Media,
  MediaLeft,
  MediaContent,
  Level,
  LevelLeft,
  LevelItem,
  Icon,
  MediaRight,
  Delete
} from 'bloomer';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { FirestoreCollection, FirestoreMutation } from '@react-firebase/firestore';
import { Loading } from '../../../components/Loading';
import { firebasePaths, PlantingLocation, convertPlantingLocations } from '../../../util/firebase';
import { DisplayDate } from '../../../components/DisplayDate';
import { GoogleMap, Marker } from '@react-google-maps/api';
import treeIcon from '../../../images/tree.svg';
import profileImg1 from '../../../images/rambo.jpeg';
import profileImg2 from '../../../images/marion.jpeg';
import profileImg3 from '../../../images/lukas.jpeg';
import profileImg4 from '../../../images/christof.jpeg';
import { faHeart, faRetweet, faReply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function MyTreeLocations(_props: unknown) {
  return (
    <Container>
      <Breadcrumbs items={[['Home', '/'], ['Treehost', '']]} />

      <Content style={{ minHeight: '500px', paddingTop: '20px' }}>
        <h1>Your planting locations</h1>

        <FirestoreCollection path={firebasePaths.plantingLocations} limit={10}>
          {dbRequest =>
            dbRequest.isLoading ? <Loading /> : renderLocations(convertPlantingLocations(dbRequest))
          }
        </FirestoreCollection>

        <div style={{ margin: '10px 0 20px 0' }}>
          <Link to="/treehost/offer-planting-location">
            <Button isColor="primary">Offer a new planting location</Button>
          </Link>
        </div>
      </Content>
    </Container>
  );
}

function renderLocations(locations: PlantingLocation[]) {
  if (locations.length === 0) return <p>You haven't provided any planting locations yet.</p>;
  return locations.map(plantingLocation => (
    <Box key={plantingLocation.id}>
      <Columns>
        <Column>
          <Content>
            <p>
              <strong>{plantingLocation.numTrees}</strong> tree{plantingLocation.numTrees > 1 ? 's' : ''}{' '}
              will be planted, and the must be one of{' '}
              <strong>{plantingLocation.trees.map(tree => tree.name).join(', ')}</strong>. They will be
              planted on: <strong>{plantingLocation.dates.weekday.join(', ')}</strong> in the{' '}
              <strong>{plantingLocation.dates.time.join(', ')}</strong>.
            </p>

            <div style={{ marginBottom: '40px' }}>{renderPlanters(plantingLocation)}</div>
            <p>
              <small>
                You created this planting location on <DisplayDate value={plantingLocation.createdAt} />
              </small>
            </p>
            <p>
              <FirestoreMutation
                path={`${firebasePaths.plantingLocations}/${plantingLocation.id}`}
                type="delete"
              >
                {({ runMutation }) => (
                  <Button isColor="danger" onClick={() => runMutation(null)}>
                    Delete planting location
                  </Button>
                )}
              </FirestoreMutation>
            </p>
          </Content>
        </Column>
        <Column>
          <GoogleMap
            id="example-map"
            mapContainerStyle={{
              height: '450px',
              width: '100%'
            }}
            zoom={20}
            center={plantingLocation.treeLocation}
            clickableIcons={false}
          >
            {plantingLocation.treeLocation && (
              <Marker
                position={plantingLocation.treeLocation}
                icon={{
                  url: treeIcon,
                  scaledSize: { height: 70, width: 70 } as any
                }}
              />
            )}
          </GoogleMap>
        </Column>
      </Columns>
    </Box>
  ));
}

function renderPlanters(plantingLocation: PlantingLocation) {
  const people = generatePeople(plantingLocation);
  const totalToPlant = people.map(({ numTrees }) => numTrees).reduce((tot, current) => tot + current, 0);
  return (
    <>
      {people.length === 0 ? (
        <p>
          Nobody has signed up yet to plant any trees in this location. Get the word out on{' '}
          {/* eslint-disable-next-line */}
          <a href="#">social media</a>!
        </p>
      ) : (
        <p>
          {people.length} {people.length === 1 ? 'person has' : 'people have'} signed up to plant{' '}
          {totalToPlant} tree{totalToPlant === 1 ? '' : 's'} next week.
        </p>
      )}
      {people.map(person => (
        <Media key={person.name}>
          <MediaLeft>
            <Image isSize="64x64" src={person.image} />
          </MediaLeft>
          <MediaContent>
            <Content>
              <p>
                <strong>{person.name}</strong> <small>@{person.name.replace(/ /g, '')}</small>
                <br />
                {person.name} will plant {person.numTrees} {person.tree.name} tree
                {person.numTrees === 1 ? '' : 's'} on {person.date}.
              </p>
            </Content>
            <Level>
              <LevelLeft>
                <LevelItem href="#" hasTextColor="primary">
                  <FontAwesomeIcon icon={faReply}></FontAwesomeIcon>
                </LevelItem>
                <LevelItem href="#" hasTextColor="primary">
                  <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                </LevelItem>
              </LevelLeft>
            </Level>
          </MediaContent>
          <MediaRight>
            <Delete />
          </MediaRight>
        </Media>
      ))}
    </>
  );
}

function generatePeople(plantingLocation: PlantingLocation) {
  let treesLeft = plantingLocation.numTrees;
  const names = ['Peter Planter', 'Gerard Greenfield', 'Thoran Treehorn', 'Bennet Bush'];
  const images = [profileImg1, profileImg2, profileImg3, profileImg4];
  const rand = [2, 5, 3, 1, 5, 2, 7, 2, 1];
  const people = [];
  while (true) {
    const tryNumTrees = extractElement(rand, names.length);
    const numTrees = tryNumTrees > treesLeft ? 0 : tryNumTrees;
    treesLeft -= numTrees;
    const name = names.pop();
    const image = images.pop();
    const tree = extractElement(plantingLocation.trees, names.length);
    if (!name || numTrees === 0) return people;
    const date = `${extractElement(plantingLocation.dates.weekday, names.length)} ${extractElement(
      plantingLocation.dates.time,
      names.length
    ).toLowerCase()}`;
    people.push({ name, image, numTrees, tree, date });
  }
}

function extractElement<T>(trees: T[], index: number) {
  return trees[index % trees.length];
}
