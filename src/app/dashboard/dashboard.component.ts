import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

selectedItem;
hideCell : boolean = true;
selectedItemForMaterialIncome;
hideCellsOfMerging : boolean = true;
  constructor() { }

  ngOnInit() {
    this.selectedItem = null;
    this.selectedItemForMaterialIncome = null;
    console.log(this.selectedItem)
    
    if(this.selectedItem === null){
      this.hideCell = false;
      console.log('hello')
    }
    if(this.selectedItemForMaterialIncome === null){
          this.hideCellsOfMerging = false;
    }
      //  var e = document.getElementsByTagName("select")[0];
      //   var myValue = e.options[e.selectedIndex].value;

      //   console.log(myValue);
  }
  
onChange(newValue){
  console.log(newValue);

 if(newValue === ""){
    console.log('cost true');
     this.hideCell = false;
  }

  if(newValue === "cost"){
    console.log('cost true');
     this.hideCell = true;
  }
  if(newValue === "yes"){
    console.log('yes');

  }

}

onChangeofMaterialIncome(newValue){
   if(newValue === ""){
    console.log('null');
     this.hideCell = false;
  }
  if(newValue === "yes"){
    console.log('yes');
     this.hideCellsOfMerging = true;
  }
 if(newValue === "no") { 
    console.log('no');
     this.hideCellsOfMerging = false;
    
  }

}
}
