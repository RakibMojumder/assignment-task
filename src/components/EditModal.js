import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

const EditModal = ({ isOpen, closeModal, user }) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900 uppercase mb-5"
                                >
                                    Edit user details
                                </Dialog.Title>
                                <div className='text-slate-800'>
                                    <form className='space-y-4'>
                                        <div className="input-field flex items-center">
                                            <span className='w-[18%]'>Name: </span>
                                            <input className='border border-slate-300 py-0.5 pl-3 w-[80%] focus:outline-none' type="text" defaultValue={user?.name} />
                                        </div>
                                        <div className="input-field flex items-center">
                                            <span className='w-[18%]'>Email: </span>
                                            <input className='border border-slate-300 py-0.5 pl-3 w-[80%] focus:outline-none' type="text" defaultValue={user?.email} />
                                        </div>
                                        <div className="input-field flex items-center">
                                            <span className='w-[18%]'>Phone: </span>
                                            <input className='border border-slate-300 py-0.5 pl-3 w-[80%] focus:outline-none' type="text" defaultValue={user?.phone} />
                                        </div>
                                        <div className="input-field flex items-center">
                                            <span className='w-[18%]'>Website: </span>
                                            <input className='border border-slate-300 py-0.5 pl-3 w-[80%] focus:outline-none' type="text" defaultValue={user?.website} />
                                        </div>
                                    </form>
                                </div>
                                <div className='text-right mt-7'>
                                    <button onClick={closeModal} className='px-5 py-1 border text-slate-700 transition-all duration-500 hover:border-blue-500 hover:text-blue-500'>Cancel</button>
                                    <button onClick={closeModal} className='px-5 py-1 bg-blue-500 text-white transition-all ml-3 hover:bg-blue-400'>Ok</button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default EditModal;