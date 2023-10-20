import React from "react";
import {
	getSpellDetails,
	getSpellImg,
	getSpells,
} from "./components/functions";
import Spell from "./components/Spell";
import "./components/custom.css";
import SpellDetails from "./components/SpellDetails";

type Spell = {
	index: string;
	name: string;
	url: string;
};

export default async function Spells({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const teste = searchParams.search;
	console.log(await getSpells(teste as string));
	const spells: Spell[] = (await getSpells(teste as string)).results || [];
	return (
		<div className='p-4 h-full'>
			<center>
				<h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>
					Spells
				</h1>
			</center>
			{/* <ul className='grid grid-cols-2 md:grid-cols-8 gap-2'> */}
			<ul className='flex flex-wrap gap-2'>
				{spells.map(async (spell: Spell) => {
					const spellImg = await getSpellImg(spell.index);
					// const SpellDetails = await getSpellDetails(spell.url);
					return (
						<li key={spell.index} className='spellBox'>
							<Spell
								spellIndex={spell.index}
								spellName={spell.name}
								spellImg={spellImg}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
