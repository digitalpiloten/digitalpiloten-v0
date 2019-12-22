import React from 'react';

import { Footer, Content } from 'react-bulma-components';

import { Link } from "react-router-dom";

//import { LinkContainer } from 'react-router-bootstrap'

class Navigation extends React.Component {
    render() {
        return (
            <Footer>
                <Content>
                    <center>
                        <p>
                            Copyright &copy; 2019 DigitalPiloten e. V. Alle Rechte vorbehalten.
                        </p>
                        <br />
                        <p>
                            <Link to="/impressum">
                                Impressum
                            </Link>
                            &nbsp;|&nbsp;
                            <Link to="/datenschutzerklaerung">
                                Datenschutzerklärung
                            </Link>
                        </p>
                    </center>
                </Content>
            </Footer>
        )
    }
}

export default Navigation;