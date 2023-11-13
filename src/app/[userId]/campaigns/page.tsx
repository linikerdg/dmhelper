import Link from "next/link";
import "./custom.css";
import ModalNewCampaign from "./components/ModalNewCampaign";
export default function Campaigns() {
	const campaigns = [
		{
			id: 1,
			name: "Campanha 1",
			desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium nobis alias sapiente, odit ipsa ad consectetur aliquid eveniet odio explicabo enim id? Magni ea dignissimos vero ullam beatae modi alias.",
		},
		{
			id: 2,
			name: "Campanha 2",
			desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium nobis alias sapiente, odit ipsa ad consectetur aliquid eveniet odio explicabo enim id? Magni ea dignissimos vero ullam beatae modi alias.",
		},
		{
			id: 3,
			name: "Campanha 3",
			desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium nobis alias sapiente, odit ipsa ad consectetur aliquid eveniet odio explicabo enim id? Magni ea dignissimos vero ullam beatae modi alias.",
		},
	];

	return (
		<>
			<div className='flex flex-row justify-between my-2 px-2'>
				<h1>Campaigns</h1>
				<ModalNewCampaign />
			</div>
			<ul>
				{campaigns.map((camp) => {
					return (
						<li key={camp.id}>
							<div className='campCard'>
								<h2>{camp.name}</h2>
								<p>{camp.desc}</p>
								<Link
									className='btn'
									href={`/campaigns/${camp.id}`}>
									Detalhes
								</Link>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
}
