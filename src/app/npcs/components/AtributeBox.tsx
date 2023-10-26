import "./custom.css";

interface Props {
	ability: string;
	score: number;
}

const AtributeBox = ({ ability, score }: Props) => {
	let modifier = 0;
	switch (true) {
		case score <= 1:
			modifier = -5;
			break;
		case score >= 2 && score <= 3:
			modifier = -4;
			break;
		case score >= 4 && score <= 5:
			modifier = -3;
			break;
		case score >= 6 && score <= 7:
			modifier = -2;
			break;
		case score >= 8 && score <= 9:
			modifier = -1;
			break;
		case score >= 10 && score <= 11:
			modifier = 0;
			break;
		case score >= 12 && score <= 13:
			modifier = 1;
			break;
		case score >= 14 && score <= 15:
			modifier = 2;
			break;
		case score >= 16 && score <= 17:
			modifier = 3;
			break;
		case score >= 18 && score <= 19:
			modifier = 4;
			break;
		case score >= 20 && score <= 21:
			modifier = 5;
			break;
		case score >= 22 && score <= 23:
			modifier = 6;
			break;
		case score >= 24 && score <= 25:
			modifier = 7;
			break;
		case score >= 26 && score <= 27:
			modifier = 8;
			break;
		case score >= 28 && score <= 29:
			modifier = 9;
			break;
		case score >= 30:
			modifier = 10;
			break;
	}
	return (
		<div className='attBox'>
			<p>{ability}</p>
			<input type='text' defaultValue={score} />
			<p>
				{modifier > 0 && "+"}
				{modifier}
			</p>
		</div>
	);
};

export default AtributeBox;
