import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class Tab1Service {


  myDogs = []

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

  loadDogs(){
    this.storage.get('myDogs');
  }
}
