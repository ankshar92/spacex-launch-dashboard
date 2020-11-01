# SpaceX Launch Programs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development server for Server Side Rendering

Run `npm run dev:ssr` for a dev server with SSR. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Build for Server Side Rendering

Run `npm run build:ssr` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deployment on Heroku

Code once pushed to the master branch would start the deployment process on Heroku. Hence, ensure that the master branch is always in a stable state.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Technical approach for the project

## Server Side Rendering

The application has been built as a universal application, i.e., as a Server Side Rendered application. The initial page is rendered on the server side using an express server. After delivering the initial page to the browser, any further action is handled on the client side.

## Progressive Web App

The application has been built as a PWA by enabling the service worker in order to improve the performance of the application and hence improving the lighthouse score

However, installing a new update of the application by updating the service worker is not yet handled and could be taken as an enhancement for the application.

## Responsiveness

The application is made responsive for mobile, tablet and desktop devices with the help of custom media queries. There is a one column product tile view for the mobile devices, 2 column product tile view for the tablet devices and 4 column product tile view for the desktop devices.

## Unit Tests

Unit tests have been written and a good code coverage is maintained. Below is the screenshot of the code coverage statistics.

![Code Coverage Statistics](https://github.com/ankshar92/spacex-launch-dashboard/blob/readme/statistics/Unit%20Test%20Coverage.png?raw=true)

## Lighthouse Statistics

The summary reports for both desktop and mobile devices based on no filters / filters applied are present inside the statistics folder under the root folder.

Here is the link for the reports for quick reference: [Reports](https://github.com/ankshar92/spacex-launch-dashboard/tree/readme/statistics)

Below are the statistics based on the lighthouse report

### Desktop - When no filter is applied

![Desktop - When no filter is applied](https://github.com/ankshar92/spacex-launch-dashboard/blob/readme/statistics/Desktop-No-Filter-Applied.png?raw=true)

### Desktop - Filter is applied

![Desktop - Filter is applied](https://github.com/ankshar92/spacex-launch-dashboard/blob/readme/statistics/Desktop-Launch-Year-Filter-Applied.png?raw=true)

### Mobile - When no filter is applied

![Mobile - When no filter is applied](https://github.com/ankshar92/spacex-launch-dashboard/blob/readme/statistics/Mobile-No-Filter-Applied.png?raw=true)

### Mobile - Filter is applied

![Mobile - Filter is applied](https://github.com/ankshar92/spacex-launch-dashboard/blob/readme/statistics/Mobile-Launch-Year-Filter-Applied.png?raw=true)
