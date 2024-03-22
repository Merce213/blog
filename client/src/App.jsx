import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Dashboard from "./pages/Dashboard";

const App = () => {
	return (
		<>
			{/* <Nav /> */}

			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/article/:id" element={<Article />} />
					<Route path="/admin/dashboard" element={<Dashboard />} />
				</Routes>
			</main>
		</>
	);
};

export default App;
