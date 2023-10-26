// import { Action } from "@/components/types";
import { getMonster } from "../functions";
import NewNPC from "./components/NewNPC";
import Accordion from "@/components/Accordion";
import Atributes from "./components/Atributes";
import { AbilityScores } from "../../components/types";

export default async function NPCs() {
	const monstro = await getMonster();
	const atributes: number[] = [];
	// const actions: Action[] = [];
	// monstro.actions.map((action) => {
	// 	actions.push(action);
	// });
	Object.values(monstro.abilityScore).forEach((value) => {
		atributes.push(value);
	});
	return (
		<div>
			<h1 className='text-center mt-4'>NPCs</h1>

			<div className='bg-stone-300 max-w-sm rounded-2xl overflow-hidden shadow-lg'>
				<div className='p-2'>
					<div className='font-bold text-xl mb-2'>
						<h2>{monstro.name}</h2>
						<p>
							{monstro.size} {monstro.type}, {monstro.alignment}
						</p>
						<p className='text-sm font-normal text-right'>
							<strong>Challenge:</strong> 10 (5,900 XP)
						</p>
					</div>
					<Accordion title='Atributos'>
						<ul>
							<li className='flex gap-2'>
								<strong>Armor Class</strong>
								{monstro.armorClass.value}(
								{monstro.armorClass.type})
							</li>
							<li className='flex gap-2'>
								<strong>Hit Points</strong>
								{monstro.hitPoints.value}(
								{monstro.hitPoints.dice})
							</li>
							<li className='flex gap-2'>
								<strong>Speed</strong>
								{monstro.speed.value},{monstro.speed.swim},
								{monstro.speed.fly}
							</li>
						</ul>
					</Accordion>
					<Accordion title='Ability Score'>
						<Atributes scores={atributes} />
					</Accordion>
					<Accordion title='Proficiencies'>
						<ul>
							<li>
								<strong>Saving Throws:</strong> Con +6, Int +8,
								Wis +6
							</li>
							<li>
								<strong>Skills:</strong> History +12, Perception
								+10
							</li>
							<li>
								<strong>Senses:</strong> Darkvision 120 Ft.,
								passive Perception 20
							</li>
							<li>
								<strong>Languages:</strong> Deep Speech,
								Telepathy 120 Ft.
							</li>
						</ul>
					</Accordion>
					<Accordion title='Actions'>
						{monstro.actions.map((action, index) => {
							return (
								<Accordion title={"aaaaaaaa"} key={index}>
									<p>{JSON.stringify(action)}</p>
								</Accordion>
							);
						})}
					</Accordion>
				</div>
			</div>
		</div>
	);
}
