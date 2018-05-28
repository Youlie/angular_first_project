import { platformBrowser, BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { Appcomponent } from './app.component';

@NgModule({
    declarations: [Appcomponent],
    imports: [BrowserModule],
    bootstrap :[Appcomponent]
})
export class AppModule { }