import React from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar } from 'react-bulma-components';

import { Link } from "react-router-dom";

import logo from './digitalpiloten.jpg';

class Navigation extends React.Component {
    render() {
        return (
            <Navbar role="navigation" aria-label="main navigation">
                <Navbar.Brand>
                    <LinkContainer to="/">
                        <Navbar.Item>
                            <img src={logo} width="50" height="50" alt="Logo der DigitalPiloten e. V." />
                        </Navbar.Item>
                    </LinkContainer>
                    <Navbar.Burger aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Navbar.Burger>
                </Navbar.Brand>
                <Navbar.Menu id="navbarBasicExample">
                    <div className="navbar-start">
                        <Link to="/">
                            <Navbar.Item>
                                Home
                            </Navbar.Item>
                        </Link>
                        <Link to="/about">
                            <Navbar.Item>
                                Über uns
                            </Navbar.Item>
                        </Link>
                        <Link to="/kurse">
                            <Navbar.Item>
                                Kurse
                            </Navbar.Item>
                        </Link>
                    </div>
                </Navbar.Menu>
            </Navbar>
        )
    }
}

export default Navigation;