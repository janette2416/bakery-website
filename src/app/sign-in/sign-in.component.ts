import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  regForm=new FormGroup({

    uName: new FormControl ('',[Validators.required]),
    pWord: new FormControl ('',[Validators.required])
  })
}
