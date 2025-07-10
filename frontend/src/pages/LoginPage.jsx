import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Input, Button, Heading } from '@chakra-ui/react'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('auth', 'true')
      navigate('/private')
    } else {
      alert('Credenciales incorrectas')
    }
  }

  return (
    <Box maxW="sm" mx="auto" mt="8" p="6" borderWidth="1px" borderRadius="md">
      <Heading mb={4}>Iniciar Sesión</Heading>
      <Input
        placeholder="Usuario"
        mb={3}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        placeholder="Contraseña"
        type="password"
        mb={4}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button colorScheme="teal" width="100%" onClick={handleLogin}>
        Ingresar
      </Button>
    </Box>
  )
}

export default LoginPage
