import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

const PrivatePage = () => {
  return (
    <Box p={5} bg="gray.100" borderRadius="md" boxShadow="md">
      <Heading size="md">Área Privada</Heading>
      <Text mt={3}>Solo puedes ver esto si iniciaste sesión correctamente.</Text>
    </Box>
  )
}

export default PrivatePage
