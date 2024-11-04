makewaffle(geticream);
function makewaffle(callback){
    setTimeout(() => {
        console.log("set the table")   
        console.log("Waffle is ready")
        callback();
    },2500 );
    
}
function geticream(){
    setTimeout(() => {
       let icecream = false;
       if(icecream){
        console.log("got the icecream");

       }else{
        console.log("did not get icecream");
       }
    }, 1500);
}
