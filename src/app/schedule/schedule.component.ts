import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Data } from '@angular/router';
import { Teacher } from '../models/teacher';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(public service : DataService) { }

  ngOnInit() {

      this.service.getScheduleByTeacherId(this.service.currentTeacher[0].teacherPersonId);

  }

  public cellClickHandler({ isEdited, dataItem, rowIndex }): void {
      console.log(dataItem.sectionId);
      this.service.getStudentsBySectionId(dataItem.sectionId);
  }

}
