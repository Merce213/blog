import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="flex">
			<button
				type="button"
				className="my-2 inline-flex w-full items-center rounded-lg p-2 px-6 text-sm text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 lg:hidden"
				onClick={handleToggle}
			>
				<span className="sr-only">Open sidebar</span>
				<svg
					className="size-6"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						clipRule="evenodd"
						fillRule="evenodd"
						d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
					/>
				</svg>
			</button>

			<aside
				className={
					"fixed h-screen w-64 -translate-x-full transition-transform lg:static lg:translate-x-0 z-40" +
					(isOpen ? " translate-x-0" : "")
				}
				aria-label="Sidebar"
			>
				<div className="h-full overflow-y-auto bg-gray-800 px-3 py-4">
					<div>
						<div className="pb-5">
							<Link
								to="/"
								className="flex items-center text-white"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="m11 17-5-5 5-5" />
									<path d="m18 17-5-5 5-5" />
								</svg>
								<span className="ms-3 text-2xl">Blog App</span>
							</Link>
						</div>

						<h1 className="text-2xl font-bold text-white">
							Dashboard
						</h1>

						<ul className="mt-6">
							<li className="">
								<Link
									to="/admin/dashboard"
									className="flex items-center rounded-md py-2 pl-2 pr-3 text-white hover:bg-gray-700"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
										<path d="M18 14h-8" />
										<path d="M15 18h-5" />
										<path d="M10 6h8v4h-8V6Z" />
									</svg>
									<span className="ms-3">Articles</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</aside>
		</div>
	);
};

export default SideBar;
