import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Actions/product";
import ProductCard from "./ProductCard";
import { Spinner } from "react-bootstrap";

const ProductList = () => {
	const list = useSelector((state) => state.productReducer.listProducts);
	const load = useSelector((state) => state.productReducer.load);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<div>
			<h2>Product List</h2>
			<div
				style={{
					display: "flex",
					justifyContent: "space-around",
					flexWrap: "wrap",
				}}>
				{load ? (
					<Spinner animation='border' />
				) : (
					list.map((el) => <ProductCard product={el} key={el._id} />)
				)}
			</div>
		</div>
	);
};

export default ProductList;
