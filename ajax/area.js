// calculatearea(2,4,calculateperimeter);
// function calculatearea(l,b,callback){
//     var area = l*b;
//     console.log(`the area is ${area}`);
//     callback(l,b);

// }
// function calculateperimeter(a,b){
//     var perimeter = 2*(a+b);
//     console.log(`the perimeter is ${perimeter}`);

// }
// squre(2,cube);
// function squre(a,callback){
//     var squre=a*a;
//     console.log(`the squre of number  ${a} is ${squre}`);
//     callback(squre,a);
// }
// function cube(a,b){
//     var cube =a*b;
//     console.log(`the cube is ${cube}`);
// }


calculatearea(4,circumferences);
function calculatearea(a,callback){
    var calculatearea = Math.PI*a*a;
    console.log(`the area of ${a} is ${calculatearea}`)
    callback(a)
}
function circumferences(a){
    var circumferences = 2*Math.PI*a;
    console.log(`the circumferences of circle ${circumferences}`);
}
