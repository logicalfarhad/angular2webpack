///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {SeedApp} from './app/components/heroList/seed-app';
bootstrap(SeedApp).catch(err => console.error(err));
