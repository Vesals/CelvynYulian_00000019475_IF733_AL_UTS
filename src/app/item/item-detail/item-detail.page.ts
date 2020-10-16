import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {

    loadedItem: any;
    url: string;

  constructor(
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('itemId')) { return; }
      
      const itemId = paramMap.get('itemId');

      if(this.router.url.substring(6,10) == "proc"){
        this.url = this.router.url.substring(6,10);
        this.loadedItem = this.itemService.getProc(parseInt(itemId));
      }
      
      else if(this.router.url.substring(6,9) == "ram"){
        this.url = this.router.url.substring(6,9);
        this.loadedItem = this.itemService.getRam(parseInt(itemId));
      }

      else if(this.router.url.substring(6,10) == "mobo"){
        this.url = this.router.url.substring(6,10);
        this.loadedItem = this.itemService.getMobo(parseInt(itemId));
      }

      else if(this.router.url.substring(6,9) =="gpu"){
        this.url = this.router.url.substring(6,9);
        this.loadedItem = this.itemService.getGpu(parseInt(itemId));
      }
    });
  }

}
