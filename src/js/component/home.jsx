import React, { useState, useEffect } from "react";
import {db} from "../../firebase";
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from "firebase/firestore";

const Home = () => {
	const[ newFirstName, setNewFirstName ] = useState("");
	const[ newLastName, setNewLastName ] = useState("");
	const[newAge, setNewAge ] = useState(0);
    const[ newDrink, setNewDrink ] = useState("");
	const [users, setUsers] = useState([]);
	const userCollectionRef = collection (db, "users");

	const createUser = async () => {
		await addDoc(userCollectionRef, {first_name: newFirstName, last_name: newLastName, new_drink: newDrink,  age: Number(newAge)});
	}

	const updateAge = async (id, age) => {
		const userDoc = doc(db, "users", id); 
		const newFields = {age: age + 1};
		await updateDoc(userDoc, newFields);
	}

	const deleteUser = async (id) => {
		const userDoc = doc(db, "users", id); 
		await deleteDoc(userDoc);
	}

	useEffect(() => {
		const getUsers = async () =>{
			const data = await getDocs(userCollectionRef)
			setUsers(data.docs.map(doc => ({...doc.data(), id: doc.id})));
		};
		getUsers();
	}, []);

	return (
		<div>
			<input 
				placeholder="First Name"
				onChange={event => {setNewFirstName(event.target.value);}}
			/>

			<input 
				placeholder="Last Name"
				onChange={event => {setNewLastName(event.target.value);}}
			/>

            <input 
				placeholder="Favorite Drinks"
				onChange={event => {setNewDrink(event.target.value);}}
			/>

			<input 
				type= "number" 
				placeholder="Age"
				onChange={event => {setNewAge(event.target.value);}}
			/>
			<button onClick={createUser}> Create an User</button>

			{   //GET user from data base
				users.map(user => {
					return(
						<div key={user.id}>
								<h1>Name: {user.first_name} {user.last_name}</h1>
                                <h1>Favorite Drinks: {user.new_drink} </h1>
								<h1>Age of the User: {user.age}</h1>
								<button onClick={() => updateAge(user.id, user.age)}>Increase age</button>
								<button onClick={() => deleteUser(user.id)}>Delete user</button>
						</div>
					)
				}
				)
				//end GET
			}  
		</div>
	)

};

export default Home;
