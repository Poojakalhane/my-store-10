import { Component,Input,OnInit,OnChanges,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit,OnChanges{

  //here we will declare two variables
  //as two values will be coming as the input from the parent component
 
  @Input()
  num1!:number;
  @Input()
  num2!:number;

  @Output()
  resultEmitter = new EventEmitter<string>();

  result = 0;

  ngOnInit(): void{
    console.log("res component initialized")
    console.log(this.num1)
    console.log(this.num2)
    this.result =0
    console.log(this.result)
  }
  ngOnChanges(): void {
    console.log("ngOnChange is called")
    console.log(this.num1)
    console.log(this.num2)
    this.result=this.num1+this.num2
    this.resultEmitter.emit("the result comming from child="
                            +this.result)
    console.log("result", this.result)
  }



  
}
