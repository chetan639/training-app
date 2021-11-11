import axios from 'axios';
import {useState} from 'react';
import store from './store';
import "./Login.css";
import { useHistory } from 'react-router-dom';

function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();

    const LoginPrompt=()=>{
        axios.post("/login",{username:username,password:password}).then((res)=>{
            store.dispatch({type:"loginSuccess"})
            history.push('/contact');
        }).catch((err)=>{
            store.dispatch({type:"loginFail"})
        })
    }
    return (
        <div className="login">
            <input type="username" placeholder="enter username" onChange={(e)=>{setUsername(e.target.value)}}/>
            <input type="password" placeholder="enter password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <button onClick={LoginPrompt}>Login</button>
        </div>
    )
}

export default Login;