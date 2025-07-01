import { Component } from '@angular/core';

import { ButtonComponent, DropdownComponent } from '@shared/components';

@Component({
  selector: 'app-login',
  imports: [DropdownComponent, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
