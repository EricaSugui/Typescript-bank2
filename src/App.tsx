import { ChakraProvider } from '@chakra-ui/react'
import { Layout } from "./components/Layout";
import { Card } from "./components/Card";
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0)
  
  console.log(value)
  return (
    <ChakraProvider>
      <Layout>
        <Card 
          id={1} 
          details="teste teste teste" 
          paragraph="teste"
          buttonTitle="Entrar"
          alertMessage='Seja muito bem-vindo!'
        />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
