import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import User from '../../components/User';
import { getUsers } from './userSlice';

const Users = () => {
    const { users, loading } = useSelector((state) => state.userReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);

    if (loading) {
        return <div className='min-h-screen flex justify-center items-center'>
            <ScaleLoader
                color="gray"
                loading={loading}
                size={150}
            />
        </div>
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {
                users?.map(user => <User key={user.id} user={user} />)
            }
        </div >
    );
};

export default Users;