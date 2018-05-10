                   
import React from 'react';
import { Container, Footer } from 'mdbreact';

class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="blue" className="font-small pt-4 mt-4 fixed-bottom">
                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: Recruitlete
                    </Container>
                </div>
            </Footer>
        );
    }
}
      
export default FooterPage;