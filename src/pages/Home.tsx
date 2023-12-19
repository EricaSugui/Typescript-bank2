import { useContext, useState } from "react"
import { Card } from "../components/Card"
import { Box, Center, Input } from "@chakra-ui/react"
import { Button } from "../components/Button/Button"
import { login } from "../services/login"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../components/AppContext"
import { changeLocalStorage } from "../services/storage"

export const Home = () => {
  const [email, setEmail] = useState<string>('')
  const { setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()
  const validateUser = async (email: string) => {
    const loggedIn = await login(email)

    if(!loggedIn) {
      alert('Email inválido')
      navigate('/')
    } else {

      setIsLoggedIn(true)
      changeLocalStorage({ login: true })
      navigate('/conta/1')
    }
  } 
  
    return(
            <Card>
              <Box bg={"#ffffff"} borderRadius={"25px"} padding={"15px"}>
                <Center>
                    <h1>Faça login</h1>
                </Center>
                <Input placeholder="email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
                <Input placeholder="password" type='password'/>
                <Button title='Entrar' onClick={()=>validateUser(email)}/>
              </Box>
            </Card> 
            
    )
}