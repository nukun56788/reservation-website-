import { Routes } from '@angular/router';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { AdminComponent } from './page/admin/admin.component';
import { BootComponent } from './page/boot/boot.component';
import { DetailsComponent } from './page/details/details.component';
import { EventComponent } from './page/event/event.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { ReserveComponent } from './page/reserve/reserve.component';
import { ZoneComponent } from './page/zone/zone.component';

export const routes: Routes = [
    {path: '', component: EventComponent},
    {path: 'admin', component:AdminComponent},
    {path: 'boot', component:BootComponent},
    {path: 'details', component:DetailsComponent},
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'reserve', component:ReserveComponent},
    {path: 'zone', component:ZoneComponent},
    {path: '**', component: NotfoundComponent},
];
