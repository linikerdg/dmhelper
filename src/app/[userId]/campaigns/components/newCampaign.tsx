"use client";
import "../custom.css";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

export default function ModalNewCampaign() {
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
			<button type='button' onClick={openModal} className='btnAdd'>
				Add Campaign
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
										New Campaign
									</Dialog.Title>
									<div className='mt-2'>
										<form
											className='campData'
											onSubmit={handleSubmit(
												(data) => closeModal
											)}>
											<label htmlFor='campName'>
												Campaign Name
												<input
													{...register("campName")}
													type='text'
													defaultValue='teste'
												/>
											</label>
											<label htmlFor='campDesc'>
												Campaign Description
												<textarea
													{...register("campDesc")}
													defaultValue='teste'
												/>
											</label>
											<label htmlFor='campInfo'>
												Campaign Information
												<textarea
													{...register("campInfo")}
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
