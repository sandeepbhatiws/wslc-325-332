import React, { useContext, useEffect } from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from 'react-toastify';
import { context } from '../ContextAPI/Context';
import { useNavigate } from 'react-router';

export default function Login() {

    var {isLogin, setLogin} = useContext(context);

    const navigate = useNavigate();

    useEffect(() => {
        if(isLogin){
            navigate('/');
        }
    },[isLogin]);


    const login = (e) => {
        e.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            // console.log(user);
            localStorage.setItem('firebaseUser',JSON.stringify(user));
            toast.success('Login Successfully !!');
            setLogin(true);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
        });
        e.target.reset();
    }

    const socialLogin = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            localStorage.setItem('firebaseUser',JSON.stringify(user));
            toast.success('Login Successfully !!');
            setLogin(true);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            toast.error(errorMessage);
        });
    }

    return (
        <>
            <form onSubmit={login} autoComplete='off' className="flex max-w-md p-8 m-auto flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" name='email' type="email" placeholder="name@flowbite.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput id="password1" name='password' type="password" required />
                </div>
                <Button type="submit">Submit</Button>

                <Button type="button" onClick={ socialLogin }>Login with Google</Button>
            </form>
        </>
    )
}
