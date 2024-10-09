import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { AdminComponent } from './page/admin/admin.component';
import { BoothComponent } from './page/booth/booth.component';
import { DetailsComponent } from './page/details/details.component';
import { EventComponent } from './page/event/event.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { ReserveComponent } from './page/reserve/reserve.component';
import { ZoneComponent } from './page/zone/zone.component';
import { NgModule } from '@angular/core';




export const routes: Routes = [
    {path: '', component: EventComponent},
    {path: 'admin', component:AdminComponent},
    {path: 'booth', component:BoothComponent},
    {path: 'details', component:DetailsComponent},
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'reserve', component:ReserveComponent},
    {path: 'boot', component:ZoneComponent},
    {path: '**', component: NotfoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
