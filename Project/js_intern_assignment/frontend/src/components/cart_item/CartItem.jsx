import { useContext } from "react";
import StoreContext from "../../context/StoreContextProvider";

import Plus from "../../assets/plus.png";
import Minus from "../../assets/minus.png";
import Trash from "../../assets/trash.png";
import "./CartItem.css";

const CartItem = ({ product }) => {
	const { products, setProducts, cart, setCart } = useContext(StoreContext);

	let increaseQuantity = () => {
		let newCartState = cart.map((currItem) => {
			if (currItem.id === product.id)
				currItem = { ...currItem, quantity: currItem.quantity + 1 };
			return currItem;
		});
		setCart(newCartState);
	};

	let decreaseQuantity = () => {
		let newCartState = cart.map((currItem) => {
			if (currItem.id === product.id)
				currItem = { ...currItem, quantity: currItem.quantity - 1 };
			return currItem;
		});
		newCartState = newCartState.filter((currItem) => currItem.quantity > 0);
		setCart(newCartState);

		let newProductsState = products.map((currProduct) => {
			if (currProduct.id === product.id)
				currProduct = { ...currProduct, inCart: false };
			return currProduct;
		});
		setProducts(newProductsState);
	};

	let removeItem = () => {
		let newCartState = cart.filter((currItem) => currItem.id !== product.id);
		setCart(newCartState);

		let newProductsState = products.map((currProduct) => {
			if (currProduct.id === product.id)
				currProduct = { ...currProduct, inCart: false };
			return currProduct;
		});
		setProducts(newProductsState);
	};

	return (
		<div className="cart_item">
			<div
				className="image"
				style={{ backgroundColor: product.color }}>
				<img
					src={product.image}
					alt={product.name}
				/>
			</div>
			<div className="infoAndActions">
				<h5 className="name">{product.name}</h5>
				<h3 className="price">${product.price}</h3>
				<div className="actions">
					<div>
						<button className="btn">
							<img
								src={Minus}
								alt="Minus"
								onClick={decreaseQuantity}
							/>
						</button>
						<div className="quantity">{product.quantity}</div>
						<button className="btn">
							<img
								src={Plus}
								alt="Plus"
								onClick={increaseQuantity}
							/>
						</button>
					</div>
					<button
						className="btn trash"
						onClick={removeItem}>
						<img
							src={Trash}
							alt="Trash"
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
