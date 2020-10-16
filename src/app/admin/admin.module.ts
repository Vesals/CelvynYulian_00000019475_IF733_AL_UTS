import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import { AddComponent } from '../item/add/add.component';
import { EditComponent } from '../item/edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AdminPageRoutingModule
  ],
  declarations: [AdminPage, AddComponent, EditComponent]
})
export class AdminPageModule {}
