import { OnInit, Component } from '@angular/core';
import { IPatient } from './patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from './patient.service';

@Component({
    templateUrl: './patient-detail.component.html',
    styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

    pageTitle: string = 'Patient Detail';
    patient: IPatient;
    patients : IPatient[];
    errorMessage: string;

    constructor(private route: ActivatedRoute, private router: Router, private patientService: PatientService){

    }
    ngOnInit(){
        let id = +this.route.snapshot.paramMap.get('id');
        this.patientService.getPatients().subscribe(
            patients => {
                this.patients = patients;
                this.patient = this.patients.filter(p => p.id == id)[0];
            },
            err => this.errorMessage = err          
            );
        
        

    }

    onBack() : void{
        this.router.navigate(['/patients']);
    }
    
}