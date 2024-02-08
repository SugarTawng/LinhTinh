import { useContext } from "react";
import CardHeader from "../../components/card_header/CardHeader";
import ProductItem from "../../components/product_item/ProductItem";
import StoreContext from "../../context/StoreContextProvider";

const OurProducts = () => {
	const { products } = useContext(StoreContext);

	return (
		<div
			id="our_products"
			className="card">
			<CardHeader title="Our Products" />
			{products.map((product) => (
				<ProductItem
					product={product}
					key={product.id}
				/>
			))}
		</div>
	);
};

export default OurProducts;
