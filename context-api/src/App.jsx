import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  return (
    <UserContextProvider>
      <div className="min-h-auto bg-gray-200 flex items-center justify-center border-gray-300 rounded-xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Login />
          <Profile />
        </div>
      </div>
    </UserContextProvider>
  )
}

export default App
