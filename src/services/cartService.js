import Cookie from 'js-cookie';

export const addToCart = (data) => {
    const { product_id, quantity, price, name } = data;
    const carts = Cookie.get('cart') && JSON.parse(Cookie.get('cart').slice(2)) || [];
    let check = false;
    for (let i = 0; i < carts.length; i++) {
        console.log('avav');
        if (carts[i].product_id === product_id) {
            console.log('carts[i].product_id', carts[i].product_id);
            console.log('product_id', product_id);
            carts[i] = { product_id, quantity: carts[i].quantity + quantity, price: carts[i].price + price, name: name };
            check = true;
            break;
        }
    }
    if (!check) {
        carts.push({ product_id, quantity, price, name });
    }
    console.log(carts);
    Cookie.set('cart', `j:${JSON.stringify(carts)}`, { expires: 365 });
}

export const changeQuantity = (id, price, type) => {
    const carts = JSON.parse(Cookie.get('cart').slice(2));
    if (type === 'up') {
        for (let i = 0; i < carts.length; i++) {
            if (carts[i].product_id == id) {
                carts[i].quantity = carts[i].quantity + 1;
                carts[i].price = carts[i].price + price;
            }
        }
    }
    if (type === 'down') {
        for (let i = 0; i < carts.length; i++) {
            if (carts[i].product_id == id) {
                carts[i].quantity = carts[i].quantity - 1;
                carts[i].price = carts[i].price - price;
            }
        }
    }
    Cookie.set('cart', `j:${JSON.stringify(carts)}`);
}

export const removeAllCart = async () => {
    Cookie.remove('cart');
}

export const removeToCart = async (id) => {
    const carts = Cookie.get('cart') && JSON.parse(Cookie.get('cart').slice(2)) || [];
    for (let i = 0; i < carts.length; i++) {
        if (carts[i].product_id == id) {
            carts.splice(i, 1);
        }
    }
    Cookie.set('cart', `j:${JSON.stringify(carts)}`);
}

export const getTotalInCart = () => {
    let carts = [];
    if (Cookie.get('cart') && Cookie.get('cart').startsWith('j')) carts = JSON.parse(Cookie.get('cart').slice(2));
    if (carts.length === 0) return 0;
    const total = carts.reduce((t, p) => {
        return t + p.quantity
    }, 0)
    return total;
}