import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { register } from "../Redux/Actions/user";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const [newUser, setNewUser] = useState({});
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChange = (e) => {
		setNewUser({ ...newUser, [e.target.name]: e.target.value });
	};

	const handleUser = (e) => {
		e.preventDefault();
		dispatch(register(newUser));
		navigate("/");
	};

	return (
		<div>
			<h2>Register Page</h2>
			<Form.Label>Name</Form.Label>
			<Form.Control
				type='text'
				placeholder='Enter Name'
				name='name'
				onChange={handleChange}
			/>
			<Form.Label>Email address</Form.Label>
			<Form.Control
				type='email'
				placeholder='Enter email'
				name='email'
				onChange={handleChange}
			/>
			<Form.Label>Password</Form.Label>
			<Form.Control
				type='text'
				placeholder='Enter password'
				name='password'
				onChange={handleChange}
			/>
			<Form.Label>Phone</Form.Label>
			<Form.Control
				type='number'
				placeholder='Enter phone'
				name='phone'
				onChange={handleChange}
			/>
			<Button variant='primary' type='submit' onClick={handleUser}>
				Register
			</Button>
		</div>
	);
};

export default Register;
