import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public users: Observable<User[]>

  constructor(private userManagementService: UserManagementService) {
    this.users = this.userManagementService.users$
  }

  ngOnInit(): void {
  }

}
