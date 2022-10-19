import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { UserManagementService } from '../user-management.service';
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>()
  public form: FormGroup
  public userTypes: User['type'][] = ['ADMIN', 'SUPERADMIN', 'DIRECTOR']
  public userId: string|null
  public mode: 'edit' | 'create'

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private userManagementService: UserManagementService) {
    this.userId = this.route.snapshot.paramMap.get('id')
    this.mode = this.userId ? 'edit' : 'create'
    this.form = this.fb.group({
      id: [null, [Validators.required]],
      name: [null, [Validators.required]],
      age: [null, [Validators.required, Validators.min(10)]],
      gender: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      type: [null, [Validators.required]],
      marital_status: [null, [Validators.required]],
      addresses: this.fb.array([this.createAddressFormGroup()])
    })
  }

  get addresses(): FormArray {
    return this.form.get('addresses') as FormArray
  }

  ngOnInit(): void {
    if (this.userId) this.patchFormWithUser(this.userId)
    this.form.get('name')?.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe((value: string) => {
      this.form.get('name')?.patchValue(value.replace(/[^a-zA-Z ]/g, ""), { emitEvent: false })
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }

  patchFormWithUser(id: string) {
    const user = this.userManagementService.getUserById(id)
    if (!user) return
    for (let i = 1; 1 < user.addresses.length; i++) {
      this.addresses.push(this.createAddressFormGroup())
    }
    this.form.patchValue(user)
  }

  createAddressFormGroup(): FormGroup {
    return this.fb.group({
      address: [null, [Validators.required]],
      zip: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(9), Validators.pattern('[0-9]*')]],
      city: [null, [Validators.required]],
      country: [null, [Validators.required]],
    })
  }

  addAddress(): void {
    this.addresses.push(this.createAddressFormGroup(), { emitEvent: true })
  }

  submit(): void {
    if (!this.form.valid) {
      this.form.markAllAsTouched()
    } else {
      const payload = this.form.value;
      this.userManagementService.addUser(payload)
      this.router.navigate(['..'])
    }
  }
}
