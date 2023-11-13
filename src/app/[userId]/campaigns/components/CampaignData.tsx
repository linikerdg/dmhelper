import "../custom.css";

const CampaignData = async () => {
	try {
		return (
			<ul>
				<li className='campData'>
					<label htmlFor='campInfo'>
						Campaign Name
						<input type='text' defaultValue='teste' />
					</label>
					<label htmlFor='campInfo'>
						Campaign Description
						<textarea defaultValue='teste' />
					</label>
					<label htmlFor='campInfo'>
						Campaign Information
						<textarea defaultValue='teste' />
					</label>
				</li>
			</ul>
		);
	} catch (e) {
		console.log("erro");
	}
};

export default CampaignData;
