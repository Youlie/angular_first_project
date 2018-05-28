import 'core-js';
import 'reflect-metadata'; //gérer les annotations du décorateurs
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// ici on va démmarer Angular ...

import {AppModule} from './app/app.module';
platformBrowserDynamic().bootstrapModule(AppModule).catch(
    err => console.log(err)
)