import { Center, Button as ChakraButton } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface IButton {
    title: string
    onClick: MouseEventHandler
}
export const Button = ({ title, onClick }: IButton) => {
    
    return (
        <Center>
            <ChakraButton 
                colorScheme="teal" 
                size={"sm"} 
                width={"100%"} 
                marginTop={"5px"} 
                onClick={onClick} 
            >
                {title}
            </ChakraButton>
        </Center>
    )
}

