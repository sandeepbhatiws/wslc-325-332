import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function Login() {
    return (
        <>
            <form className="flex max-w-md p-8 m-auto flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput id="password1" type="password" required />
                </div>
                <Button type="submit">Submit</Button>

                <Button type="button">Login with Google</Button>
            </form>
        </>
    )
}
