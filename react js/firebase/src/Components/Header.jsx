import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from 'react-router';

export default function Header() {
    return (
        <>
            <Navbar fluid rounded>
                <NavbarBrand href="https://flowbite-react.com">
                    <img src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg" className="mr-3" alt="Flowbite React Logo" />
                </NavbarBrand>
                <div className="flex md:order-2">
                    <Button>Login</Button>
                    <NavbarToggle />
                </div>
                <NavbarCollapse>
                    <Link to="/" active>
                        Home
                    </Link>
                    <Link to="/add-quiz">Add Quiz</Link>
                    <Link to="/view-quiz">View Quiz</Link>
                </NavbarCollapse>
            </Navbar>
        </>
    )
}
