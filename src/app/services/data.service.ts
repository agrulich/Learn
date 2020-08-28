import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Teacher } from '../models/teacher';
import { Schedule } from '../models/schedule';
import { Student } from '../models/student';

import { teachers } from '../data/data_teacher';
import { schedules } from '../data/data_schedule';

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class DataService {

  loggedIn : Boolean = false;

  currentTeacher : Teacher[];

  currentSchedule : Schedule[];

  currentStudents : Student[];

  readonly rootURL = 'https://assessment-web.guhsd.net/LEARN/api/';

  constructor(private _http : HttpClient) { }

  getTeacherByEmail(email : string){
    //email: tstanley@guhsd.net
     this._http.get(this.rootURL+'teacher?email='+email)
      .toPromise().then(data => this.currentTeacher = data as Teacher[]);
      
      this.loggedIn = true;

  }

  getScheduleByTeacherId(teacher_id : number){
    //teacher_id: 77877
    this._http.get(this.rootURL+'schedule?tchr_id='+teacher_id)
     .toPromise().then(data => this.currentSchedule = data as Schedule[]);
 }

  getStudentsBySectionId(section_id : number){
    this._http.get(this.rootURL+'students/?section_id='+section_id)
    .toPromise().then(data => this.currentStudents = data as Student[]);
  }

  updateStudentById(stu : Student){
  
    return this._http.put(this.rootURL+'students/' + stu.Id, stu);

    //return this._http.put('http://localhost:62378/api/'+'students/' + stu.Id, stu);
  }


}
