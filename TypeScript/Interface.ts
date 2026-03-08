enum MyEnum{
  PER_UNITS=121,PER_WATER=123
}
interface IBill{
  calculateEBillAmount(nou:number):number;
}

class ElectricBillComponent implements IBill{
  eunit:number=MyEnum.PER_UNITS;
  calculateEBillAmount(nou: number): number {
    return this.eunit*nou;
  }
}
  class WaterBill implements IBill {
   eunit:number=15;
   calculateEBillAmount(nou: number): number {
     return this.eunit*nou;
   }
      
    }

  var eBill = new ElectricBillComponent();
  console.log('Electric Bill : '+ eBill.calculateEBillAmount(10));

  var wBill=new WaterBill();
console.log('Water Bill : '+ wBill.calculateEBillAmount(15));
  
  