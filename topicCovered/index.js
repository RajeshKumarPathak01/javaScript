
//Error handling in java Script is pending, refer this link for this topic
//https://www.youtube.com/watch?v=u2xLcx3sC_k



const str= new String('Rajesh Kumar     ');
const str1= 1234567890;
// console.log(str.substring(0,4));
// console.log(str.indexOf('h'));
// console.log(str.trim());
// console.log(str.charAt(3));
// console.log(str.endsWith('r'));
// console.log(str.search('a'));
// console.log(str.replaceAll('a','th'));
// console.log(str.includes('pt'));
// console.log(str.split(' ').sort((a,b)=>
// b-a)
// );

// console.log(Number(str1).toFixed(2));
// console.log(Number(str1).toPrecision(2));
// console.log(Number(str1).toLocaleString('en-IN'));
// console.log(Math.floor(Math.random()*str1+1));


//Date function-----------------------------------------------------------------------------------------------

// const myDate=new Date('2024-02-12');
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toString());
// console.log(myDate.toJSON());

//Array-------------------------------------------------------------------------------------------------------

const arr=[2,6,3,7];

//Add the elements to the first position of the array
// console.log(arr.unshift(32));

//Add the elements to the last position of the array
// console.log(arr.push(12));
// console.log(arr);


//Remove the elements to the first position of the array
//  console.log(arr.shift());

//Remove the elements to the last position of the array
// console.log(arr.pop());
// console.log(arr);


const arr1=[23,45,12,41.34,56,34,89]

//----Slice method is used to return a particular section of copy (1st parameter is starting index and 2nd index is the last index)
//  console.log(arr1.slice(1,4));
//  console.log(arr1.toString().substring(1,4));
 
//  console.log(arr1);
 

//----------Remove the elements from the array( First parameter is starting index and 2nd parameter is number of elements to remove)
// console.log(arr1.splice(0,2));
// console.log(arr1);


// ----------------------------------------------------------------

// const marvel_heros=["Thor","Iron-Man","AquaMan"];

// const Indian_heros=["bat-man","ShaktiMan","FlyingJat"];


// // // console.log(marvel_heros.concat(Indian_heros));
// console.log([...Indian_heros,...marvel_heros]);


// ------------------------------------------------------------------

// const arrt=[3,7,[4,8,0],8,[2,4,5],89,[45,7,23,12,45,9]]
// // .flat method wil give the all elements included the sub array
// console.log(arrt.flat(2));


// console.log(Array.from('arrt'));

// console.log(Array.of(arr,arrt));

//---------------------------------------------------------------------OBJECTS-----------------------------------

const mySym= Symbol('mykey')

const obj={
    perName:'Rajesh',
    age:27,
    language:'Bhojpuri',
    "pincode":831012,
    city:'Jamshedpur',
    [mySym]:'mykey1'
}


// Object.freeze  is used to make the object immutable

// Object.freeze(obj);
// console.log(obj['language']);
// obj.city='bang'
// console.log(obj);
// console.log(obj['pincode']);


//Note: If inside object key is in the form of string like "city" then  we need to compulsory use square bracket []. 
//-------------------------------------------------------------------


 obj.fun= function raj(){
    // console.log(`Hello ${this.perName}`);
    
}

obj.fun();



// So the instance of the class is the just like the blue print or you can say it is structure.
//Singleton class are nothing but the design pattern which ensure that only one instance of the class exist throughout the application



const onam={
    1:'a',
    2:'b',
    3:'c'
}

const onam2={
    4:'r',
    5:'g',
    7:'t'
}

const onam3=Object.assign({},onam,onam2) // Object.assign is used to concat the object values from the different sources means more than one object.
// console.log(onam3);

// console.log({...onam,...onam2});

// console.log(Object.keys(onam2));   // It will give the all keys of the object
// console.log(Object.values(onam2)); // It will give the all values of the object

// console.log(onam2.hasOwnProperty('7'));  // It will check whether the particular key is presented or not and return the boolean result.

const educator={
eduName:'Rajesh',
course:'JS',
fee:900
}

const {eduName}=educator        //Function destructure   from an object we can extract the individual variable name

console.log(eduName);








//--------------------------------------------------------------------------------

const fun=(name='raj')=>{
console.log(`Hello ${name}`);

}
fun('suraj');



function rest(val1,val2,...num){     //Rest operator is defined by (...) and it will number of values as parameter and it will return a new array  
return num
}

console.log(rest(34,56,12,3,55));
