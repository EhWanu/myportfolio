import "./productList.css";
import Product from "../product/Product";

const ProductList = () => {
	return (
		<div className="pl">
			<div className="pl-texts">
				<h1 className="pl-title">
					The Legacy Code of Tomorrow
				</h1>
				<p className="pl-desc">
					Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Molestias aliquid possimus
					pariatur, expedita in quo praesentium.
				</p>
			</div>
			<div className="pl-list">
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
		</div>
	);
};

export default ProductList;
