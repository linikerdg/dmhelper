"use client";
import "./custom.css";
import { FieldValues, useForm } from "react-hook-form";
import AtributeBox from "./AtributeBox";
import { Monster } from "@/components/types";

interface Props {
	scores: number[];
}

const NewNPC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormData>();
	const onSubmit = (data: FieldValues) => console.log(data);

	return (
		<form>
			<div className='flex justify-center'>
				<ul className='abltScores p-2'>
					{/* <li>
						<AtributeBox ability='STR' score={} />
					</li>
					<li>
						<AtributeBox ability='DEX' />
					</li>
					<li>
						<AtributeBox ability='CON' />
					</li>
					<li>
						<AtributeBox ability='INT' />
					</li>
					<li>
						<AtributeBox ability='WIS' />
					</li>
					<li>
						<AtributeBox ability='CHA' />
					</li> */}
				</ul>
			</div>
		</form>
	);
};

export default NewNPC;
