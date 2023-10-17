import React from "react";
import { getSpellImg } from "./functions";
import Image from "next/image";

interface Props {
	index: string;
}

const Spell = async ({ index }: Props) => {
	const spellImg = await getSpellImg(index);
	return (
		<Image
			className='rounded-xl m-auto'
			src={spellImg}
			width={60}
			height={60}
			alt={index}
		/>
	);
};

export default Spell;
