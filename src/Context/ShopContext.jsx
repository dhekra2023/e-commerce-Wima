import { useState, createContext } from "react";
import all_products from "../assets/all_products";
import PropTypes from 'prop-types';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_products.length; index++) {
        cart[all_products[index].id] = 0;
    }
    return cart;
}

const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (ItemId) => {
        setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
    }

    const removeFromCart = (ItemId) => {
        setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                const itemInfo = all_products.find((product) => product.id === Number(itemId));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[itemId];
                }
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    const contextValue = { getTotalCartItems, getTotalCartAmount, all_products, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};

ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShopContextProvider;