import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';



const DOG_KEY = 'myDogKey'

@Injectable({
  providedIn: 'root'
})


export class Tab1Service {


  public myDogs: MyDogs[] = [];
  

  constructor(private storage: Storage) { }

  getDogs(){
    return this.myDogs;
  }

  addDog(dog){
    this.myDogs.push(dog);
    this.storage.set('myDogs', this.myDogs);
  }

  //addDog(dog) {
    //this.myDogs.unshift({
      //data: dog}); 
    //this.storage.set(DOG_KEY, this.myDogs);  
  //}


  editDog(index, dog){
    this.myDogs[index] = dog;
  }


  removeDog(dog, index){
    this.myDogs.splice(index, 1);
  }

  //getDogs() {
    //this.storage.get(DOG_KEY).then((myDogs) => {
      //this.myDogs = myDogs || [];
    //});
  //}

}

class MyDogs{
  data: [];
}