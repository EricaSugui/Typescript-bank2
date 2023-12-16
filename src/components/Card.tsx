import { Box, Center, Input } from "@chakra-ui/react"
import { Button } from "./Button/Button"

interface ICard {
    id: number
    paragraph: string
    details: string
    buttonTitle: string
    alertMessage: string
}
export const Card = ({id, paragraph, details, buttonTitle, alertMessage}:ICard) => {
    console.log(id)
    return(
            
        <Box minHeight={'100vh'} bg={"#9413dc"} borderRadius={'md'} padding={"25px"}>
            <h1>Card{id}</h1>
            <p>{paragraph}</p>
            <p>{details}</p>
            <Box bg={"#ffffff"} borderRadius={"25px"} padding={"15px"}>
            <Center>
                <h1>Faça login</h1>
            </Center>
            <Input placeholder="email"/>
            <Input placeholder="password" type='password'/>
            <Button title={buttonTitle} alertMessage={alertMessage}/>
            </Box>
        </Box>
    )
}