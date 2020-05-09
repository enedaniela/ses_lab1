import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { PatientListComponent } from './patient-list.component';
import { PatientDetailComponent } from './patient-detail.component';
import { StarComponent } from '../shared/star.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PatientDetailGuard } from './patient-detail.guard';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@NgModule({
    imports:[
        NgxPaginationModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'patients', component: PatientListComponent},
            { path: 'patients/:id', canActivate: [PatientDetailGuard], component: PatientDetailComponent},
        ])
    ],
    declarations:[
        PatientListComponent,
        ConvertToSpacesPipe,
        StarComponent,
        PatientDetailComponent,
    ]

})
export class PatientModule{}