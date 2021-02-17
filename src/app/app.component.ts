import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
public  projectForm : FormGroup ;
 name:string='none'
 des:string='none'
 pNames: string[] = []; 
 pDis: string[] = []; 
 proAll:any
 i:number=0
 

 
  constructor(private formBuilder: FormBuilder) {
    this.projectForm=this.formBuilder.group({
      projectName :[],
      description :['',Validators.required]
    });
   }
  ngOnInit() 
  {
    // this.projectForm=this.formBuilder.group({
    //   projectName :[],
    //   description :['',Validators.required]
    // });
  }
  frontPage:boolean=true
  add:boolean=false;
  view:boolean=false
  public display ='none'

   AddProject()
   {
     this.add=true;
     this.display='block'
     

  }
  ViewAllProject()
  {
    this.frontPage=false
    this.view=true
  }
  OnCloseHandled()
  {
    this.display='none'
  }
    saveProject()
    {
      this.name=this.projectForm.value.projectName
      this.des=this.projectForm.value.description
      this.pNames[this.i]=this.name;
      this.pDis[this.i]=this.des;
      this.proAll=this.projectForm.value
      
      

      this.i=this.i+1;
      
   //   console.log(this.projectForm.get("projectName").value);
    
      // console.log(this.projectForm.value);
      
      
      this.OnCloseHandled();
      
      
    }
    
    
    
  


}
