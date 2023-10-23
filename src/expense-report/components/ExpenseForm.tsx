"use client";
import categories from "../categories";
import { useForm, FieldValues, FormState } from "react-hook-form";
import "./custom.css";

interface Props {
	onSubmit: (data: FormData) => void;
}

interface FormData {
	description: string;
	amount: number;
	category: string;
}

const ExpenseForm = ({ onSubmit }: Props) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>();

	return (
		<form
			onSubmit={handleSubmit((data) => {
				onSubmit(data);
				reset();
			})}>
			<div className='formItem'>
				<label htmlFor='description'>Description</label>
				<input
					id='description'
					type='text'
					placeholder='Description'
					{...register("description", { required: true })}
				/>
				{errors.description?.type === "required" && (
					<p className='text-red-500'>The name field is required</p>
				)}
			</div>
			<div className='formItem'>
				<label htmlFor='amount'>Amount</label>
				<input
					id='amount'
					type='number'
					placeholder='Amount'
					{...register("amount", { required: true })}
				/>
				{errors.amount?.type === "required" && (
					<p className='text-red-500'>The name field is required</p>
				)}
			</div>
			<div className='formItem'>
				<label htmlFor='category'>Category</label>
				<select
					id='category'
					{...register("category", { required: true })}>
					{categories.map((category) => (
						<option key={category} value={category}>
							{category}
						</option>
					))}
				</select>
			</div>
			<div className='formItem self-center'>
				<button>Enviar</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
