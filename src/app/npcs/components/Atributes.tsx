import React from "react";
import AtributeBox from "./AtributeBox";

interface Props {
	scores: number[];
}

const Atributes = ({ scores }: Props) => {
	return (
		<div className='flex justify-center'>
			<ul className='abltScores p-2'>
				<li>
					<AtributeBox ability='STR' score={scores[0]} />
				</li>
				<li>
					<AtributeBox ability='DEX' score={scores[1]} />
				</li>
				<li>
					<AtributeBox ability='CON' score={scores[2]} />
				</li>
				<li>
					<AtributeBox ability='INT' score={scores[3]} />
				</li>
				<li>
					<AtributeBox ability='WIS' score={scores[4]} />
				</li>
				<li>
					<AtributeBox ability='CHA' score={scores[5]} />
				</li>
			</ul>
		</div>
	);
};

export default Atributes;
