import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentListComponent } from './departments/department-list/department-list.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeComponent } from './employees/employee/employee.component';

const routes: Routes = [

  {path:'', component: DashboardComponent },
  {path:'dashboard', component: DashboardComponent },
  {path:'employee', component: EmployeeComponent },
  {path:'employeelist', component: EmployeeListComponent },
  {path:'departmentlist', component: DepartmentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
