import { useEffect, useState } from "react";

function App() {
	const [products, setProducts] = useState([]);
	// const [category, setCategory] = useState([]);

	useEffect(() => {
		fetchApi();
	}, []);
	// const filterCategory = [...new Set(category)];

	function fetchApi() {
		fetch("https://dummyjson.com/products")
			.then((response) => response.json())
			.then((data) => {
				setProducts(data.products);
				// data.products.map((all) => {
				// 	setCategory(all.category);
				// });
			});
	}

	// console.log(products, category);

	return (
		<>
			<div className="container h-screen mx-auto w-3/4">
				<h1 className="text-4xl text-center">Search Products</h1>
				<div className="price-category flex items-center w-2/4 mx-auto my-6 justify-between">
					<div className="price">
						<input
							type="number"
							className="p-2 rounded border border-teal-900"
							placeholder="Enter Price"
						/>
					</div>
					<div className="category">
						<select></select>
					</div>
				</div>
				<div className="product-cards grid grid-cols-3 gap-4 mx-auto items-center">
					{products.map((all) => {
						return (
							<ProductCards
								category={all.category}
								key={all.id}
								thumbnail={all.thumbnail}
								description={all.description}
								price={all.price}
								title={all.title}
								id={all.id}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}

function ProductCards(props) {
	return (
		<div className="product border p-2 h-full" id={props.id}>
			<div className="productImage">
				<img src={props.thumbnail} />
			</div>
			<div className="productDetails">
				<h2 className="text-2xl font-bold">{props.title}</h2>
				<p className="text-lg">{props.description}</p>
				<p className="text-lg bg">Price: ${props.price}</p>
			</div>
			<span className={`bg-${getRandomColor()}-${getRandomHundred()}   p-2`}>
				{props.category}
			</span>
		</div>
	);
}

function getRandomHundred() {
	// Array of possible hundreds

	const hundreds = [100, 200, 300, 400, 500, 600, 700, 800, 900];

	// Generate a random index
	const randomIndex = Math.floor(Math.random() * hundreds.length);

	// Return a random hundred from the array
	return hundreds[randomIndex];
}

// console.log(getRandomColor, getRandomHundred);

function getRandomColor() {
	// Array of possible hundreds

	const colors = ["teal", "red", "blue", "green", "orange", "pink", "gray"];

	// Generate a random index
	const randomIndex = Math.floor(Math.random() * colors.length);

	// Return a random hundred from the array
	return colors[randomIndex];
}

export default App;
