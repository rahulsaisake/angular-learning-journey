var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["PER_UNITS"] = 121] = "PER_UNITS";
})(MyEnum || (MyEnum = {}));
var ElectricBillComponent = /** @class */ (function () {
    function ElectricBillComponent() {
        this.eunit = MyEnum.PER_UNITS;
    }
    ElectricBillComponent.prototype.calculateEBillAmount = function (nou) {
        return this.eunit * nou;
    };
    return ElectricBillComponent;
}());
var WaterBill = /** @class */ (function () {
    function WaterBill() {
        this.eunit = 15;
    }
    WaterBill.prototype.calculateEBillAmount = function (nou) {
        return this.eunit * nou;
    };
    return WaterBill;
}());
var eBill = new ElectricBillComponent();
console.log('Electric Bill : ' + eBill.calculateEBillAmount(10));
var wBill = new WaterBill();
console.log('Water Bill : ' + wBill.calculateEBillAmount(15));
