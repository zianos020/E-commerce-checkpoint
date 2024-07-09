import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { editProduct, getProduct } from "../Redux/Actions/product";
import { Button, Form } from "react-bootstrap";

const Edit = () => {
	const dispatch = useDispatch();
	const [newProduct, setNewProduct] = useState({});
	const navigate = useNavigate();
	const product = useSelector((state) => state.productReducer.productToGet);
	const match = useMatch("/edit/:id");

	const handleChange = (e) => {
		setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		dispatch(getProduct(match.params.id));
	});

	const handleEdit = () => {
		dispatch(editProduct(match.params.id, newProduct));
		navigate(-1);
	};

	return (
		<div>
			<h2>Edit Product</h2>
			<Form.Label>Title</Form.Label>
			<Form.Control
				type='text'
				placeholder={`${product.title}`}
				value={newProduct.name}
				name='title'
				onChange={handleChange}
			/>
			<Form.Label>Description</Form.Label>
			<Form.Control
				type='text'
				placeholder={`${product.description}`}
				value={newProduct.description}
				name='description'
				onChange={handleChange}
			/>
			<Form.Label>Price</Form.Label>
			<Form.Control
				type='number'
				placeholder={`${product.price}`}
				value={newProduct.price}
				name='price'
				onChange={handleChange}
			/>
			<Button variant='primary' type='submit' onClick={handleEdit}>
				Add
			</Button>
		</div>
	);
};

export default Edit;
