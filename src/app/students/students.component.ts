import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { Data } from '@angular/router';
import { Teacher } from '../models/teacher';
import { Student } from '../models/student';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(public service : DataService, private toastr : ToastrService) { }

  public listItems: Array<string> = ["Meeting Standard", "Approaching Standard", "Below Standard", "Not Observed"];

  ngOnInit(): void {

    this.service.getStudentsBySectionId(this.service.currentTeacher[0].SectionId);

  }

  public onCategoryChange(e, dataItem, qnum) {

    if(qnum==1) {
      dataItem.Input1 = e;
    }

    if(qnum==2) {
      dataItem.Input2 = e;
    }

    this.service.updateStudentById(dataItem as Student)
      .subscribe(res => {
        this.toastr.success("Successfully Updated");
      });

  }

}
