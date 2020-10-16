import { Component, OnInit } from '@angular/core';
import { Common, Mobo, Proc, Ram } from '../item/item.model'
import { ItemService } from '../item/item.service';
import { AlertController, IonItemSliding, ModalController, ToastController } from '@ionic/angular';
import { AddComponent } from '../item/add/add.component';
import { Router } from '@angular/router';
import { EditComponent } from '../item/edit/edit.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  proc: Proc[];
  ram: Ram[];
  mobo: Mobo[];
  gpu: Common[];
  eventS: string = 'proc';
  viewStyle: string = 'grid';
  temp: number;

  constructor(
    private itemService: ItemService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private router: Router,
  ) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.getData();
    this.temp = this.proc.length;
  }

  onClick(){
    if(this.viewStyle === 'list') 
      this.viewStyle = 'grid';
    else
      this.viewStyle = 'list';
    
    this.eventS = 'proc';
  }

  onFilterUpdate(event: CustomEvent){
    this.eventS = event.detail.value;
    // if(this.eventS === "proc"){
    //     console.log('cpu masok');
    //   }
    // else if(this.eventS === "ram"){
    //   console.log('ram masok');
    // }
    // else if(this.eventS === "mobo"){
    //   console.log('mobo masok');
    // }
    // else if(this.eventS === "gpu"){
    //   console.log('gpu masok');
    // } 
  }

  getData(){
    this.proc = this.itemService.getAllProc();
    this.ram = this.itemService.getAllRam();
    this.mobo = this.itemService.getAllMobo();
    this.gpu = this.itemService.getAllGpu();
  }

  deleteItem(id: number){
    if(this.eventS === "proc"){
      this.itemService.deleteProc(id);
      this.proc = this.itemService.getAllProc();
    }
    else if(this.eventS === "ram"){
      this.itemService.deleteRam(id);
      this.ram = this.itemService.getAllRam();
    }
    else if(this.eventS === "mobo"){
      this.itemService.deleteMobo(id);
      this.mobo = this.itemService.getAllMobo();
    }
    else if(this.eventS === "gpu"){
      this.itemService.deleteGpu(id);
      this.gpu = this.itemService.getAllGpu();
    } 
    
    this.presentToast();
    this.router.navigate(['/admin']);
  }
  
  async presentAlert(id: number){
    const alert = await this.alertCtrl.create({
      header: 'Hapus Item',
      message: 'Apakah yakin ingin menghapus? Jika sudah dihapus, tidak bisa dikembalikan lagi.',
      buttons: [
          {
            text: 'Batal',
            role: 'cancel'
          },
          {
            text: 'Hapus',
            handler: () => this.deleteItem(id)
          }
      ]
    });
    await alert.present();
  }

  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: 'Item berhasil dihapus',
      position: 'bottom',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  async presentAction(){
    
    if(this.eventS === "proc" || this.eventS === "ram" || this.eventS === "mobo" || this.eventS === "gpu"){
      const modal = await this.modalCtrl.create({
        component: AddComponent,
      });
  
      modal.onDidDismiss().then(resultData => {
        this.getData();
      });
      return await modal.present();
    }
  }

  async presentEdit(id: number, event: string){
    console.log(event);
      const modal = await this.modalCtrl.create({
        component: EditComponent,
        componentProps: { id: id, event: event },
      });
  
      modal.onDidDismiss().then(resultData => {
        this.getData();
      });
      return await modal.present();
  }
}
