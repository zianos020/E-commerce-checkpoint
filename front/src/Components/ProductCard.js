import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../Redux/Actions/product";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.userReducer.user);
	return (
		<div>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant='top' src='holder.js/100px180' />
				<Card.Body>
					<Card.Title>{product.title}</Card.Title>
					<Card.Text>{product.description}</Card.Text>
					<Card.Text>{product.price}</Card.Text>
					{user && user._id === product.id_user ? (
						<Button
							variant='primary'
							onClick={() => navigate(`/edit/${product._id}`)}>
							Edit
						</Button>
					) : null}
					{user && user._id === product.id_user ? (
						<Button
							variant='primary'
							onClick={() => dispatch(deleteProduct(product._id))}>
							Delete
						</Button>
					) : null}
				</Card.Body>
			</Card>
		</div>
	);
};

export default ProductCard;
