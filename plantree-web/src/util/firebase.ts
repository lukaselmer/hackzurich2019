import { Unpacked } from './ts-utils';

export const firebasePaths = {
  plantingLocations: '/planting_locations/'
};

export const firebaseConfig = {
  apiKey: 'AIzaSyAohft0DdRVswDugjjMC03pE5XoftNz9Lc',
  projectId: 'plantreex',
  databaseURL: 'https://plantreex.firebaseio.com',
  authDomain: 'plantreex.firebaseapp.com',
  storageBucket: 'plantreex.appspot.com',
  messagingSenderId: '942045837063',
  appId: '1:942045837063:web:f13d5a05a2911415da37a2',
  measurementId: 'G-EGHDWE7KTR'
};

export const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
] as const;
export const timesOfDay = ['Morning (9am-12am)', 'Afternoon (1pm-5pm)', 'Evening (5pm-8pm)'] as const;

export type Weekday = Unpacked<typeof weekdays>;
export type TimeOfDay = Unpacked<typeof timesOfDay>;

export interface PlantingLocation {
  id: string;
  numTrees: number;
  treeLocation: Coord;
  trees: Tree[];
  dates: { weekday: Weekday[]; time: TimeOfDay[] };
  nowOnServer: { seconds: number; nanoseconds: number };
  createdAt: Date;
}

export interface Coord {
  lat: number;
  lng: number;
}

export interface Tree {
  name: string;
  desc: string;
}

export function zipIds<T>(ids: string[], elements: T[]) {
  return elements.map((el, index) => ({ ...el, id: ids[index] }));
}

export function convertPlantingLocations(dbRequest: { value: PlantingLocation[]; ids: string[] }) {
  const { ids, value } = dbRequest;
  return zipIds<PlantingLocation>(
    ids,
    value.map(plantingLocation => ({
      ...plantingLocation,
      createdAt: plantingLocation.nowOnServer
        ? new Date(plantingLocation.nowOnServer.seconds * 1000)
        : new Date()
    }))
  );
}
