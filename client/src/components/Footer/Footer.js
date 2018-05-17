import React from 'react';
import { Container, Footer } from 'mdbreact';

const FooterPage = props => (
  <Footer color="gray" className="font-small fixed-bottom" style={{ paddingTop: 20}}>
    <div className="footer-copyright text-center">
      <Container fluid>
        &copy; {(new Date().getFullYear())} Copyright: Recruitlete
      </Container>
    </div>
  </Footer>
);
    
export default FooterPage;