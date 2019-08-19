import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  title = "Doggy Dashboard"
  author = "DogLover123"
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

}
