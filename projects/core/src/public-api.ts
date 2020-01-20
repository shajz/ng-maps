/*
 * Public API Surface of core
 */

// main modules
export * from './lib/interface/layers';
export * from './lib/interface/bounds';
export * from './lib/interface/geo-point';
export * from './lib/interface/marker';
export * from './lib/interface/circle-options';
// directives
export * from './lib/directives';
// services
export * from './lib/services';

// core module
// we explicitly export the module here to prevent this Ionic 2 bug:
// http://stevemichelotti.com/integrate-angular-2-google-maps-into-ionic-2/
export {
  NgMapsCoreModule,
  MAP_PROVIDER,
  isGoogleMaps,
  isHereMaps,
} from './lib/core.module';
