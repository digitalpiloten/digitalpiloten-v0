import React from 'react';

import { Navbar } from 'react-bulma-components';

import { LinkContainer } from "react-router-bootstrap";

import logo from './digitalpiloten.jpg';

class Navigation extends React.Component {

    state = { active : false }

    handleClick = () => { 
        const { active } = this.state;
        this.setState({ active: !active }); 
    }

    render() {
        return (
            <Navbar role="navigation" aria-label="main navigation">
                <Navbar.Brand>
                    <LinkContainer to="/">
                        <Navbar.Item>
                            <img src={logo} width="50" height="50" alt="Logo der DigitalPiloten e. V." />
                        </Navbar.Item>
                    </LinkContainer>
                    <Navbar.Burger
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                        active={this.state.active}
                        onClick={this.handleClick}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Navbar.Burger>
                </Navbar.Brand>
                <Navbar.Menu id="navbarBasicExample">
                    <div className="navbar-start">
                        <LinkContainer to="/">
                            <Navbar.Item>
                                Home
                            </Navbar.Item>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Navbar.Item>
                                Über uns
                            </Navbar.Item>
                        </LinkContainer>
                        <LinkContainer to="/kurse">
                            <Navbar.Item>
                                Kurse
                            </Navbar.Item>
                        </LinkContainer>
                    </div>
                </Navbar.Menu>
            </Navbar>
        )
    }
}

export default Navigation;