import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) {
        return (
            <div className="bg-gray-400 p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Profile</h2>
                <p className="text-gray-600 text-center">Please log in to see your profile.</p>
            </div>
        );
    }
    return (
        <div className="bg-gray-400 p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Profile</h2>
            <div className="text-center">
                <p className="text-lg text-gray-700 mb-4">Welcome, <span className="font-semibold text-blue-600">{user.userName}</span>!</p>
                <div className="bg-gray-100 p-4 rounded-md">
                    <p className="text-sm text-gray-600">Username: {user.userName}</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
