
//creating type alias for repeatable object structure here

type Person={
  name : string;
  age: number;
  isStudent: boolean;
  class?:string;  //optional property all other must be present
  address:{
    city:string;
    state: string;
    country: string
  }
}



const person1:Person={
    name: "Pratik",
    age: 26,
    isStudent: false,
    class:"btech", //class is optional
    address:{
        city:"pune",
        state:"Maharashtra",
        country:"india"
    }
}
const person2:Person={
    name: "Pratik",
    age: 26,
    isStudent: false,
    address:{
        city:"pune",
        state:"Maharashtra",
        country:"india"
    }
}
const person3:Person={
    name: "Pratik",
    age: 26,
    isStudent: false,
    address:{
        city:"pune",
        state:"Maharashtra",
        country:"india"
    }
}
const person4:Person={
    name: "Pratik",
    age: 26,
    isStudent: false,
    address:{
        city:"pune",
        state:"Maharashtra",
        country:"india"
    }
}


//use of type alias


type Product={
    id : number;
    name: string;
    price: number;
    quantity: number;
    additionalInfo?:string;
}

const  product1: Product={
    id:1,
    name:"Laptop",
    price:56909,
    quantity:3,

}






const calculateTotalPrice=(product:Product)=>{

    return `Total price of ${product.name} is ${product.price * product.quantity}`;
}

const result = calculateTotalPrice(product1)
console.log(result);
