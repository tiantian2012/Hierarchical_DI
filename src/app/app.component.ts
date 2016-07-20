import { Component } from '@angular/core';
import { HeroesListComponent } from './heroes-list.component';
import { HeroesService } from './heroes.service';

@Component({
    selector:'my-app',
    template:'<heroes-list></heroes-list>',
    directives:[HeroesListComponent],
    providers:[HeroesService]
})
export class AppComponent {
}