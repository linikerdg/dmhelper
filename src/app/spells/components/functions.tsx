export async function getSpells() {
	const res = await fetch("https://www.dnd5eapi.co/api/spells");
	return res.json();
}
export async function getSpellImg(index: string) {
	return fetch(
		`https://raw.githubusercontent.com/linikerdg/spellicons/main/${index}.png`
	).then((response) => {
		if (response.status == 404) {
			return "https://raw.githubusercontent.com/linikerdg/spellicons/main/placeholder-spell.png";
		}
		return `https://raw.githubusercontent.com/linikerdg/spellicons/main/${index}.png`;
	});
}
