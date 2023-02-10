import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { LoadingComponent } from './loading/loading.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    MessagesComponent,
    LoadingComponent
  ],
  imports: [
    AlertModule.forRoot(),
    CommonModule,
    MatProgressBarModule
  ],
  exports: [
    MessagesComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
