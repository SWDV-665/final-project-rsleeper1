import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "My Dogs"
  myDogs = []
  currentImage: any;


  constructor(public alertController: AlertController, public toastController: ToastController, private camera: Camera) {}


  addDog(){
    this.presentAlertPrompt();
  }

  removeDog(dog, index){
    this.presentToast(dog, index);
  }
    
    async presentAlertPrompt() {
      const alert = await this.alertController.create({
        header: 'New Dog',
        inputs: [
          {
            name: 'name',
            type: 'text',
            placeholder: 'Name'
          },
          {
            name: 'breed',
            type: 'text',
            placeholder: 'Breed'
          },
          {
            name: 'gender',
            type: 'text',
            placeholder: 'Male/Female'
          },
          {
            name: 'size',
            type: 'text',
            placeholder: 'Small/Medium/Large'
          },
          {
            name: 'age',
            type: 'text',
            placeholder: 'Age'
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
              this.myDogs.push(dog);
            }
          }
        ]
      });
  
      await alert.present();
    }

  async presentToast(dog, index) {
    const toast = await this.toastController.create({
      message: 'Removing dog - ' + dog.name + "...",
      duration: 2000
    });
    toast.present();

    this.myDogs.splice(index, 1);
  }


  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
     console.log("Camera issue:" + err);
    });
  }
  

}
