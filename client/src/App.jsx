import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Dashboard from "./pages/Dashboard";
import LayoutNav from "./components/LayoutNav";

const App = () => {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<LayoutNav>
							<Home />
						</LayoutNav>
					}
				/>
				<Route
					path="/article/:id"
					element={
						<LayoutNav>
							<Article />
						</LayoutNav>
					}
				/>
				<Route path="/admin/dashboard" element={<Dashboard />} />
			</Routes>
		</>
	);
};

export default App;
