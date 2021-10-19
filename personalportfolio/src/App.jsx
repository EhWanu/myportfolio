import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";

function App() {
	return (
		<div className="app">
			<Intro />
			<About />
			<ProductList />
		</div>
	);
}

export default App;
