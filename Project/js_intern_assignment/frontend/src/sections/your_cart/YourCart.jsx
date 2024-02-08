import { useContext, useEffect, useState } from "react";
import CardHeader from "../../components/card_header/CardHeader";
import StoreContext from "../../context/StoreContextProvider";
import CartItem from "../../components/cart_item/CartItem";

const YourCart = () => {
	const { cart } = useContext(StoreContext);
	let [totalPrice, setTotalPrice] = useState(0.0);

	useEffect(() => {
		let result = 0;
		cart.forEach((item) => {
			result += item.quantity * item.price;
		});
		setTotalPrice(result);
	}, [cart]);

	return (
		<div
			id="your_cart"
			className="card">
			<CardHeader
				title="Your Cart"
				totalPrice={totalPrice}
				isCart={true}
			/>
			{cart.length > 0 ? (
				cart.map((item) => {
					return (
						<CartItem
							product={item}
							key={item.id}
						/>
					);
				})
			) : (
				<div style={{ padding: "0px 28px" }}>
					<p>Your cart is empty.</p>
				</div>
			)}
		</div>
	);
};

export default YourCart;
