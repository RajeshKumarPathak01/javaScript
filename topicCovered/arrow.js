const raj=[56,34,2,56,23];

// let arr=raj.forEach((itm)=>(console.log(itm)))


//++++++++++++++++++++ Immediately invoked function+++++++++++++++++++


//If we name the function then we called to named IIFI
(function calc(){      //this is used to execute the function immediately and to reduce the global scope pollution means whatever the variables and methods declared globally 
    // console.log('This is the example of immediately invoked function');
    
})();        // Also we need to end the function  by explicitly give the semi colon. for calling the function only we need to give double parenthesis.


((num1,num2)=>{
// console.log( num1+num2);
})(23,45)





//++++++++++++++++++++++++++++++++++  Life Cycle  ++++++++++++++++++++++++
//Java Script is single threaded

// 1.Global context or Global Environment ( Whenever we execute any code then it's first go to the global environment)

