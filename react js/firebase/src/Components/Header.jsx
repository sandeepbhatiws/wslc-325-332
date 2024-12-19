import React, { useContext, useState } from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from 'react-router';
import { Avatar, Dropdown } from "flowbite-react";
import { context } from '../ContextAPI/Context';

export default function Header() {

    var {isLogin, setLogin} = useContext(context);

    const logout = () => {
        localStorage.removeItem('firebaseUser');
        setLogin(false);
    }

    return (
        <>
            <Navbar fluid rounded>
                <NavbarBrand href="https://flowbite-react.com">
                    <img src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg" className="mr-3" alt="Flowbite React Logo" />
                </NavbarBrand>

                {
                    (!isLogin)
                    ?
                        <div className="flex md:order-2">
                            <Link to="/login" className='me-3'>
                                <Button>Login</Button>
                            </Link>
                            <Link to="/register">
                                <Button>Register</Button>
                            </Link>
                            <NavbarToggle />
                        </div>
                    :
                        <div className="flex md:order-2">
                            <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                            }
                            >
                            <Dropdown.Header>
                                <span className="block text-sm">Bonnie Green</span>
                                <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                            </Dropdown.Header>
                            <Dropdown.Item>Dashboard</Dropdown.Item>
                            <Dropdown.Item>Settings</Dropdown.Item>
                            <Dropdown.Item>Earnings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
                            </Dropdown>
                            <Navbar.Toggle />
                        </div>
                }

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
