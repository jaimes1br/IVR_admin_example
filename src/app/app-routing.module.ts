import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreAddComponent } from './store-add/store-add.component';
import { StoreEditComponent } from './store-edit/store-edit.component';
import { StoreOverrideeComponent } from './store-overridee/store-overridee.component';

const routes: Routes = [
  {path: '', component: StoreListComponent},
  {path: 'storeAdd', component: StoreAddComponent,},
  {path: 'storeEdit', component: StoreEditComponent,},
  {path: 'storeOverride', component: StoreOverrideeComponent,},
  {path: '**', pathMatch: 'full', redirectTo:'/'},
  // {path: '**', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
