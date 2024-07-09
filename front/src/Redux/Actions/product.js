import axios from "axios";
import {
	FAIL_PRODUCT,
	GET_PRODUCT,
	LOAD_PRODUCT,
	SUCC_PRODUCT,
} from "../ActionTypes/product";

// get all product
export const getProducts = () => async (dispatch) => {
	dispatch({ type: LOAD_PRODUCT });
	try {
		let result = await axios.get("/api/product/getall");
		dispatch({ type: SUCC_PRODUCT, payload: result.data });
	} catch (error) {
		dispatch({ type: FAIL_PRODUCT, payload: error.responsse });
	}
};

// add product
export const addProduct = (newProduct) => async (dispatch) => {
	try {
		const config = {
			headers: {
				authorization: localStorage.getItem("token"),
			},
		};
		await axios.post("/api/product/add", newProduct, config);
		dispatch(getProducts());
	} catch (error) {
		dispatch({ type: FAIL_PRODUCT, payload: error.responsse });
	}
};

// delete Product
export const deleteProduct = (id) => async (dispatch) => {
	try {
		await axios.delete(`/api/product/${id}`);
		dispatch(getProducts());
	} catch (error) {
		dispatch({ type: FAIL_PRODUCT, payload: error.responsse });
	}
};

// edit product
export const editProduct = (id, newProduct) => async (dispatch) => {
	try {
		await axios.put(`/api/product/${id}`, newProduct);
		dispatch(getProducts());
	} catch (error) {
		dispatch({ type: FAIL_PRODUCT, payload: error.responsse });
	}
};

export const getProduct = (id) => async (dispatch) => {
	dispatch({ type: LOAD_PRODUCT });
	try {
		let result = await axios.get(`/api/product/${id}`);
		dispatch({ type: GET_PRODUCT, payload: result.data });
	} catch (error) {
		dispatch({ type: FAIL_PRODUCT, payload: error.responsse });
	}
};
