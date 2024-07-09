import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/Actions/product";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
	const [newProduct, setNewProduct] = useState({});
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleChange = (e) => {
		setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
	};

	const add = () => {
		dispatch(addProduct(newProduct));
		navigate("/product");
	};
	return (
		<div>
			<h2>Add Product</h2>
			<Form.Label>Title</Form.Label>
			<Form.Control
				type='text'
				placeholder='Enter title'
				value={newProduct.name}
				name='title'
				onChange={handleChange}
			/>
			<Form.Label>Description</Form.Label>
			<Form.Control
				type='text'
				placeholder='Enter description'
				value={newProduct.description}
				name='description'
				onChange={handleChange}
			/>
			<Form.Label>Price</Form.Label>
			<Form.Control
				type='number'
				placeholder='Enter price'
				value={newProduct.price}
				name='price'
				onChange={handleChange}
			/>
			<Button variant='primary' type='submit' onClick={() => add()}>
				Add
			</Button>
		</div>
	);
};

export default AddProduct;
