import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommentsModel } from 'src/app/models/comments.model';
import { NotificationService } from 'src/app/notification.service';
import { DepartmentService } from 'src/app/services/department.service';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(public _service: DepartmentService, public _dialogRef: MatDialogRef<DepartmentComponent>, public _notification: NotificationService) { }

  ngOnInit(): void {
  }

  onClose() {
    this._service.form.reset();
    this._service.initializeFormGroup();
    this._dialogRef.close();
    this._service.filter('');
  }

  onClear() {
    this._service.form.reset();
    this._service.initializeFormGroup();
  }

  onSubmit() {
    var odept = new CommentsModel();
    odept.postId = this._service.form.value['postId'];
    odept.id = this._service.form.value['id'];
    odept.name = this._service.form.value['name'];
    odept.email = this._service.form.value['email'];
    odept.body = this._service.form.value['body'];

    this._service.insupdcomments(odept)
      .subscribe
      (
        data => {
          this._service.form.reset();
          this._service.initializeFormGroup();
          this._notification.success(":: Submitted Successfully !!");
          this.onClose();
        }

      )

  }
}
