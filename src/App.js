import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Box, Button, Flex, Heading, Toast } from '@chakra-ui/react';
import 'react-toastify/dist/ReactToastify.css'; // Import stylesheet Toastify
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';
function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const usr = JSON.parse(localStorage.getItem('users'));
    if (usr) {
      setUser(usr);
      console.log(usr);
    } else {
      console.log("Nothing Users")
    }
  }, [])
  return (
    <Router>
      <Box p={4}>
        <Flex justify="center" mb={6}>
          <Heading as="h1" size="lg">Welcome to Simple Auth With Chakra UI</Heading>
        </Flex>
        
        <Flex justify="center" mb={6}>
          <Link to="/login">
            <Button colorScheme="teal" mr={4}>Login</Button>
          </Link>
          <Link to="/register">
            <Button colorScheme="blue">Register</Button>
          </Link>
        </Flex>
      <Routes>
          <Route path="login" element={<Login user={user} setUser={setUser} />} />
          <Route path="register" element={<Register user={user} setUser={setUser} />} />
          <Route path='/main' element={<Main />} />
        </Routes>
      </Box>
      <ToastContainer />
    </Router>
  )
}

export default App;
