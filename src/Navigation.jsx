import React from 'react';

import {
    Link,
} from "react-router-dom"

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar } from 'react-bulma-components';

import { LinkContainer } from 'react-router-bootstrap'

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
                    <Navbar.Start>
                        <LinkContainer to="/about">
                            <Navbar.Item>
                                Über uns
                            </Navbar.Item>
                        </LinkContainer>
                    </Navbar.Start>
                </Navbar.Menu>
            </Navbar>
        )
    }
}

export default Navigation;