import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  public userId: string|null
  public user: User|null = null

  constructor(private route: ActivatedRoute, private userManagementService: UserManagementService) {
    this.userId = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    if (this.userId) {
      this.getUserDataById(this.userId)
    }
  }

  getUserDataById(id: string): void {
    const user = this.userManagementService.getUserById(id)
    if (user) this.user = user
  }

}
