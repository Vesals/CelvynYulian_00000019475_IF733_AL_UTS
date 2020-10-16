import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Proc } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {

  @Input() id: number
  @Input() event: string;
  
  form: FormGroup;
  loadedItem: any;

  constructor(
    private itemService: ItemService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
    if(this.event === "proc"){
      
      this.loadedItem = this.itemService.getProc(this.id);
      this.form = new FormGroup({
        model: new FormControl(this.loadedItem.model, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        merk: new FormControl(this.loadedItem.merk, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        imgUrl: new FormControl(this.loadedItem.imgUrl, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        harga: new FormControl(this.loadedItem.harga, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        stock: new FormControl(this.loadedItem.stock, {
          updateOn: "blur",
          validators: [Validators.required],
        }),

        baseClock: new FormControl(this.loadedItem.baseClock, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        boostClock: new FormControl(this.loadedItem.boostClock, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        coreTotal: new FormControl(this.loadedItem.coreTotal, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        threadTotal: new FormControl(this.loadedItem.threadTotal, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
      });
    }

    else if(this.event === "ram"){
      this.loadedItem = this.itemService.getRam(this.id);
      this.form = new FormGroup({
        model: new FormControl(this.loadedItem.model, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        merk: new FormControl(this.loadedItem.merk, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        imgUrl: new FormControl(this.loadedItem.imgUrl, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        harga: new FormControl(this.loadedItem.harga, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        stock: new FormControl(this.loadedItem.stock, {
          updateOn: "blur",
          validators: [Validators.required],
        }),

        speed: new FormControl(this.loadedItem.speed, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        size: new FormControl(this.loadedItem.size, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
      });
      
    }
    else if(this.event === "mobo"){
      this.loadedItem = this.itemService.getMobo(this.id);
      this.form = new FormGroup({
        model: new FormControl(this.loadedItem.model, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        merk: new FormControl(this.loadedItem.merk, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        imgUrl: new FormControl(this.loadedItem.imgUrl, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        harga: new FormControl(this.loadedItem.harga, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        stock: new FormControl(this.loadedItem.stock, {
          updateOn: "blur",
          validators: [Validators.required],
        }),

        procType: new FormControl(this.loadedItem.procType, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        chipset: new FormControl(this.loadedItem.chipset, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
      });
    }
    else if(this.event === "gpu"){
      this.loadedItem = this.itemService.getGpu(this.id);
      this.form = new FormGroup({
        model: new FormControl(this.loadedItem.model, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        merk: new FormControl(this.loadedItem.merk, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        imgUrl: new FormControl(this.loadedItem.imgUrl, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        harga: new FormControl(this.loadedItem.harga, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        stock: new FormControl(this.loadedItem.stock, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
      });
    } 
    
  }

  onSubmit(form: FormGroup) {
    if(this.event === "proc"){
      this.itemService.editProc(this.form, this.id);
    }
    else if(this.event === "ram"){
      this.itemService.editRam(this.form, this.id);
    }
    else if(this.event === "mobo"){
      this.itemService.editMobo(this.form, this.id);
    }
    else if(this.event === "gpu"){
      this.itemService.editGpu(this.form, this.id);
    } 
  }

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onSave() {
    this.presentLoading().then(() => {
      this.modalCtrl.dismiss(
        { message: "edited item", id: this.id },
        "confirm"
      );
      this.presentToast();
    });
  }
  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: "Editing item...",
      duration: 1000,
    });
    await loading.present();

    await loading.onDidDismiss();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: "Item edited.",
      position: "bottom",
      color: "success",
      duration: 2000,
    });

    toast.present();
  }
}
