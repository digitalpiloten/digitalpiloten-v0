import React from 'react';

import {
    Link,
} from "react-router-dom"

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar } from 'react-bulma-components';


class Navigation extends React.Component {
    render() {
        return (
            <Navbar role="navigation" aria-label="main navigation">
                <Navbar.Brand>
                    <Navbar.Item href="/">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma logo" />
                    </Navbar.Item>
                </Navbar.Brand>
            </Navbar>
        )
    }
}

export default Navigation;