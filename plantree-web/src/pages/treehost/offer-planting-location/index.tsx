import React, { Component } from 'react';
import './styles.scss';
import { Content, Box, Notification, Input } from 'bloomer';
import { Container } from 'bloomer/lib/layout/Container';
import { GoogleMap, StandaloneSearchBox } from '@react-google-maps/api';

interface S {
  center?: Coord;
}

export class OfferPlantingLocation extends Component<{}, S> {
  searchBox: { getPlaces: () => void } = null as any;
  // state: S = { center: undefined };
  state: S = { center: { lat: 47.39015, lng: 8.515817 } }; // technopark - enable for debugging

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
          <Box>Select Trees</Box>
          <Box>Select Dates</Box>
          <Box>
            <Notification isColor="warning">
              Remember: you can only allow places <strong>you own or manage</strong>. Otherwise, planters
              and eventually you will be responsible for the potential property damage you cause.
            </Notification>
          </Box>
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
      />
    );
  }

  selectLocation(e: any): void {
    console.log(e);
  }
}

interface Place {
  geometry: { location: { lat: () => number; lng: () => number } };
}

interface Coord {
  lat: number;
  lng: number;
}
