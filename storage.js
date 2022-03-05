const addItem = () => {
    const nameField = document.getElementById('product-name');
    const name = nameField.value;
    if (!name) {//this line exicute the place holder empty or not if empty then return back don't show display.
        return;
    }
    // display in the UL

    displayProduct(name);//this function displayed producti lish

    // add to local-storage 
    addProductToCart(name);//this function stored data  at locatstorage .
    nameField.value = '';

}
const displayProduct = name => {//this fucntion to display product list .
    const ul = document.getElementById('products');
    const li = document.createElement('li');//creating a list .
    li.innerText = name + Date(); //set the value of list 
    ul.appendChild(li);//complet to display product you put placeholder .
}

const getCart = () => {//this function is of check is cart available or not , if not then make a cart .
    const cart = localStorage.getItem('cart');
    let cartobj;
    if (cart) {
        cartobj = JSON.parse(cart);//if cart available then parse it
    }
    else {
        cartobj = {};//if not then make it blank ,
    }
    return cartobj;// and return cartobj.
}
const addProductToCart = name => {//to store your data at locatStorage .
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1 + Date();
    }
    else {
        cart[name] = 1;
    }
    const cartStringigified = JSON.stringify(cart);//do stringify thats cart. 
    localStorage.setItem('cart', cartStringigified);//set the item at locatstorage. 
}
const displayLocatStorageCart = () => {
    const cart = getCart();
    for (const name in cart) {
        displayProduct(name + ' , Quantity = ' + cart[name] + ' .');
    }
}
const clearList = () => {
    document.getElementById('products').textContent = 'Your data has been cleared';
    localStorage.removeItem('cart');
}
displayLocatStorageCart();//this function stored data at local storage form web page .
