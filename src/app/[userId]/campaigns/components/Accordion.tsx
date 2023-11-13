"use client";
import "./Accordion.css";
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
			<div className='accordion'>
				<div
					className={
						isActive ? "accordion-item isActive" : "accordion-item"
					}>
					<div
						className='accordion-title'
						onClick={() => setIsActive(!isActive)}>
						<div className='flex gap-1 justify-between'>
							<h2>{title}</h2>
							<h2>{isActive ? "-" : "+"}</h2>
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
