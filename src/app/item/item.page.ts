import { Component, OnInit } from '@angular/core';
import { Common, Mobo, Proc, Ram } from './item.model'
import { ItemService } from './item.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  proc: any[] = [];
  ram: any[] = [];
  mobo: any[] = [];
  gpu: Common[];
  eventS: string = 'proc';
  viewStyle: string = 'grid';
  constructor(private itemService: ItemService) { }

  ngOnInit() {}

  ionViewWillEnter(){

    this.proc = this.itemService.getHomeItem('proc');
    this.ram = this.itemService.getHomeItem('ram');
    this.mobo = this.itemService.getHomeItem('mobo');
    this.gpu = this.itemService.getHomeItem('gpu');
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
}
