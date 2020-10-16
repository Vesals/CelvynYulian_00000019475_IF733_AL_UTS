export interface Common{
    id: number;
    
    model: string;
    merk: string;
    harga: number;
    imgUrl: string;
    stock: number;
}
export interface Proc extends Common{

    baseClock: number;
    boostClock: number;
    coreTotal: number;
    threadTotal: number;
  }

export interface Ram extends Common{

    speed: number;
    size: string;
  }

export interface Mobo extends Common{
    
    chipset: string;
    procType: string;
  }

  
// CPU        : foto, merek, model, harga, stok, base clock, boost clock, jumlah core, thread
// RAM        : foto, merek, model, harga, stok, speed, ukuran.
// Motherboard: foto, merek, model, harga, stok, chipset, ditujukan untuk prosesor merek apa
// GPU        : foto, merek, model, harga, stok.