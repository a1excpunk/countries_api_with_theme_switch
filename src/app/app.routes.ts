import { Routes } from '@angular/router';

import { DetailsPageComponent } from './details-page/details-page.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
    { path: 'main', component: MainPageComponent },
    { path: 'details-page', component: DetailsPageComponent },
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
