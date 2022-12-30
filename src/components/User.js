import React, { useState } from 'react';
import { MdOutlineMailOutline } from 'react-icons/md'
import { HiOutlinePhone, HiOutlineTrash } from 'react-icons/hi'
import { FiLink, FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
import { BiEditAlt } from 'react-icons/bi'
import EditModal from './EditModal';

const User = ({ user }) => {
    const [fillHeart, setFillHeart] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <div className='border'>
            <div className='bg-gray-100'>
                <img className='w-full h-44' src={`https://avatars.dicebear.com/v2/avataaars/${user?.name}.svg`} alt="" />
            </div>
            <div className='p-5 space-y-1'>
                <h1 className='text-lg font-semibold'>{user?.name}</h1>
                <div className='flex items-center text-base'>
                    <MdOutlineMailOutline className='mr-2 text-xl' />
                    <p>{user?.email}</p>
                </div>
                <div className='flex items-center text-base'>
                    <HiOutlinePhone className='mr-2 text-xl' />
                    <p>{user?.phone}</p>
                </div>
                <div className='flex items-center text-base'>
                    <FiLink className='mr-2 text-xl' />
                    <p>{user?.website}</p>
                </div>
            </div>
            <div className='flex items-center justify-between text-xl bg-gray-100 py-3'>
                {
                    fillHeart ? <FaHeart onClick={() => setFillHeart(!fillHeart)} className='w-full border-r-2 border-slate-400 text-red-500' /> : <FiHeart onClick={() => setFillHeart(!fillHeart)} className='w-full border-r-2 border-slate-400 text-red-500' />
                }
                <BiEditAlt onClick={openModal} className='w-full border-r-2 border-slate-400' />
                <HiOutlineTrash className='w-full' />
            </div>
            <EditModal isOpen={isOpen} closeModal={closeModal} user={user} />
        </div>
    );
};

export default User;