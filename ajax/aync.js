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
async function snack(){
    try{
        await makewaffle();
        await geticream();
        console.log("set up the table ")
    }catch(error){
        console.log(`${error} so make chocolate syrup  `)

    }
}
snack()