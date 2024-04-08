import './index.sass';
import AuthPage from '../Auth/AuthPage'
import { useEffect, useState } from 'react';
export default function Home() {

  const [jwtToken, setJwtToken] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    setJwtToken(token);
  }, [])

  useEffect(() => {
    localStorage.setItem('jwtToken', jwtToken);
  }, [jwtToken])

  return (<>
    {
      jwtToken ? <div>lox</div> : <AuthPage setJwtToken={token => setJwtToken(token)} />
    }
  </>)

}
