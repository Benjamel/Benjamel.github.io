import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <Navbar bg='dark' variant='dark' fixed='bottom'>
      <Container>
        <Navbar.Text className='mx-auto d-block'>&copy; Benjamin Meldal's Portfolio</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Footer;
