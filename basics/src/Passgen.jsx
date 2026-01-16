import { useState, useCallback } from 'react';

export default function PasswordGenerator() {
    const [password, setPassword] = useState('');
    const [numall, setNumall] = useState(false);
    const [length, setLength] = useState(8);
    const [specialChar, setSpecialChar] = useState(false);

    const generatePassword = useCallback(() => {
        let password = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';

        if (numall) {
            password += numbers;
        }
        if (specialChar) {
            password += specialCharacters;
        }

        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * password.length);
            generatedPassword += password[randomIndex];
        }

        setPassword(generatedPassword);
    }, [numall, length, specialChar, setPassword])

    return (
        <div className="w-full max-w-md mx-auto mt-10 p-8 bg-gray-800 rounded-lg shadow-lg flex flex-col gap-6">
            <h1 className="text-4xl text-white font-bold text-center mb-4">Password Generator</h1>

            <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-medium">Generated Password:</label>
                <div className="flex gap-2">
                <input
                    type="text"
                    value={password}
                    readOnly
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button onClick={() => navigator.clipboard.writeText(password)} 
                className='font-bold outline-none bg-blue-700 text-white px-3 py-2.5 shrink-0 w-min rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200'>Copy</button>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-2 text-white cursor-pointer">
                        <input
                            type="checkbox"
                            checked={numall}
                            onChange={(e) => setNumall(e.target.checked)}
                            className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                        />
                        Include Numbers
                    </label>
                    <label className="flex items-center gap-2 text-white cursor-pointer">
                        <input
                            type="checkbox"
                            checked={specialChar}
                            onChange={(e) => setSpecialChar(e.target.checked)}
                            className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                        />
                        Include Special Chars
                    </label>
                </div>

                <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 text-white">
                        Length:
                        <input
                            type="number"
                            value={length}
                            onChange={(e) => setLength(Number(e.target.value))}
                            min="8"
                            max="16"
                            className="w-20 px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </label>
                </div>
            </div>

            <button
                onClick={generatePassword}
                className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            >
                Generate Password
            </button>
        </div>
    );
}