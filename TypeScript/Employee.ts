/*@Component{
  //meta  informatio
}*/
class Address{
  village:string;
  state:string;
  city:string;

  constructor( village:string,state:string,city:string) {
    this.village = village;
    this.state = state;
    this.city = city;
  }
}
class Person{
  id:number;
  name:string;

  constructor(id:number,name:string){
    this.id=id;
    this.name=name;
  }
}


class Employee extends Person {
  //properties
  salary:number;
  address:Address;
//Declaration
  constructor(id: number, name: string, salary: number,address:Address) {
        super(id,name);
        this.address=address;
        this.salary=salary;
  }

  displayEmployeeInformation():void{
    console.log('Id :'+this.id);
    console.log('Name: ' + this.name);
    console.log('Salary: ' + this.salary);
    console.log('------------------------------')
    console.log('City: '+this.address.city);
    console.log('State: '+this.address.state);
    console.log('Village: '+this.address.village);
  //  console.log(emp2.displayEmployeeInformation);
  }

}


//create instance of the class 
let address1=new Address('valmikinager','vgp','Ptp');
let address2=new Address('putttaparthi','ptp','atp')
  let emp =new Employee(1,'Rahul',10000,address1);
  emp.displayEmployeeInformation();
  let emp2=new Employee(2,'vamsi',20000,address1);
