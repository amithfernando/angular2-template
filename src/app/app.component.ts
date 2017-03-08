import { Component } from '@angular/core';
import {HeaderComponent} from './ui/header/header.component'
import {FooterComponent} from './ui/footer/footer.component'
import {NavigationComponent} from './ui/navigation/navigation.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents:[HeaderComponent,FooterComponent,NavigationComponent]
})
export class AppComponent {
 
}
