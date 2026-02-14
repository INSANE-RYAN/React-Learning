import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { login, logout } from './store/authSlice';
import './App.css'

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(false);
    dispatch(logout());
  }, [])


  return ! loading ? (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='w-full max-w-4xl flex flex-col min-h-screen'>
        <Header />
        <main>
        {/* {<Outlet />} */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
