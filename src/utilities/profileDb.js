// use local storage to manage cart data
const addToDb = id =>{
    let breakingTime = {};

    //get the shopping cart from local storage
    const storedProfile = localStorage.getItem('time-cart');
    if(storedProfile){
        breakingTime = JSON.parse(storedProfile);
    }

    // add quantity
    const quantity = breakingTime[id];
    if(quantity){
        const newQuantity = quantity + 1;
        breakingTime[id] = newQuantity;
    }
    else{
        breakingTime[id] = 1;
    }
    localStorage.setItem('time-cart', JSON.stringify(breakingTime));
}

const getStoredProfile = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedProfile = localStorage.getItem('time-cart');
    if(storedProfile){
        shoppingCart = JSON.parse(storedProfile);
    }
    return shoppingCart
}






export {
    addToDb,
    getStoredProfile, 
  
}