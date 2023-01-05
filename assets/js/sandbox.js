"use strict";

function createAdder(num1 = 100){
    return function(num2){
        return num1+num2;
    }

    console.log(createAdder (23))
    
    // return {
    //   increment(){
        
    //     return ++count;
    //   },
    //   decrement(){
    //     return --count;
    //   },
    // }
  }
  
  const counter1 = createCounter();
  // debugger
  console.log(counter1.increment())
  console.log(counter1.increment())
  console.log(counter1.decrement())
  console.log(counter1.increment())
  
  const counter2 = createCounter(10);
  console.log(counter2.decrement())
  console.log(counter2.decrement())
  console.log(counter2.decrement())
  console.log(counter2.decrement())