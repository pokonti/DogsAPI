import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { SearchComponent } from "../search/search.component";

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css',
    imports: [RouterLink, RouterLinkActive, SearchComponent]
})
export class MenuComponent {

}
