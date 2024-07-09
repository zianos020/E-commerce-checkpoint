import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Error from "./Pages/Error";
import Navigation from "./Components/Navigation";
import { useDispatch } from "react-redux";
import { current } from "./Redux/Actions/user";
import Product from "./Pages/Product";
import AddProduct from "./Pages/AddProduct";
import Edit from "./Pages/Edit";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		if (localStorage.getItem("token")) {
			dispatch(current());
		}
	}, [dispatch]);

	return (
		<div className='App'>
			<Navigation />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/product' element={<Product />} />
				<Route path='/edit/:id' element={<Edit />} />
				<Route path='/addproduct' element={<AddProduct />} />
				<Route path='/*' element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
