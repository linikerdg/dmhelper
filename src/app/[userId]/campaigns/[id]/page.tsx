import "../custom.css";
import { Monster, NPC, Location, Interaction } from "@/app/types";
import CampaignData from "../components/CampaignData";
import Accordion from "../components/Accordion";

interface PageProps {
	params: { id: string };
}

type Section = {
	id: number;
	name: string;
	description: string;
	monsters: Monster[];
	npcs: NPC[];
	locations: Location[];
	interactions: Interaction[];
};

type Campaign = {
	id: number;
	name: string;
	description: string;
	information: string;
	sections: Section[];
};

export default function Campaign({ params }: PageProps, campaign: Campaign) {
	return (
		<main className='px-2'>
			<div className='mt-4'>
				<h2>Campaign {params.id}</h2>
				<CampaignData />
			</div>
			<div>
				<Accordion title='Sections'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Ullam unde eum earum molestiae, quos minima dolor! Porro
					error neque itaque vitae tempora harum sapiente nam,
					asperiores quo at modi accusamus?
				</Accordion>
				<button type='button' className='btn'>
					Add Section
				</button>
			</div>
			<div>
				<Accordion title='Monsters'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Ullam unde eum earum molestiae, quos minima dolor! Porro
					error neque itaque vitae tempora harum sapiente nam,
					asperiores quo at modi accusamus?
				</Accordion>
				<button type='button' className='btn'>
					Add Monster
				</button>
			</div>
			<div>
				<Accordion title='NPCs'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Ullam unde eum earum molestiae, quos minima dolor! Porro
					error neque itaque vitae tempora harum sapiente nam,
					asperiores quo at modi accusamus?
				</Accordion>
				<button type='button' className='btn'>
					Add NPC
				</button>
			</div>
			<div>
				<Accordion title='Locations'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Ullam unde eum earum molestiae, quos minima dolor! Porro
					error neque itaque vitae tempora harum sapiente nam,
					asperiores quo at modi accusamus?
				</Accordion>
				<button type='button' className='btn'>
					Add Location
				</button>
			</div>
			<div>
				<Accordion title='Interactions'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Ullam unde eum earum molestiae, quos minima dolor! Porro
					error neque itaque vitae tempora harum sapiente nam,
					asperiores quo at modi accusamus?
				</Accordion>
				<button type='button' className='btn'>
					Add Interaction
				</button>
			</div>
		</main>
	);
}
