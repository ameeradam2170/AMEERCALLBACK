// function add(a,b){
//     var sum =a+b;
//     return sum
// }
// function display(val){
//     console.log(val)
// }
// var result = add(2,3);
// display(result)

// function addc(a,b,callback){
//     var sum = a+b;
//     callback(sum)
// }
// function displayc(val){
//     console.log(`The sum is ${val}`)
    

// }
// addc(1,2,displayc)


function sum(a,b,callback){
        var add= a+b;
    
         callback(add)
 }
 function displayc(val){
    var result =val*val;
     console.log(`The sum is ${val} and square is ${val}`)
   
     
        
    
 }
 addc(1,2,displayc)

 