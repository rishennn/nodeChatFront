import './index.sass';
import AuthPage from '../../components/Auth/AuthPage'
import MainPage from '../../components/MainPage'
import { useEffect, useState } from 'react';
import AuthorizationServices from '../../services/authorization.services';

export default function Home() {

  const [jwtToken, setJwtToken] = useState('');
  const [isJWTValid, setIsJWTValid] = useState(false)



  useEffect(() => {
    const token = localStorage.getItem('jwtToken');

    if (token) {
      AuthorizationServices
        .checkTokenValidation(token)
        .catch(() => {
          localStorage.removeItem('jwtToken');
          setIsJWTValid(false);
        });
    }
    setJwtToken(token);
  }, [])

  useEffect(() => {
    if (jwtToken) {
      localStorage.setItem('jwtToken', jwtToken);
      const name = AuthorizationServices.checkTokenValidation(jwtToken);
      if (name) {
        setIsJWTValid(true);
      } else {
        setIsJWTValid(false);
      }
    }
  }, [jwtToken])

  return (<>
    {
      isJWTValid ? <MainPage /> : <AuthPage setJwtToken={token => setJwtToken(token)} />
    }
  </>)

}
