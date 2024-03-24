import Nav from "./Nav";

const LayoutNav = ({ children }) => {
	return (
		<>
			<Nav />
			{children}
		</>
	);
};

export default LayoutNav;
