import React, { useContext } from "react";
import Check from "../../assets/check.png";
import StoreContext from "../../context/StoreContextProvider";

import "./ProductItem.css";

const ProductItem = ({ product }) => {
	const { cart, setCart, products, setProducts } = useContext(StoreContext);

	let addToCart = () => {
		let newProductsState = products.map((currProduct) => {
			if (currProduct.id == product.id)
				currProduct = { ...currProduct, inCart: true };
			return currProduct;
		});

		setProducts(newProductsState);

		let newCartState = [...cart, { ...product, inCart: true, quantity: 1 }];
		setCart(newCartState);
	};

	return (
		<div className="product_item">
			<div
				className="image"
				style={{ backgroundColor: product.color }}>
				<img
					src={product.image}
					alt={product.name}
				/>
			</div>
			<h3 className="title">{product.name}</h3>
			<p className="description">{product.description}</p>
			<div className="infoAndAction">
				<h3>
					{new Intl.NumberFormat("en-US", {
						style: "currency",
						currency: "USD",
					}).format(product.price)}
				</h3>
				{product.inCart ? (
					<button>
						<img
							src={Check}
							alt="Check"
						/>
					</button>
				) : (
					<button onClick={addToCart}>Add to Cart</button>
				)}
			</div>
		</div>
	);
};

export default ProductItem;
