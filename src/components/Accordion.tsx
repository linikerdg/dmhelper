"use client";
import "./custom.css";
import { useState, useEffect } from "react";

interface Props {
	title: string;
	children: React.ReactNode;
}

const Accordion = ({ title, children }: Props) => {
	// const title = "a";
	const [isActive, setIsActive] = useState(false);

	return (
		<>
			<div className='accordion px-2'>
				<div
					className={
						isActive ? "accordion-item isActive" : "accordion-item"
					}>
					<div
						className='accordion-title border-t-[1px] px-2 border-black'
						onClick={() => setIsActive(!isActive)}>
						<div className='flex gap-1 justify-between'>
							<h3>{title}</h3>
							<h3>{isActive ? "-" : "+"}</h3>
						</div>
					</div>
					{isActive && (
						<div className='accordion-content'>{children}</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Accordion;
