"use client";

import SpellDetails from "../spells/components/SpellDetails";
const spellIndex = "1";
const spellName = "Acid Arrow";
const spellDetails =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, doloribus dicta. Aliquid similique saepe veniam aspernatur nihil, obcaecati et quam at. Eveniet ad suscipit qui ab. Deleniti commodi corporis quod!";
const spellImg =
	"https://raw.githubusercontent.com/linikerdg/spellicons/main/acid-arrow.png";

export default function Tests() {
	return (
		<div>
			<SpellDetails
				spellIndex={spellIndex}
				spellName={spellName}
				spellDetails={spellDetails}
				spellImg={spellImg}
			/>
		</div>
	);
}
