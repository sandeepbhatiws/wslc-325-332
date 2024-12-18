import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';

export default function Register() {

    const register = (e) => {
        e.preventDefault();

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            localStorage.setItem('firebaseUser',JSON.stringify(user));
            toast.success('Register Successfully !!');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
            // ..
        });


        e.target.reset();
    }
    return (
        <>
            <form onSubmit={register} autoComplete='off' className="flex max-w-md p-8 m-auto flex-col gap-4">
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

                <Button type="button">Login with Google</Button>
            </form>
        </>
    )
}
