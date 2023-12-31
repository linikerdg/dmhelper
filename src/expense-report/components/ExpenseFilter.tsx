import categories from "../categories";

interface Props {
	onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
	return (
		<select
			className='mb-4'
			onChange={(event) => onSelectCategory(event.target.value)}>
			<option value=''>All Categories</option>
			{categories.map((category) => (
				<option key={category} value={category}>
					{category}
				</option>
			))}
		</select>
	);
};

export default ExpenseFilter;
