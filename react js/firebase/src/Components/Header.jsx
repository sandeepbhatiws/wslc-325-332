import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

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
                    <NavbarLink href="#" active>
                        Home
                    </NavbarLink>
                    <NavbarLink href="#">About</NavbarLink>
                    <NavbarLink href="#">Services</NavbarLink>
                    <NavbarLink href="#">Pricing</NavbarLink>
                    <NavbarLink href="#">Contact</NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </>
    )
}
