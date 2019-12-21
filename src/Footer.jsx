import React from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Footer, Content } from 'react-bulma-components';

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
                    </center>
                </Content>
            </Footer>
        )
    }
}

export default Navigation;