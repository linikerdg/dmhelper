import React from "react";
import { getSpells } from "./components/functions";
import Spell from "./components/Spell";
import "./components/custom.css";

type Spell = {
	index: string;
	name: string;
	url: string;
};

export default async function Spells() {
	const spells: Spell[] = (await getSpells()).results;
	return (
		<div className='p-4'>
			<center>
				<h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>
					Spells
				</h1>
			</center>
			<ul className='grid grid-cols-2 md:grid-cols-8 gap-2'>
				{spells.map((spell: Spell) => {
					return (
						<li
							key={spell.index}
							className='spellBox flex flex-col p-2 items-center'>
							<Spell index={spell.index} />
							<span className='text-center text-yellow-200 font-semibold'>
								{spell.name}
							</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
