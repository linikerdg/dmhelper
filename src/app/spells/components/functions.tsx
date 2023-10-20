var api = "https://www.dnd5eapi.co/api/spells";
export async function getSpells(query?: string) {
	if (query) {
		return (await fetch(api + "/?name=" + query)).json();
	} else {
		return (await fetch(api)).json();
	}
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
export async function getSpellDetails(url: string) {
	await fetch(api + url).then((res) => {
		console.log(res.status);
		return res.json();
	});
}
