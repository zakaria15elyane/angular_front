import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  myArray : any = [];
  myCommade:any={
    id:'',
    name:'',
    poids:'',
    prix:''
  }
  myCondition=false;
  constructor(private myVar : CommandeService) { }

  ngOnInit() {
    this.getCommande();
  }
  getCommande(){
    this.myVar.getAll()
    .subscribe(data => {
      this.myArray = data;
    })
  }
  deleteCommande(id){
    this.myVar.delete(id)
    .subscribe(()=>{
      this.myArray=this.myArray.filterr
      (myVariable=>myVariable.id!=id)
    })
  }
postCommande(){
  this.myVar.post(this.myCommade)
  .subscribe((myVarialble)=>{
    this.myArray=[myVarialble,...this.myArray]
    this.viderInput();
  })

}
viderInput(){
  this.myCommade={
    id:'',
    name:'',
    poids:'',
    prix:''
  }
}
editCommande(myVariable){
  this.myCommade=myVariable;
  this.myCondition=true;
}
updateCommande(){
  this.myVar.updateCommande(this.myCommade)
  .subscribe(commande=>{
    this.viderInput();
    this.myCondition=false;
  })

}
}



