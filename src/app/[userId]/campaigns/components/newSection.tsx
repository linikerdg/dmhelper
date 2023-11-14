"use client";
import "../custom.css";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { MyCombobox } from "@/components/comboBox";

const campanhas = ["Campanha1", "Campanha2", "Campanha3"];

export default function ModalNewSection() {
	let [isOpen, setIsOpen] = useState(false);
	const { register, handleSubmit } = useForm();

	function closeModal(data: any) {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}
	return (
		<>
			<button type='button' onClick={openModal} className='btn'>
				Add Section
			</button>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as='div' className='relative z-10' onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<div className='fixed inset-0 bg-black/25' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-4 text-center'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'>
								<Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
									<Dialog.Title
										as='h3'
										className='text-lg font-medium leading-6 text-gray-900'>
										New Section
									</Dialog.Title>
									<div className='mt-2'>
										<form
											className='campData'
											onSubmit={handleSubmit(
												(data) => closeModal
											)}>
											<label htmlFor='campaign'>
												Campaign
												<MyCombobox data={campanhas} />
											</label>
											<label htmlFor='sectionName'>
												Section Name
												<input
													{...register("sectionName")}
													type='text'
													defaultValue='teste'
												/>
											</label>
											<label htmlFor='sectionDesc'>
												Section Description
												<textarea
													{...register("sectionDesc")}
													defaultValue='teste'
												/>
											</label>
											<label htmlFor='sectInfo'>
												Section Information
												<textarea
													{...register("sectInfo")}
													defaultValue='teste'
												/>
											</label>
										</form>
									</div>

									<div className='mt-4'>
										<button
											type='submit'
											className='btnAdd'>
											Enviar
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
