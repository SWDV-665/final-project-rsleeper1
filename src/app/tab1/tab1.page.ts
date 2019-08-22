import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Platform, ToastController } from '@ionic/angular';
import { Tab1Service } from '../tab1.service';
import { Tab1InputService } from '../tab1-input.service';
import { PhotoService } from '../services/photo.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

//My Dogs Tab
export class Tab1Page {

  title = "My Dogs"
  


  constructor(private plt: Platform, public alertController: AlertController, public toastController: ToastController, public tab1Service: Tab1Service, public tab1InputService: Tab1InputService, public photoService: PhotoService, private storage: Storage) {
  
}

  ngOnInit() {
    this.photoService.loadSaved();
    this.tab1Service.getDogs();
  }

  loadDogs(){
    return this.tab1Service.getDogs();
  }

  addDog(){
    this.tab1InputService.dogPrompt();
  }

  removeDog(dog, index){
    this.presentToast(dog, index);
  }


  async editDog(dog, index) {
    const toast = await this.toastController.create({
      message: 'Editing dog - ' + dog.name + "...",
      duration: 2000
    });
    toast.present();
    this.tab1InputService.dogPrompt(dog, index);
  }

  

  async presentToast(dog, index) {
    const toast = await this.toastController.create({
      message: 'Removing dog - ' + dog.name + "...",
      duration: 2000
    });
    toast.present();

    this.tab1Service.removeDog(dog, index);
  }
 

}
