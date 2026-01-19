import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="w-full h-screen duration-200 width-full flex justify-center "
      style = {{"backgroundColor": count}}
      >
        <div className="fixed top-55 flex flex-col justify-center items-center h-full gap-4">
          <h1 className="text-4xl font-bold text-align-center">Change Background Color</h1>
          <div className="flex gap-4 bg-[#a09d9d] p-4 rounded-lg">
            <button onClick={() => setCount("#1f1f1f")} className="bg-[#1f1f1f] text-white px-4 py-2 rounded">Black</button>
            <button onClick={() => setCount("red")} className="bg-red-500 text-white px-4 py-2 rounded">Red</button>
            <button onClick={() => setCount("blue")} className="bg-blue-500 text-white px-4 py-2 rounded">Blue</button>
            <button onClick={() => setCount("green")} className="bg-green-500 text-white px-4 py-2 rounded">Green</button>
            <button onClick={() => setCount("#F5D6BA")} className="bg-[#ffd7b5] text-white px-4 py-2 rounded">Soft Apricot</button>
            <button onClick={() => setCount("pink")} className="bg-pink-500 text-white px-4 py-2 rounded">Pink</button>
            <button onClick={() => setCount("purple")} className="bg-purple-500 text-white px-4 py-2 rounded">Purple</button>
            <button onClick={() => setCount("orange")} className="bg-orange-500 text-white px-4 py-2 rounded">Orange</button>
        </div>
        </div>
     </div>

  )
}

export default App
