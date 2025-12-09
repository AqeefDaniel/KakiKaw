import { createContext, useState, useEffect } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, setDoc, getDoc, collection, addDoc } from "firebase/firestore";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = 'RM';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Listen for authentication state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            
            // Load cart from Firestore when user logs in
            if (currentUser) {
                await loadCartFromFirestore(currentUser.uid);
            } else {
                setCartItems({});
            }
        });

        return () => unsubscribe();
    }, []);

    // Load cart from Firestore
    const loadCartFromFirestore = async (userId) => {
        try {
            const cartRef = doc(db, "carts", userId);
            const cartSnap = await getDoc(cartRef);
            
            if (cartSnap.exists()) {
                setCartItems(cartSnap.data().items || {});
            }
        } catch (error) {
            console.error("Error loading cart:", error);
        }
    };

    // Save cart to Firestore
    const saveCartToFirestore = async (items) => {
        if (!user) return;
        
        try {
            const cartRef = doc(db, "carts", user.uid);
            await setDoc(cartRef, {
                items: items,
                updatedAt: new Date().toISOString()
            });
        } catch (error) {
            console.error("Error saving cart:", error);
        }
    };

    const addToCart = (itemId) => {
        setCartItems((prevCartItems) => {
            const updatedCart = !prevCartItems[itemId]
                ? { ...prevCartItems, [itemId]: 1 }
                : prevCartItems;
            
            // Save to Firestore
            if (user) {
                saveCartToFirestore(updatedCart);
            }
            
            return updatedCart;
        });
    };

    // Remove a product from the cart
    const removeFromCart = (itemId) => {
        setCartItems((prevCartItems) => {
            const updatedCart = { ...prevCartItems };
            delete updatedCart[itemId];
            
            // Save to Firestore
            if (user) {
                saveCartToFirestore(updatedCart);
            }
            
            return updatedCart;
        });
    };

    // Get the total count of unique items in the cart
    const getCartCount = () => {
        return Object.keys(cartItems).length; // Count unique items
    };

    // Get the total price of items in the cart
    const getCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            const product = products.find((p) => p._id === itemId);
            if (product) {
                totalAmount += product.price;
            }
        }
        return totalAmount;
    };

    // Place order
    const placeOrder = async (orderData) => {
        if (!user) {
            alert('Please login to place an order');
            return;
        }

        try {
            const ordersRef = collection(db, "orders");
            await addDoc(ordersRef, {
                userId: user.uid,
                userEmail: user.email,
                userName: user.displayName || 'Guest',
                items: cartItems,
                orderData: orderData,
                totalAmount: getCartAmount() + delivery_fee,
                status: 'Pending',
                createdAt: new Date().toISOString()
            });

            // Clear cart after order
            setCartItems({});
            if (user) {
                await saveCartToFirestore({});
            }

            alert('Order placed successfully!');
            navigate('/orders');
        } catch (error) {
            console.error("Error placing order:", error);
            alert('Error placing order. Please try again.');
        }
    };

    // Logout function
    const logout = async () => {
        try {
            await signOut(auth);
            setCartItems({});
            navigate('/login');
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        removeFromCart,
        getCartCount,
        getCartAmount,
        placeOrder,
        user,
        loading,
        logout,
        navigate,
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
