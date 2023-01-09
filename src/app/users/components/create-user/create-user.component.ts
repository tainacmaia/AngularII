import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { State } from '../../models/state.model';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  public form!: FormGroup;
  public user!: User;
  public states!: State[];
  public userId!: string;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.getStates();
    this.userId = this.route.snapshot.params['id'];
    if (this.userId) {
      this.updateForm();
    }
  }

  private updateForm(): void {
    const user = this.usersService.getUserById(this.userId);
    this.form.patchValue(user);
  }

  private buildForm(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(60),
      ]),
      profession: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(60)
      ]),
      birthDate: new FormControl('', [
        Validators.required
      ]),
      documentNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11)
      ]),
      address: new FormGroup({
        zipCode: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8)
        ]),
        street: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(60)
        ]),
        number: new FormControl('', [
          Validators.required,
        ]),
        complement: new FormControl('', [
          Validators.maxLength(20)
        ]),
        neighborhood: new FormControl('', [
          Validators.required,
          Validators.maxLength(60)
        ]),
        city: new FormControl('', [
          Validators.required,
          Validators.maxLength(60)
        ]),
        state: new FormControl('', [
          Validators.required,
        ]),
      }),
      contact: new FormGroup({
        phone: new FormControl('', [
          Validators.required,
        ]),
        email: new FormControl('', [
          Validators.required,
        ]),
      }),
    })
  }

  private getStates(): void {
    this.states = this.usersService.getStatesOfBrazil();
  }

  public onSubmit(): void {
    const user = this.form.getRawValue();
    if (this.userId) {
      this.usersService.editUser(user);
    } else {
      this.usersService.saveUser(user);
    }
    this.form.reset();
    this.router.navigate(['/users']);
  }
}

