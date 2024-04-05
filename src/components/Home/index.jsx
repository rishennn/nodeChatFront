import './index.sass';
import AuthPage from '../Auth/AuthPage'
import { useEffect, useState } from 'react';
export default function Home() {

  const [jwt, setJwt] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('jwtToken') || 'sdafsewr234r34r3rf';
    setJwt(token);
  }, [])

  return (<>
    {
      !jwt ? <div>lox</div> : <AuthPage />
    }
  </>)

}
