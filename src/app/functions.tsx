import { Monster } from "@/components/types";

export async function getMonster() {
	const monster = await (
		await fetch("https://www.dnd5eapi.co/api/monsters/aboleth")
	).json();
	const teste: Monster = {
		index: monster.index,
		name: monster.name,
		size: monster.size,
		type: monster.type,
		alignment: monster.alignment,
		armorClass: {
			type: monster.armor_class[0].type,
			value: monster.armor_class[0].value,
		},
		hitPoints: {
			value: monster.hit_points,
			dice: monster.hit_dice,
		},
		speed: {
			value: monster.speed.walk,
			swim: monster.speed.swim,
			fly: monster.speed.fly,
		},
		abilityScore: {
			str: monster.strength,
			dex: monster.dexterity,
			con: monster.constitution,
			int: monster.intelligence,
			wis: monster.wisdom,
			cha: monster.charisma,
		},
		savingThrow: [],
		damages: {
			vulnerabilities: [],
			resistances: [],
			damgImmunities: [],
			condImmunities: [],
		},
		languages: monster.languages.split(","),
		challenge: {
			level: monster.challenge_rating,
			xp: monster.xp,
		},
		specialAbilities: monster.special_habilities,
		actions: monster.actions,
		// [
		// 	{
		// 		name: monster.actions.name,
		// 		description: monster.actions.desc,
		// 		difficultyClass: {
		// 			type: monster.actions.dc, //dc_type
		// 			value: monster.actions.dc_value, //dc_value
		// 		},
		// 		damage: [
		// 			{
		// 				type: monster.actions.damage, //.damage_type.index,
		// 				value: monster.actions.damage, //.damage_dice,
		// 			},
		// 		],
		// 	},
		// ],
	};
	return teste;
}
