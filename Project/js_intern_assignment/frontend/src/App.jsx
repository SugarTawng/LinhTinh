import { useContext, useEffect } from "react";
import axios from "axios";

import StoreContext from "./context/StoreContextProvider";
import OurProducts from "./sections/our_products/OurProducts";
import YourCart from "./sections/your_cart/YourCart";

import { apiUrl } from "./constants/constants";

import "./app.css";

const App = () => {
	const { setProducts } = useContext(StoreContext);

	let fetchData = async () => {
		await axios.get(apiUrl).then((res) => {
			let data = res.data.map((data) => {
				return { ...data, inCart: false };
			});
			setProducts(data);
		});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div id="app">
			<OurProducts />
			<YourCart />
		</div>
	);
};

export default App;
