function makewaffle(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("waffle is ready")
        }, 2500);
    })
}
function geticream(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let icecream = false;
            if(icecream){
                resolve("got ice cream")
            }else{
                reject("did not get ice cream ")
            }
        }, 2000);
    })
}
function snack(){
    makewaffle().then(function(data){
        console.log(data)
        return geticream()
    })
    .then(function(data){
        console.log(data);
        console.log("set up the table")
    })
    .catch(function(error){
        console.log(`${error}so make chocolate syrup`)
    }
    );
    
}snack()