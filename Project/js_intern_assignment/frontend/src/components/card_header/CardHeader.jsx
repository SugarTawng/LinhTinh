import React from "react";
import "./CardHeader.css";

import Logo from "../../assets/nike.png";

const CardHeader = ({ title, totalPrice, isCart = false }) => {
	return (
		<div id="card_header">
			<img
				id="logo"
				src={Logo}
				alt="Logo"
			/>
			<div>
				<h2>{title}</h2>
				{isCart && (
					<h2>
						{new Intl.NumberFormat("en-US", {
							style: "currency",
							currency: "USD",
						}).format(totalPrice)}
					</h2>
				)}
			</div>
		</div>
	);
};

export default CardHeader;
