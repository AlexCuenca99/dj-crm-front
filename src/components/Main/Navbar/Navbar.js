import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export function Navbar() {
	const [showHamNav, setShowHamNav] = useState(true);

	const handleShowHamNav = () => {
		setShowHamNav((prev) => !prev);
	};

	return (
		<div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
			<h1 className="w-full text-3xl font-bold">dj CRM</h1>
			<ul className="hidden md:flex">
				<li className="p-4">Agents</li>
				<li className="p-4">Leads</li>
				<li className="p-4">Logged in as: Admin</li>
				<li className="p-4">Log-out</li>
			</ul>
			<div onClick={handleShowHamNav} className="block md:hidden">
				{showHamNav ? (
					<AiOutlineClose size={20} />
				) : (
					<AiOutlineMenu size={20} />
				)}
			</div>
			<div
				className={
					showHamNav
						? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-200 bg-[#F1EFF9] ease-in-out duration-500 '
						: 'fixed left-[-100%]'
				}
			>
				<h1 className="w-full text-3xl font-bold p-6">dj CRM</h1>
				<ul className="p-4 uppercase">
					<li className="p-4 border-b border-gray-300">Agents</li>
					<li className="p-4 border-b border-gray-300">Leads</li>
					<li className="p-4 border-b border-gray-300">
						Logged in as: Admin
					</li>
					<li className="p-4">Log-out</li>
				</ul>
			</div>
		</div>
	);
}
