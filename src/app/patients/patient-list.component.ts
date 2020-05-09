import { Component, OnInit } from '@angular/core';
import { IPatient } from './patient';
import { PatientService } from './patient.service';

@Component({
    selector:"patient-list",
    templateUrl: `./patient-list.component.html`,
    styleUrls: [`./patient-list.component.css`]
})
export class PatientListComponent implements OnInit{
    
    pageTitle: string = 'Patient List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    private _listFilter: string;
    errorMessage: string;
    p: number = 1;

    
    constructor(private patientService : PatientService){
    }
    
    public get listFilter(): string {
        return this._listFilter;
    }

    public set listFilter(value: string) {
        this._listFilter = value;
        this.filteredPatients = this.listFilter ? this.performFilter(this.listFilter) : this.patients;
    }

    filteredPatients: IPatient[];
    patients: IPatient[];

    performFilter (filterBy: string) : IPatient[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.patients.filter((patient : IPatient) =>
            patient.first_name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit(): void {
        this.patientService.getPatients().subscribe(
            patients => {
                this.patients = patients
                this.filteredPatients = this.patients;
            },
            err => this.errorMessage = err           
     );
        this.filteredPatients = this.patients;
    }
}