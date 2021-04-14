import useToken from '../Components/App/useToken';
import LoginPage from './LoginPage';
import SignInPage from './SignInPage'
import { Redirect } from 'react-router-dom';

export default function SignOutPage() {

    const { token, setToken, removeToken } = useToken();

    if(!token) {
        // return <Login setToken={setToken} />
        // return <LoginPage setToken={setToken} />
        return <Redirect push to="/login"/>  
    }else{
        // setToken(null);
        removeToken();
    }

    // return (<div></div>);
}