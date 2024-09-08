import { Box, Button, Text, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Main = () => {
    const [user, setUser] = useState('');
    useEffect(() => {
        const pengguna = JSON.parse(localStorage.getItem('pengguna'));
        if (pengguna) {
            setUser(pengguna);
        } else {
            setUser({
                email: "Kosong",
                name: "kosong",
                password : "Kosong"
            })
        }
    }, [])
    return (
        <Box borderWidth={2} p={3} rounded={5} width={400} mx={'auto'}>
          <Text textAlign="center" fontWeight="bold" fontSize="xx-large">
                Selamat Datang, {user.name}
            </Text>
             <Flex justify="center" mb={6}>
          <Link to="/login">
            <Button colorScheme="teal" mr={4}>Logout</Button>
          </Link>
        
        </Flex>
        </Box>
    )
}
export default Main;