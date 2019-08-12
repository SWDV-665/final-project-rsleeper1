import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
// import { Firebase } from '@ionic-native/firebase/ngx';
// import { FirebaseMessaging } from '@ionic-native/firebase-messaging/ngx';
// import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  title = "Doggy Dashboard"
  author = "Username"
  dashboardPosts = []

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async createPost() {
    const alert = await this.alertController.create({
      header: "New Post",
      cssClass: "createPost",
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Tell us something!'
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
          handler: (post) => {
            console.log('Confirm Ok', post);
            this.dashboardPosts.push(post);
          }
        }
      ]
    });

    await alert.present();
  }

  async editPostPrompt(post, index) {
    const alert = await this.alertController.create({
      header: "Edit Post",
      cssClass: "createPost",
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Tell us something!',
          value: post.name
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
          handler: (post) => {
            console.log('Confirm Ok', post);
            this.dashboardPosts[index] = post;
          }
        }
      ]
    });

    await alert.present();
  }

  async removePost(post, index) {
    const toast = await this.toastController.create({
      message: 'Removing post - ' + post.name + "...",
      duration: 2000
    });
    toast.present();

    this.dashboardPosts.splice(index, 1);
  }

  async editPost(post, index) {
    const toast = await this.toastController.create({
      message: 'Editing post - ' + post.name + "...",
      duration: 2000
    });
    toast.present();

    this.editPostPrompt(post, index);
  }


  //these go into constructor once you get firebase working (private firebase: Firebase, private firebaseMessaging: FirebaseMessaging, private fcm: FCM)
  // firebaseMessages(){
  //   this.firebase.getToken()
  //     .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
  //     .catch(error => console.error('Error getting token', error));

  //   this.firebase.onNotificationOpen()
  //     .subscribe(data => console.log(`User opened a notification ${data}`));

  //   this.firebase.onTokenRefresh()
  //     .subscribe((token: string) => console.log(`Got a new token ${token}`));
  // }


  // myMessage(){
  //   this.firebaseMessaging.logEvent('page_view', {page: "dashboard"})
  //   .then((res: any) => console.log(res))
  //   .catch((error: any) => console.error(error));
  // }

  // startTalking(){
  //   this.fcm.subscribeToTopic('marketing');

  //   this.fcm.getToken().then(token => {
  //     backend.registerToken(token);
  //   });
  // }

}
