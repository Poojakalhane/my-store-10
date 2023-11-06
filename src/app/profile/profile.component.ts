import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forbiddenNameValidator } from '../forbidden-name.validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //to access the querry parameter we will
  //inject the activatedroute service in the componenet
 
  queryParam : any
constructor(private route: ActivatedRoute,
            private fb: FormBuilder){}
ngOnInit():void{
    this.route.queryParams.subscribe(params => this.queryParam = params)
//       {
//                                                console.log('Name =' + params['name'])
//                                                console.log('Age =' + params['age'])
//                                               console.log('Marks =' + params['marks'])
// })
}
// name = new FormControl()

profileForm =this.fb.group({
  name:['',{
    validators: [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      forbiddenNameValidator(new RegExp(/any/,'i'))
    ]
  }],
  email:['',{
    validators: [
      Validators.required,
      Validators.email
    ]}
  ],
  mobile:['',{
    validators: [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ]}
  ]
})

get profileControls(){
  return this.profileForm.controls
}
}

