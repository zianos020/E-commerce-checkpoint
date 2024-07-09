import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Profile = () => {
	const user = useSelector((state) => state.userReducer.user);
	return (
		<div>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant='top' src='holder.js/100px180' />
				<Card.Body>
					<Card.Title>{user && user.name}</Card.Title>
					<Card.Text>{user && user.email}</Card.Text>
					<Card.Text>{user && user.phone}</Card.Text>
					<Button variant='primary'>Go somewhere</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Profile;
