import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  regForm=new FormGroup({
    uName: new FormControl ('',[Validators.required]),
    pWord: new FormControl ('',[Validators.required])
  })

}
