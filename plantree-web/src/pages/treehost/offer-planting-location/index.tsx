import React, { Component, Fragment } from 'react';
import './styles.scss';
import { Content, Box, Notification, Input, Column, Button } from 'bloomer';
import { Container } from 'bloomer/lib/layout/Container';
import { GoogleMap, StandaloneSearchBox, Marker } from '@react-google-maps/api';
import tree from '../../../images/tree.svg';
import { Columns } from 'bloomer/lib/grid/Columns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Unpacked } from '../../../util/ts-utils';
import { Checkbox } from 'bloomer/lib/elements/Form/Checkbox';

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;
const timesOfDay = ['Morning (9am-12am)', 'Afternoon (1pm-5pm)', 'Evening (5pm-8pm)'] as const;

type Weekday = Unpacked<typeof weekdays>;
type TimeOfDay = Unpacked<typeof timesOfDay>;

interface S {
  center?: Coord;
  treeLocation?: Coord;
  numTrees: number;
  trees: Set<Tree>;
  dates: { weekday: Set<Weekday>; time: Set<TimeOfDay> };
  agreed: boolean;
}

const trees: Tree[] = [
  { name: 'Birch', desc: 'The Bir tree is a local tree which can grow up to 7.5 meters in 3 years' },
  { name: 'Fir', desc: 'The Fir tree is a local tree which can grow up to 12 meters in 3 years' },
  { name: 'Maple', desc: 'The Map tree is a local tree which can grow up to 7.5 meters in 3 years' },
  { name: 'Oak', desc: 'The Oak tree is a local tree which can grow up to 16 meters in 3 years' }
];

export class OfferPlantingLocation extends Component<{}, S> {
  searchBox: { getPlaces: () => void } = null as any;
  state: S = {
    center: undefined,
    treeLocation: undefined,
    trees: new Set(),
    numTrees: 0,
    dates: { weekday: new Set(), time: new Set() },
    agreed: false
  };
  // state: S = {
  //   center: { lat: 47.39015, lng: 8.515817 },
  //   treeLocation: { lat: 47.39015, lng: 8.51617 },
  //   numTrees: 10,
  //   trees: new Set(trees),
  //   dates: { weekday: new Set(weekdays), time: new Set(timesOfDay) },
  //   agreed: false
  // };

  render() {
    return (
      <Container>
        <Content style={{ paddingBottom: '20px' }}>
          <h1>Offer Planting Location</h1>
          <Box>
            <h4>Approximate Address</h4>
            <p>In which region do you allow others to plant trees?</p>
            {this.renderAddressField()}
          </Box>
          {this.state.center && <Box>{this.renderMap()}</Box>}
          {this.state.treeLocation && <Box>{this.renderNumTrees()}</Box>}
          {this.state.numTrees > 0 && <Box>{this.renderTrees()}</Box>}
          {this.state.trees.size > 0 && <Box>{this.renderDates()}</Box>}
          {this.state.dates.weekday.size > 0 && this.state.dates.time.size > 0 && (
            <Box>{this.renderSummary()}</Box>
          )}
        </Content>
      </Container>
    );
  }

  private renderAddressField() {
    return (
      <>
        <StandaloneSearchBox
          onLoad={ref => (this.searchBox = ref)}
          onPlacesChanged={() => this.updatePlace(this.searchBox.getPlaces() as any)}
        >
          <Input type="text" placeholder="Enter approximate address" />
        </StandaloneSearchBox>
      </>
    );
  }

  private updatePlace(places: Place[]) {
    const center = this.extractCoordinate(places);
    if (!center) return;
    this.setState({ center });
  }

  private extractCoordinate(places: Place[]) {
    try {
      return {
        lat: places[0].geometry.location.lat(),
        lng: places[0].geometry.location.lng()
      };
    } catch {
      // location not found, or doesn't have coordinates
      return null;
    }
  }

  private renderMap() {
    return (
      <GoogleMap
        id="example-map"
        mapContainerStyle={{
          height: '450px',
          width: '100%'
        }}
        zoom={20}
        center={this.state.center}
        onClick={e => this.selectLocation(e)}
        clickableIcons={false}
      >
        {this.state.treeLocation && (
          <Marker
            position={this.state.treeLocation}
            icon={{
              url: tree,
              scaledSize: { height: 70, width: 70 } as any
            }}
          />
        )}
      </GoogleMap>
    );
  }

  private selectLocation(e: { latLng: { lat: () => number; lng: () => number } }): void {
    const treeLocation = this.extractLocation(e);
    if (!treeLocation) return;
    this.setState({ treeLocation });
  }

  private extractLocation(e: { latLng: { lat: () => number; lng: () => number } }) {
    try {
      return { lat: e.latLng.lat(), lng: e.latLng.lng() };
    } catch {
      return null;
    }
  }

  private renderNumTrees() {
    return (
      <>
        <h4>Number of trees</h4>
        <p>How many trees do you allow to be planted?</p>
        <Input
          type="number"
          placeholder="Maximum number of trees"
          onChange={e => {
            const numTrees: number = (e.target as any).valueAsNumber;
            if (Number.isNaN(numTrees)) return;
            this.setState({ numTrees });
          }}
        />
      </>
    );
  }

  private renderTrees() {
    return (
      <div>
        <h4>Kind of trees</h4>
        <p>What kind of trees do you want to allow to plant?</p>
        <Columns>{this.renderTreesList()}</Columns>
      </div>
    );
  }

  private renderTreesList() {
    return trees.map(tree => (
      <Column key={tree.name}>
        <div
          style={{
            backgroundImage: `url(${`trees/${tree.name}.jpg`})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            minHeight: '300px',
            borderRadius: '10px',
            position: 'relative',
            cursor: 'pointer'
          }}
          onClick={() => this.toggleTree(tree)}
        >
          {this.state.trees.has(tree) && (
            <div
              style={{
                background: 'rgba(150,200,120,0.7)',
                width: '100%',
                height: '100%',
                position: 'absolute',
                borderRadius: '10px',
                textAlign: 'center',
                paddingTop: '50px',
                bottom: 0
              }}
            >
              <FontAwesomeIcon icon={faCheckCircle} size="8x" />
            </div>
          )}
          <div
            style={{
              background: 'rgba(255,255,255,0.8)',
              padding: '17px 15px',
              width: '100%',
              position: 'absolute',
              bottom: 0
            }}
          >
            <strong>{tree.name}</strong>
          </div>
        </div>
      </Column>
    ));
  }

  private toggleTree(tree: Tree) {
    const trees = this.state.trees;
    if (trees.has(tree)) trees.delete(tree);
    else trees.add(tree);
    this.setState({ trees });
  }

  private renderDates() {
    const dates = this.state.dates;
    return (
      <>
        <h4>Select Dates</h4>
        <div style={{ marginBottom: '10px' }}>
          {weekdays.map(weekday => (
            <Fragment key={weekday}>
              <Button
                isColor={dates.weekday.has(weekday) ? 'primary' : undefined}
                onClick={() =>
                  this.setState({
                    dates: { ...dates, weekday: this.toggleSetValue(dates.weekday, weekday) }
                  })
                }
              >
                {weekday}
              </Button>{' '}
            </Fragment>
          ))}
        </div>
        <div>
          {timesOfDay.map(timeOfDay => (
            <Fragment key={timeOfDay}>
              <Button
                isColor={dates.time.has(timeOfDay) ? 'primary' : undefined}
                onClick={() =>
                  this.setState({
                    dates: { ...dates, time: this.toggleSetValue(dates.time, timeOfDay) }
                  })
                }
              >
                {timeOfDay}
              </Button>{' '}
            </Fragment>
          ))}
        </div>
      </>
    );
  }

  private toggleSetValue<T>(set: Set<T>, value: T) {
    if (set.has(value)) set.delete(value);
    else set.add(value);
    return set;
  }

  private renderSummary() {
    return (
      <>
        <Columns>
          <Column>
            <h4>Summary</h4>

            <Content>
              <strong>{this.state.numTrees}</strong> tree{this.state.numTrees > 1 ? 's' : ''} will be
              planted, and the must be one of{' '}
              <strong>
                {trees
                  .filter(tree => this.state.trees.has(tree))
                  .map(tree => tree.name)
                  .join(', ')}
              </strong>
              . They will be planted on:{' '}
              <strong>
                {weekdays.filter(weekday => this.state.dates.weekday.has(weekday)).join(', ')}
              </strong>{' '}
              in the{' '}
              <strong>{timesOfDay.filter(time => this.state.dates.time.has(time)).join(', ')}</strong>.
            </Content>

            <Notification isColor="warning">
              <p>
                {' '}
                Remember: you can only allow places <strong>you own or manage</strong>. Otherwise,
                planters and eventually you will be responsible for the potential property damage you
                cause.
              </p>

              <p>
                <Checkbox onClick={() => this.setState({ agreed: !this.state.agreed })}>
                  {' '}
                  I hereby confirm that I am authorized to allow planting trees as specified above in
                  this location.
                </Checkbox>
              </p>
            </Notification>

            <Button isColor="primary" disabled={!this.state.agreed}>
              Provide location to plant tree{this.state.numTrees > 1 ? 's' : ''}
            </Button>
          </Column>
          <Column>
            <GoogleMap
              id="example-map"
              mapContainerStyle={{
                height: '450px',
                width: '100%'
              }}
              zoom={20}
              center={this.state.treeLocation}
              clickableIcons={false}
            >
              {this.state.treeLocation && (
                <Marker
                  position={this.state.treeLocation}
                  icon={{
                    url: tree,
                    scaledSize: { height: 70, width: 70 } as any
                  }}
                />
              )}
            </GoogleMap>
          </Column>
        </Columns>
      </>
    );
  }
}

interface Place {
  geometry: { location: { lat: () => number; lng: () => number } };
}

interface Coord {
  lat: number;
  lng: number;
}

interface Tree {
  name: string;
  desc: string;
}
