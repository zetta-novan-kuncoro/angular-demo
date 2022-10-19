import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs'
import { NormalizeStringPipe } from 'src/app/pipes/normalize-string.pipe';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public users: Observable<User[]>
  public query: FormControl<string|null> = new FormControl(null)

  constructor(private userManagementService: UserManagementService, private normalizeString: NormalizeStringPipe) {
    this.users = this.userManagementService.users$
  }

  ngOnInit(): void {
    this.query.valueChanges.subscribe(value => {
      if (value) {
        const normalizedString = this.normalizeString.transform(value)
        this.users = this.userManagementService.searchUserByName(normalizedString)
      } else {
        this.users = this.userManagementService.users$
      }
    })
  }

}
