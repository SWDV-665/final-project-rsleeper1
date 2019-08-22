import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';



const DOG_KEY = 'myDogKey'

@Injectable({
  providedIn: 'root'
})

//CRUD Operations Service
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



  editDog(index, dog){
    this.myDogs[index] = dog;
  }


  removeDog(dog, index){
    this.myDogs.splice(index, 1);
  }


}

class MyDogs{
  data: [];
}