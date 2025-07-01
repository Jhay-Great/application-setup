import { Component } from '@angular/core';

import {
  ButtonComponent,
  DropdownComponent,
  InputElementComponent,
} from '@shared/components';

@Component({
  selector: 'app-login',
  imports: [DropdownComponent, ButtonComponent, InputElementComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
