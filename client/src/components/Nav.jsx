import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<header className="shadow shadow-slate-50">
			<nav className="container mx-auto flex px-6 py-4">
				<ul className="flex w-full items-center justify-between">
					<li>
						<Link to="/" className="text-2xl font-bold">
							Blog App
						</Link>
					</li>
					<li>
						<ul className="flex gap-5">
							<li>
								<Link to="/" className="p-4">
									Accueil
								</Link>
							</li>
							<li>
								<Link to="/admin/dashboard" className="p-4">
									Tableau de bord
								</Link>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Nav;
