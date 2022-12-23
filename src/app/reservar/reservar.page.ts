import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
})
export class ReservarPage implements OnInit {

  constructor(private alertController: AlertController) {}



  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Informacion no disponible',
      message: 'Aplicacion en contruccion!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  

}
