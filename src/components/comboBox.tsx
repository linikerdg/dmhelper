import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { CheckIcon } from "@heroicons/react/24/outline";

interface Props {
	data: string[];
}

export function MyCombobox({ data }: Props) {
	const [selected, setSelected] = useState(data[0]);
	const [query, setQuery] = useState("");

	const filteredData =
		query === ""
			? data
			: data.filter((item) =>
					item
						.toLowerCase()
						.replace(/\s+/g, "")
						.includes(query.toLowerCase().replace(/\s+/g, ""))
			  );

	return (
		<div>
			<Combobox value={selected} onChange={setSelected}>
				<div className='relative mt-1'>
					<div className='relative w-full cursor-default overflow-hidden rounded-lg '>
						<Combobox.Input
							className='w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900'
							onChange={(event) => setQuery(event.target.value)}
						/>
						<Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
							<ChevronUpDownIcon
								className='h-5 w-5 text-gray-400'
								aria-hidden='true'
							/>
						</Combobox.Button>
					</div>
					<Transition
						as={Fragment}
						leave='transition ease-in duration-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
						afterLeave={() => setQuery("")}>
						<Combobox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg'>
							{filteredData.length === 0 && query !== "" ? (
								<div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
									Nothing found.
								</div>
							) : (
								filteredData.map((item, index) => (
									<Combobox.Option
										key={index}
										className={({ active }) =>
											`relative cursor-default select-none py-2 pl-10 pr-4 ${
												active
													? "bg-teal-600 text-white"
													: "text-gray-900"
											}`
										}
										value={item}>
										{({ selected, active }) => (
											<>
												<span
													className={`block truncate ${
														selected
															? "font-medium"
															: "font-normal"
													}`}>
													{item}
												</span>
												{selected ? (
													<span
														className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
															active
																? "text-white"
																: "text-teal-600"
														}`}></span>
												) : null}
											</>
										)}
									</Combobox.Option>
								))
							)}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</div>
	);
}
