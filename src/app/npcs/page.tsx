import { Monster } from "@/components/types";
import { getMonster } from "../functions";
import NewNPC from "./components/NewNPC";

export default function NPCs() {
	return (
		<div>
			<h1 className='text-center mt-4'>NPCs</h1>
			{/* <NewNPC /> */}
			{getMonster()}
		</div>
	);
}
