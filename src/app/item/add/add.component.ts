import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  jenis: string = 'proc';

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private itemService: ItemService,
  ) { }

  ngOnInit() {}

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

  jenisItem($event){
    this.jenis = $event.target.value;
  }

  onSave(){
    if(!this.jenis){
      console.log('fail');
    }
    else{
      this.presentLoading().then(() => {
        this.modalCtrl.dismiss({message:'added new item'}, 'confirm');
        this.presentToast();
      });
    }
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    if(this.jenis == "proc"){
      this.itemService.addProc(form);
    }
    else if(this.jenis == "ram"){
      this.itemService.addRam(form);
    }
    else if(this.jenis == "mobo"){
      this.itemService.addMobo(form);
    }
    else if(this.jenis == "gpu"){
      this.itemService.addGpu(form);
    }
  }

  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Saving item...',
      duration: 2000
    });
    await loading.present();

    const{ role, data } = await loading.onDidDismiss();
  }

  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: 'New item added.',
      position: 'bottom',
      color: 'success',
      duration: 2000
    });

    toast.present();
  }
}
