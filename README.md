# PLANTTree

## About

This project is about neutralizing CO2 emissions. It enables land owners to provide their space for others to plant trees. People interested in the environment can book a spot to plant trees. It also allows for sponsors to make donations to plant trees.

## Implemented Features

* General
  * Authentication / Authorization using Firebase Auth
  * Homepage
    * Information about why it is important
    * The team who built it
    * Partner
  * Newsletter subscription (using mailchimp)
  * Contact form (using google forms)
  * Social sharing
* Treehost
  * Create new planting location
    * Search for an address
    * Show map around this address, where exact location can be chosen
    * Define the number of trees, and what kind of trees can be planted
    * Define the dates (weekday, time of day) when planting is allowed
    * Planting locations are persisted in firestore
  * List planting locations
    * Display details about location
    * Display details about planters who reserved a spot, and when they want to plant the trees
    * Social sharing buttons
  * Delete planting locations
* Sponsor page
  * Available plans to support growing trees financially
* Planter (Android App)
  * Login / Registration
  * Info: How to plant trees?
  * Planting locations
    * List planting locations
    * Display near planting locations on map
    * Directions
  * Details about planting location
    * Map
    * Location
    * Directions
    * Treehost
    * Contact
  * My upcoming plantings
    * Display available trees
    * Details
  * Display my planted trees
  * Statistics & about page
    * About recovered CO2
  * Social sharing


## Demos

### Creating a new planting location

![Creating a new planting location](https://github.com/lukaselmer/hackzurich2019/raw/master/docs/plantree-provide-location.gif)


## Web Application

### About

The web application is mainly for the land owners to register areas that they offer for others to plant trees. Also, it allows sponsors to make donations for tree plantation.

### Technologies

React, HTML, SCSS, Bulma, TypeScript, Firebase, Google Maps API, Places API

### Start the app

* Install VS code: https://code.visualstudio.com/download
* Install Node: https://nodejs.org/en/download/
* Install yarn: https://yarnpkg.com/lang/en/docs/install/#mac-stable
* Clone the repository:  `git clone git@github.com:lukaselmer/hackzurich2019.git`
* Navigate into the web app: `cd plantree-web`
* Install dependencies: `yarn install`
* Start development server: `yarn start` 

## Mobile Application

### About

The mobile application is mainly for the planters. It is used to reserve a spot to plant trees, as well as navigating to the location. It also allowes to collect points and share the achievements on social media.

### Technologies

Android, Kotlin, Google Maps API, Places API

### Start the app

* Install Android Studio: https://developer.android.com/studio?gclid=CjwKCAjwibzsBRAMEiwA1pHZrp34wDyFiH1_a20ba8fvMT52HoAwfa02DooVG8MMEd4I38mfepVnIRoC9tEQAvD_BwE
* Clone the repository: `git clone git@github.com:lukaselmer/hackzurich2019.git`
* Navigate into the mobile app: `cd mobile`
* Open Android Studio and run the project
* Run the project on a hardware device

