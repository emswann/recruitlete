import React from 'react';
import { Container, Footer } from 'mdbreact';

const FooterPage = props => (
  <Footer color="blue" className="font-small pt-4 mt-4 fixed-bottom" style={{backgroundColor: "#ffffff", paddingTop: 20}}>
    <div className="footer-copyright text-center">
      <Container fluid>
        &copy; {(new Date().getFullYear())} Copyright: Recruitlete
      </Container>
    </div>
  </Footer>
);
    
export default FooterPage;