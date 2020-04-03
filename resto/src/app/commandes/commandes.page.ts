import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CammandeService } from '../services/cammande.service';
import { Commande } from '../Models/commande';
import { AlertController, Platform } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.page.html',
  styleUrls: ['./commandes.page.scss'],
})
export class CommandesPage implements OnInit {

  commandes: Commande[];

  constructor(private route: Router, private api: CammandeService,
    private ac: AlertController, private callNumber: CallNumber, public platform: Platform) {
    this.getCommandes();

  }

  modifierCommande(id: any): void {
    this.route.navigate(['tabs/commandes/modifier', id]);
  }

  getCommandes(): void {
    this.api.getCommandes().subscribe(Response => { this.commandes = Response; });
  }

  delete(commande: Commande): void {
    this.api.deleteCommande(commande.id).subscribe(commande => { this.getCommandes(); });
  }

  async AlertSup(commande: Commande) {
    const alert = await this.ac.create({
      header: '       Supprimer',
      message: '<p style="text-align:center"><strong>Confirmez la Suppression ?</strong><p>',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }, {
          text: 'Confirmer',
          handler: () => {
            this.delete(commande);
          }
        }
      ]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  Call(tel: string) {
    console.log(this.platform);
    console.log(tel);
    console.log(this.platform.is('android'));
    if (!this.platform.is('android')) {
      this.callNumber.callNumber(tel, true).then(res => console.log('Launched dialer!', res)).catch(err => console.log('Error launching dialer', err));

    } else {
      window.open(`tel:${tel}`, '_system');
    }

  }

  async AlertCall(tel: string) {
    const alert = await this.ac.create({
      header: 'Appel',
      message: '<p style="text-align:center"><strong>Confirmez l Appel ?</strong><p>',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }, {
          text: 'Confirmer',
          handler: () => {
            this.Call(tel);
          }
        }
      ]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  ngOnInit() {
  }
  doRefresh(event) {
    this.api.getCommandes().subscribe(Response => {
      this.commandes = Response;
    });

    setTimeout(() => {
      event.target.complete();
    }, 100);
  }
}
