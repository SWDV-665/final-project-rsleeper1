import { Injectable } from '@angular/core';
import { Tab1Service } from './tab1.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class Tab1InputService {

  constructor(public tab1Service: Tab1Service, public alertController: AlertController, private storage: Storage) { }


  async dogPrompt(dog?, index?) {
    const alert = await this.alertController.create({
      header: dog ? 'Edit Dog' : 'Add Dog',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name',
          value: dog ? dog.name : null
        },
        {
          name: 'breed',
          type: 'text',
          placeholder: 'Breed',
          value: dog ? dog.breed : null
        },
        {
          name: 'gender',
          type: 'text',
          placeholder: 'Male/Female',
          value: dog ? dog.gender : null
        },
        {
          name: 'size',
          type: 'text',
          placeholder: 'Small/Medium/Large',
          value: dog ? dog.size : null
        },
        {
          name: 'age',
          type: 'number',
          placeholder: 'Age',
          value: dog ? dog.age : null
        },
        {
          name: 'about',
          type: 'text',
          placeholder: 'About your dog...',
          value: dog ? dog.about : null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (dog) => {
            console.log('Confirm Ok', dog);
            if (index !== undefined){
              this.tab1Service.editDog(index, dog);
            }
            else {
              this.tab1Service.addDog(dog);
              
            }
          }
        }
      ]
    });

    await alert.present();
  }

}
