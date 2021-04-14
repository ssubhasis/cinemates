import useToken from '../Components/App/useToken';
import LoginPage from './LoginPage';
import { Redirect } from 'react-router-dom';

export default function SignInPage() {

    const { token, setToken } = useToken();

    if(!token) {
        // return <Login setToken={setToken} />
        return <LoginPage setToken={setToken} />
    }

    return (<Redirect push to="/"/>  );
}