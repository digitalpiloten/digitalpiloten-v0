import React from 'react';

import {
    Link,
} from "react-router-dom"

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar } from 'react-bulma-components';

import logo from './digitalpiloten.jpg';

class Navigation extends React.Component {
    render() {
        return (
            <Navbar role="navigation" aria-label="main navigation">
                <Navbar.Brand>
                    <Navbar.Item href="/">
                        <img src={logo} width="50" height="50" alt="Logo der DigitalPiloten e. V." />
                    </Navbar.Item>
                </Navbar.Brand>
            </Navbar>
        )
    }
}

export default Navigation;