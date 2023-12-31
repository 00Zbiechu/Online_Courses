import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ParticipantComponent } from './components/participant/participant.component';


@NgModule({
  declarations: [
    ParticipantComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    FontAwesomeModule,
    ButtonModule,
    DividerModule,
    RouterModule.forChild([
      { path: '', component: ParticipantComponent }
    ])
  ]
})
export class ParticipantModuleModule { }
