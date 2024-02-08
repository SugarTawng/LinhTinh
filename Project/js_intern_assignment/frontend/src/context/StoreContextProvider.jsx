import { createContext, useEffect, useState } from "react";

const StoreContext = createContext({});

export const StoreContextProvider = ({ children }) => {
	let [cart, setCart] = useState([]);
	let [products, setProducts] = useState([]);

	useEffect(() => {}, [cart]);

	return (
		<StoreContext.Provider
			value={{
				cart,
				setCart,
				products,
				setProducts,
			}}>
			{children}
		</StoreContext.Provider>
	);
};

export default StoreContext;
