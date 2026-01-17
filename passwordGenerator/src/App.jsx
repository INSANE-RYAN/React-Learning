import { useState, useCallback } from 'react'
import './App.css'


function PasswordGenerator() {
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
        <div className="w-full max-w-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-4 rounded-2xl shadow-2xl flex flex-col gap-3 border border-slate-700">
            <div className="text-center">
                <h1 className="text-3xl font-black bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Password Generator</h1>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-slate-300 text-xs font-semibold uppercase tracking-wide">Password</label>
                <div className="flex gap-2 items-stretch">
                <input
                    type="text"
                    value={password}
                    readOnly
                    className="flex-1 px-3 py-2 bg-slate-700 text-white rounded-lg border-2 border-slate-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 font-mono text-m placeholder-slate-500"
                />
                <button onClick={() => navigator.clipboard.writeText(password)} 
                className='font-bold bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-2 rounded-lg hover:from-blue-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 shadow-lg hover:shadow-blue-500/50 whitespace-nowrap text-xs'>Copy</button>
                </div>
            </div>

            <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-3">
                <div className="bg-slate-700/30 rounded-xl p-3 border border-slate-600/50 flex-1">
                    <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
                        <div className="flex items-center gap-2 lg:gap-3">
                            <label className="flex items-center gap-2 text-slate-200 cursor-pointer group text-sm">
                                <input
                                    type="checkbox"
                                    checked={numall}
                                    onChange={(e) => setNumall(e.target.checked)}
                                    className="w-4 h-4 text-blue-600 bg-slate-600 border-slate-500 rounded focus:ring-2 focus:ring-blue-500/50 cursor-pointer transition-all duration-200"
                                />
                                <span className="group-hover:text-blue-400 transition-colors duration-200">Numbers</span>
                            </label>
                            <label className="flex items-center gap-2 text-slate-200 cursor-pointer group text-sm">
                                <input
                                    type="checkbox"
                                    checked={specialChar}
                                    onChange={(e) => setSpecialChar(e.target.checked)}
                                    className="w-4 h-4 text-blue-600 bg-slate-600 border-slate-500 rounded focus:ring-2 focus:ring-blue-500/50 cursor-pointer transition-all duration-200"
                                />
                                <span className="group-hover:text-blue-400 transition-colors duration-200">Special Chars</span>
                            </label>
                        </div>

                        <label className="flex items-center gap-2 text-slate-300 text-sm lg:border-l lg:border-slate-600/50 lg:pl-3">
                            <span className="text-xs font-semibold uppercase tracking-wide">Len:</span>
                            <input
                                type="number"
                                value={length}
                                onChange={(e) => setLength(Number(e.target.value))}
                                min="8"
                                max="16"
                                className="w-12 px-2 py-1 bg-slate-600 text-white rounded-lg border border-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 text-center font-semibold text-sm"
                            />
                        </label>
                    </div>
                </div>

                <button
                    onClick={generatePassword}
                    className="w-full lg:w-auto px-4 py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white font-bold rounded-lg hover:from-blue-500 hover:via-blue-400 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 shadow-lg hover:shadow-blue-500/50 text-sm uppercase tracking-wide whitespace-nowrap"
                >
                    Generate
                </button>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="bg-gray-900 flex items-center justify-center p-6 rounded-2xl" style={{ minHeight: 'fit-content' }}>
            <PasswordGenerator />
        </div>
    )
}
export default App
