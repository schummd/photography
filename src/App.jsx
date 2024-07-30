import * as React from 'react';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Box } from '@mui/material';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Collections from './components/Collections';
// import PostsList from './components/PostsList';

// import Rent from './components/posts/Rent';
// import Malta from './components/posts/Malta';

// const theme = createTheme();

const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat'",
  }
});

theme.typography.p = {
  fontFamily: "'Montserrat'"
}

function App() {
  const [ activeLink, setActiveLink ] = React.useState('');

  return (
    <BrowserRouter>
      <Header activeLink={activeLink} setActiveLink={setActiveLink}/>
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          sx={{
            padding: '0px!important',
            maxWidth: '100%!important'
          }}
        >
          <Box>
            <Routes>
              <Route path='/' element={<Hero setActiveLink={setActiveLink}/>} />
              {/* <Route path='/blog' element={<PostsList setActiveLink={setActiveLink}/>} /> */}
              <Route path='/about' element={<About setActiveLink={setActiveLink}/>} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/collections' element={<Collections />} />
              {/* <Route path='/blog/rent' element={<Rent />}/>
              <Route path='/blog/malta' element={<Malta />}/> */}
            </Routes>
          </Box>
        </Container>
      </ThemeProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
