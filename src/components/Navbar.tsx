import React from "react";
import { getAuth, signOut } from "firebase/auth";
import logo from "../images/logo-svg1.svg";

function Navbar({ user }: any) {
	const auth = getAuth();
	return (
		<nav>
			<div className="navbar mb-2  ">
				<div className="flex-1 px-2 mx-2">
					<span className="text-lg font-bold">
						<img
							src={logo}
							style={{
								height: 60,
								filter:
									"invert(100) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%)",
							}}
							className="rounded-lg"
							alt="BTA"
						/>
					</span>
				</div>
				<div className="flex-none hidden px-2 mx-2 lg:flex">
					<div className="flex items-stretch">
						<a className="btn btn-ghost btn-sm rounded-btn" href="/">
							Home
						</a>
						{!user && (
							<div className="btn btn-ghost btn-sm rounded-btn">
								<a href="/signin">Sign In</a>
							</div>
						)}
						{user && (
							<>
								<div className="btn btn-ghost btn-sm rounded-btn">
									<a
										onClick={() => {
											signOut(auth)
												.then(() => {
													alert("Signed Out");
													window.location.href = "/";
												})
												.catch((error) => {
													alert(error.message);
												});
										}}
									>
										Signout
									</a>
								</div>
								<div className="btn btn-ghost btn-sm rounded-btn">
									<a href="/admin">Admin</a>
								</div>
								<div className="btn btn-ghost btn-sm rounded-btn">
									<a href="/admin/bills">Your Bills</a>
								</div>
							</>
						)}
					</div>
				</div>
				<div className="flex-none">
					<button className="btn btn-square btn-ghost">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="inline-block w-6 h-6 stroke-current"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>
						</svg>
					</button>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
