import Image from "next/image";
import Link from "next/link";
import React from "react";
import Search from "./Search";

interface Page {
	name: string;
	path: string;
}

export default function Navbar() {
	const pages: Page[] = [
		{ name: "Home", path: "/" },
		{ name: "Spells", path: "/spells" },
		{ name: "Tests", path: "/tests" },
		{ name: "NPCs", path: "/npcs" },
	];
	return (
		<nav className='bg-white border-gray-200 dark:bg-gray-900'>
			<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
				<div className='flex md:order-2'>
					<Search />
				</div>
				<div
					className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
					id='navbar-search'>
					<div className='relative mt-3 md:hidden'>
						<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
							<svg
								className='w-4 h-4 text-gray-500 dark:text-gray-400'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 20 20'>
								<path
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
								/>
							</svg>
						</div>
						<input
							type='text'
							id='search-navbar'
							className='block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-red-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder={"value"}
						/>
					</div>
					<ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
						{pages.map((page: Page, index) => {
							return (
								<li key={page.name + index}>
									<Link
										href={page.path}
										className='text-white hover:text-blue-500'>
										{page.name}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
}
