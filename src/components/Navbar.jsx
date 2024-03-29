import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles.js";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);

	return (
		<nav
			className={`${styles.paddingX} w-full flex
        items-center py-5 fixed top-0 z-20 bg-primary`}
		>
			<div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2 space-x-1.5"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<div className="bg-white p-1 rounded-full">
						<img
							src={logo}
							alt="logo"
							className="w-8 h-8 object-contain rounded-full border border-black"
						/>
					</div>
					<p className="text-white text-[18px] font-medium cursor-pointer flex space">
						Eduardo&nbsp; <span className="sm:block hidden"> 🍂 </span>
					</p>
				</Link>

				<ul className="list-none hidden sm:flex flex-row gap-10">
					{navLinks.map((item) => (
						<li
							key={item.id}
							className={`${
								active === item.title ? "text-white" : "text-secondary"
							} hover:text-white text-[18px] font-medium cursor-pointer`}
							onClick={() => setActive(item.title)}
						>
							<a href={`#${item.id}`}>{item.title}</a>
						</li>
					))}
				</ul>

				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? close : menu}
						alt={menu}
						className="w-[20px] h-[20px] object-contain"
						onClick={() => setToggle(!toggle)}
					/>
					<div
						className={`${
							toggle ? "flex" : "hidden"
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-0 min-w-[120px] z-10 rounded-xl`}
					>
						<ul className="list-none flex justify-end item-start flex-col gap-2">
							{" "}
							{navLinks.map((link) => (
								<li
									key={link.id}
									className={`${
										active === link.title ? "text-white" : "text-secondary"
									} font-poppins font-medium cursor-pointer text-[16px]`}
									onClick={() => {
										setToggle(!toggle);
										setActive(link.title);
									}}
								>
									<a href={`#${link.id}`}>{link.title} </a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
