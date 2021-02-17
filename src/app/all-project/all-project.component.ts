import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-project',
  templateUrl: './all-project.component.html',
  styleUrls: ['./all-project.component.css']
})

export class AllProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void
  {
     console.log("hello"+this.pro);
    // console.log("hello"+this.pro.description);
    // console.log("hello"+this.pro.projectName);
    
  }
@Input() proName: string[] = []; 
@Input() proDes: string[] = [];
@Input() pro:any

// splittedPro = this.proName.split(":"); 
// splittedDes= this.proDes.split(":")
front:boolean=false
look:boolean=true
project:string='none'
projectDis:string='none'
homePage()
{
  this.front=true
  this.look=false

}
currentPro:string='none'
ppro:boolean=true
ppdes:boolean=false
showDes(project:string)
{
  this.currentPro=project
  this.ppro=false
  this.ppdes=true
  this.project=project 
  let i=0
  while(this.proName!==null)
  {
    if(project===this.proName[i])
    {
      this.project=this.proDes[i]
      break
    }
    i++;
  }
  this.projectDis=this.project
}
// proPage:boolean=true
disPage:boolean=true
Allpro()
{
  this.ppro=true
  this.ppdes=false

}
demo:String[]=[]
delProject(project:string)
{
  
 let  i=0
  while(this.proName!==null)
  {
    if(project===this.proName[i])
    {
      this.demo=this.proName.splice(i)
      console.log(this.demo.length);
      console.log(this.proName.length);
     // console.log(this.proName[i])
      
      
      break
    }
    i++
  }
  let j=0
  // while(this.demo!=null)
  // {
  //   console.log(this.demo[j])
  //   j++
  // }
}
details:boolean=false
showDetails()
{
  this.details=true
  this.ppro=false

}


}
