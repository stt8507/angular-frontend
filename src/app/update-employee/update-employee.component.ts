import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id!: number;
  employee: Employee = new Employee();

  constructor(private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeesById(this.id).subscribe(data => {
    this.employee = data;
    }, errors => console.log(errors));
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
    this.gotoEmployeeList();
    },errors => console.log(errors))
  }

  gotoEmployeeList() {
    this.router.navigate(['/employees'])
  }

}
