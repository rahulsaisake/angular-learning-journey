var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// @Component{
//   //meta  informatio
// }
var Address = /** @class */ (function () {
    function Address(village, state, city) {
        this.village = village;
        this.state = state;
        this.city = city;
    }
    return Address;
}());
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    //Declaration
    function Employee(id, name, salary, address) {
        var _this = _super.call(this, id, name) || this;
        _this.address = address;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.displayEmployeeInformation = function () {
        console.log('Id :' + this.id);
        console.log('Name: ' + this.name);
        console.log('Salary: ' + this.salary);
        console.log('------------------------------');
        console.log('City: ' + this.address.city);
        console.log('State: ' + this.address.state);
        console.log('Village: ' + this.address.village);
        //  console.log(emp2.displayEmployeeInformation);
    };
    return Employee;
}(Person));
//create instance of the class 
var address1 = new Address('valmikinager', 'vgp', 'Ptp');
var address2 = new Address('putttaparthi', 'ptp', 'atp');
var emp = new Employee(1, 'Rahul', 10000, address1);
emp.displayEmployeeInformation();
var emp2 = new Employee(2, 'vamsi', 20000, address1);
