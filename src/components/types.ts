// export type Dice = {
// 	name: string;
// 	value: number;
// };
export type AbilityScores = {
	str: number;
	dex: number;
	con: number;
	int: number;
	wis: number;
	cha: number;
};
export type HP = {
	value: number;
	dice: string;
};
export type AC = {
	type: string;
	value: number;
};
type Speed = {
	value: number;
	swim?: number;
	fly?: number;
};
export type Skill = {
	name: string;
	bonus: number;
};
export type Sense = {
	name: string;
	value: number;
};
export type Challenge = {
	level: number;
	xp: number;
};
type DC = {
	type: "str" | "dex" | "con" | "int" | "wis" | "cha";
	value: number;
	onSuccess?: string;
};
export type Damage = {
	type: string;
	value: string;
};
export type Special = {
	name: string;
	description: string;
	dificultyClass?: DC;
};
// export type Action = {
// 	legendary?: boolean;
// 	name: string;
// 	description: string;
// 	effect?: string;
// 	difficultyClass?: DC;
// 	damage?: Damage[];
// };
export type Damages = {
	vulnerabilities: string[];
	resistances: string[];
	damgImmunities: string[];
	condImmunities: string[];
};
export type Monster = {
	index: string;
	name: string;
	size: string;
	description?: string;
	type: string;
	alignment: string;
	armorClass: AC;
	hitPoints: HP;
	speed: Speed;
	abilityScore: AbilityScores;
	savingThrow: DC[];
	skills?: Skill[];
	damages: Damages;
	senses?: Sense[];
	languages: string[];
	challenge: Challenge;
	specialAbilities: Special[];
	actions: [];
	image?: string;
};
