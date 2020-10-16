import { Injectable } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Proc, Ram, Mobo, Common } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  proc: Proc[] = [
    {
      id: 1,
      model: 'AMD Ryzen Threadripper 3990X',
      merk: 'AMD',
      harga: 65999000,
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/711VabzLQ2L._AC_SL1500_.jpg',
      stock: 5,
      
      baseClock: 2.9,
      boostClock: 4.3,
      coreTotal: 64,
      threadTotal: 128,
    },

    {
      id: 2,
      model: 'Intel Core i7-10700K - Comet Lake Series',
      merk: 'Intel',
      harga: 6000000,
      imgUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/6/18/9651507/9651507_043c3c6f-9bb6-42e0-b23a-7c352012a8be_640_640',
      stock: 1,
      
      baseClock: 3.8,
      boostClock: 5.1,
      coreTotal: 8,
      threadTotal: 16,
    },
    {
      id: 3,
      model: 'AMD Ryzen Threadripper 3990X',
      merk: 'AMD',
      harga: 65999000,
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/711VabzLQ2L._AC_SL1500_.jpg',
      stock: 0,
      
      baseClock: 2.9,
      boostClock: 4.3,
      coreTotal: 64,
      threadTotal: 128,
    },

    {
      id: 4,
      model: 'Intel Core i7-10700K - Comet Lake Series',
      merk: 'Intel',
      harga: 6000000,
      imgUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/6/18/9651507/9651507_043c3c6f-9bb6-42e0-b23a-7c352012a8be_640_640',
      stock: 1,
      
      baseClock: 3.8,
      boostClock: 5.1,
      coreTotal: 8,
      threadTotal: 16,
    },
    {
      id: 5,
      model: 'AMD Ryzen Threadripper 3990X',
      merk: 'AMD',
      harga: 65999000,
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/711VabzLQ2L._AC_SL1500_.jpg',
      stock: 5,
      
      baseClock: 2.9,
      boostClock: 4.3,
      coreTotal: 64,
      threadTotal: 128,
    },

    {
      id: 6,
      model: 'Intel Core i7-10700K - Comet Lake Series',
      merk: 'Intel',
      harga: 6000000,
      imgUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/6/18/9651507/9651507_043c3c6f-9bb6-42e0-b23a-7c352012a8be_640_640',
      stock: 1,
      
      baseClock: 3.8,
      boostClock: 5.1,
      coreTotal: 8,
      threadTotal: 16,
    },
    // {
    //   id: 7,
    //   model: 'AMD Ryzen Threadripper 3990X',
    //   merk: 'AMD',
    //   harga: 65999000,
    //   imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/711VabzLQ2L._AC_SL1500_.jpg',
    //   stock: 5,
      
    //   baseClock: 2.9,
    //   boostClock: 4.3,
    //   coreTotal: 64,
    //   threadTotal: 128,
    // },

    // {
    //   id: 8,
    //   model: 'Intel Core i7-10700K - Comet Lake Series',
    //   merk: 'Intel',
    //   harga: 6000000,
    //   imgUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/6/18/9651507/9651507_043c3c6f-9bb6-42e0-b23a-7c352012a8be_640_640',
    //   stock: 1,
      
    //   baseClock: 3.8,
    //   boostClock: 5.1,
    //   coreTotal: 8,
    //   threadTotal: 16,
    // },
    // {
    //   id: 9,
    //   model: 'AMD Ryzen Threadripper 3990X',
    //   merk: 'AMD',
    //   harga: 65999000,
    //   imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/711VabzLQ2L._AC_SL1500_.jpg',
    //   stock: 5,
      
    //   baseClock: 2.9,
    //   boostClock: 4.3,
    //   coreTotal: 64,
    //   threadTotal: 128,
    // },

    // {
    //   id: 10,
    //   model: 'Intel Core i7-10700K - Comet Lake Series',
    //   merk: 'Intel',
    //   harga: 6000000,
    //   imgUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/6/18/9651507/9651507_043c3c6f-9bb6-42e0-b23a-7c352012a8be_640_640',
    //   stock: 1,
      
    //   baseClock: 3.8,
    //   boostClock: 5.1,
    //   coreTotal: 8,
    //   threadTotal: 16,
    // },
  ]

  ram: Ram[] = [
    {
      id: 1,
      model: 'Gskill DDR4 TridentZ Neo RGB F4-3200C14D-16GTZN',
      merk: 'Gskill',
      harga: 2489000,
      imgUrl: 'https://www.gskill.com/_upload/images/156283848210.png',
      stock: 25,

      speed: 3200,
      size: '16GB (2x8GB)'
    },

    {
      id: 2,
      model: 'Corsair DOMINATOR® PLATINUM RGB 64GB (4 x 16GB) DDR4 DRAM 3600MHz C18 Memory Kit',
      merk: 'Corsair',
      harga: 11000000,
      imgUrl: 'https://www.corsair.com/medias/sys_master/images/images/h7b/hcf/9181152739358/-CMT64GX4M4K3600C18-Gallery-DOMINATOR-PLAT-RGB-01.png',
      stock: 5,

      speed: 3600,
      size: '64GB (4x16GB)'
    },
  ]

  mobo: Mobo[] = [
    {
      id: 1,
      model: 'ASRock TRX40 Taichi (sTRX4, AMD TRX40, DDR4, USB 3.2, SATA3)',
      merk: 'ASRock',
      harga: 8799000,
      imgUrl: 'https://ecs7.tokopedia.net/img/product-1/2019/12/18/batch-upload/batch-upload_f45ab31f-74b8-4410-a9f8-387c0f967727',
      stock: 10,

      chipset: 'sTRX40',
      procType: 'AMD'
    },

    {
      id: 2,
      model: 'Asus ROG Maximus XI APEX (LGA1151V2, Z390, DDR4, USB3.1, SATA3)',
      merk: 'Asus',
      harga: 6700000,
      imgUrl: 'https://ecs7.tokopedia.net/img/product-1/2020/1/18/batch-upload/batch-upload_e3cf8c82-f016-426c-b48f-5bcf116c21a7',
      stock: 10,

      chipset: 'LGA 1151v2',
      procType: 'Intel'
    },
  ]

  gpu: Common [] = [
    {
      id: 1,
      model: 'Zotac GeForce RTX 2060 6GB DDR6 AMP Edition',
      merk: 'Zotac',
      harga: 5000000,
      imgUrl: 'https://ecs7.tokopedia.net/img/product-1/2019/1/26/9561560/9561560_e425c815-e2fa-4b35-b6b4-34a274bd18ba_1024_767.jpg',
      stock: 15,
    },

    {
      id: 2,
      model: 'XFX Radeon RX 5700 XT 8GB GDDR6 DOUBLE DISSIPATION ',
      merk: 'XFX',
      harga: 6500000,
      imgUrl: 'https://ecs7.tokopedia.net/img/product-1/2020/7/1/9651507/9651507_b17e8d57-e9c8-42dd-9b07-c17359f2b4ff_1500_1500',
      stock: 15,
    },
  ]

  constructor() { }

  getHomeItem(type: string):Proc[] | Ram[] | Mobo[] | Common[] {
    let filter = (item) => item.stock > 0;
    switch(type){
      case 'proc':
        return [...this.proc.filter(filter)];
      case 'ram':
        return [...this.ram.filter(filter)];
      case 'mobo':
        return [...this.mobo.filter(filter)];
      case 'gpu':
        return [...this.gpu.filter(filter)];
    }
  }

  getAllProc(){
    return [...this.proc];
  }
  getProc(id: number){
    return {...this.proc.find(proc => {
      return proc.id === id;
    })};
  }
  deleteProc(id: number){
    this.proc = this.proc.filter(proc => {
      return proc.id !== id
    });
    console
  }

  addProc(form: NgForm) {
    this.proc.push({
      id: (this.getProc(this.proc.length).id) + 1,
      imgUrl: form.value.imgUrl,
      model: form.value.model,
      merk: form.value.merk,      
      harga: form.value.harga,      
      stock: form.value.stock,

      baseClock: form.value.baseClock,
      boostClock: form.value.boostClock,
      coreTotal: form.value.coreTotal,
      threadTotal: form.value.threadTotal
    });
    console.log(this.proc);
  }

  editProc(form: FormGroup, id: number) {
    let tempArr = this.proc.map((proc) => {
      if (proc.id === id) {
        return {
          id: id,
          imgUrl: form.value.imgUrl,
          model: form.value.model,
          merk: form.value.merk,      
          harga: form.value.harga,      
          stock: form.value.stock,

          baseClock: form.value.baseClock,
          boostClock: form.value.boostClock,
          coreTotal: form.value.coreTotal,
          threadTotal: form.value.threadTotal
        };
      }
      return proc;
    });
    this.proc = [...tempArr];
  }

  getAllRam(){
    return [...this.ram];
  }
  getRam(id: number){
    return {...this.ram.find(ram => {
      return ram.id === id;
    })};
  }
  deleteRam(id: number){
    this.ram = this.ram.filter(ram => {
      return ram.id !== id
    });
  }
  addRam(form: NgForm) {
    this.ram.push({
      id: this.ram.length + 1,
      imgUrl: form.value.imgUrl,
      model: form.value.model,
      merk: form.value.merk,      
      harga: form.value.harga,      
      stock: form.value.stock,

      speed: form.value.speed,
      size: form.value.size,
    });
    console.log(this.ram);
  }
  editRam(form: FormGroup, id: number) {
    let tempArr = this.ram.map((ram) => {
      if (ram.id === id) {
        return {
          id: id,
          imgUrl: form.value.imgUrl,
          model: form.value.model,
          merk: form.value.merk,      
          harga: form.value.harga,      
          stock: form.value.stock,

          speed: form.value.speed,
          size: form.value.size,
        };
      }
      console.log(ram);
      return ram;
    });
    this.ram = [...tempArr];
  }

  getAllMobo(){
    return [...this.mobo];
  }
  getMobo(id: number){
    return {...this.mobo.find(mobo => {
      return mobo.id === id;
    })};
  }
  deleteMobo(id: number){
    this.mobo = this.mobo.filter(mobo => {
      return mobo.id !== id
    });
  }
  addMobo(form: NgForm) {
    this.mobo.push({
      id: this.mobo.length + 1,
      imgUrl: form.value.imgUrl,
      model: form.value.model,
      merk: form.value.merk,      
      harga: form.value.harga,      
      stock: form.value.stock,

      chipset: form.value.chipset,
      procType: form.value.procType,
    });
    console.log(this.mobo);
  }
  editMobo(form: FormGroup, id: number) {
    let tempArr = this.mobo.map((mobo) => {
      if (mobo.id === id) {
        return {
          id: id,
          imgUrl: form.value.imgUrl,
          model: form.value.model,
          merk: form.value.merk,      
          harga: form.value.harga,      
          stock: form.value.stock,

          chipset: form.value.chipset,
          procType: form.value.procType,
        };
      }
      return mobo;
    });
    this.mobo = [...tempArr];
  }

  getAllGpu(){
    return [...this.gpu];
  }
  getGpu(id: number){
    return {...this.gpu.find(gpu => {
      return gpu.id === id;
    })};
  }
  deleteGpu(id: number){
    this.gpu = this.gpu.filter(gpu => {
      return gpu.id !== id
    });
  }
  addGpu(form: NgForm) {
    this.gpu.push({
      id: this.gpu.length + 1,
      imgUrl: form.value.imgUrl,
      model: form.value.model,
      merk: form.value.merk,      
      harga: form.value.harga,      
      stock: form.value.stock,
    });
    console.log(this.gpu);
  }
  editGpu(form: FormGroup, id: number) {
    let tempArr = this.gpu.map((gpu) => {
      if (gpu.id === id) {
        return {
          id: id,
          imgUrl: form.value.imgUrl,
          model: form.value.model,
          merk: form.value.merk,      
          harga: form.value.harga,      
          stock: form.value.stock,
        };
      }
      return gpu;
    });
    this.gpu = [...tempArr];
  }

}
