import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentListComponent } from './departments/department-list/department-list.component';
import { DepartmentComponent } from './departments/department/department.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentService } from './services/department.service';
import { NotificationService } from './notification.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DepartmentListComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DepartmentService, NotificationService],
  bootstrap: [AppComponent],
  entryComponents: [DepartmentComponent]
})
export class AppModule { }
