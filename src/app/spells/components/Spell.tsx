"use client";
import React, { MouseEventHandler } from "react";
import Image from "next/image";
import SpellDetails from "./SpellDetails";

interface Props {
	spellIndex: string;
	spellName: string;
	spellImg: string;
}

const Spell = ({ spellIndex, spellName, spellImg }: Props) => {
	function handleClick() {}
	return (
		<div
			className='flex flex-col p-4 items-center justify-between w-full h-full cursor-pointer'
			onClick={(e) => {
				console.log({ spellName });
			}}>
			<Image
				className='rounded-xl m-auto'
				src={spellImg}
				width={60}
				height={60}
				alt={spellIndex}
				id={spellIndex}
			/>
			<span className='text-center text-black font-semibold'>
				{spellName}
			</span>
		</div>
	);
};

export default Spell;
