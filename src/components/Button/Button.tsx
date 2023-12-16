import { Center, Button as ChakraButton } from "@chakra-ui/react"

interface IButton {
    title: string
    alertMessage: string
}
export const Button = ({ title, alertMessage}: IButton) => {
    const buttonFunc = () => {
        alert(alertMessage)
    }
    return (
        <Center>
            <ChakraButton 
                colorScheme="teal" 
                size={"sm"} 
                width={"100%"} 
                marginTop={"5px"} 
                onClick={buttonFunc} 
            >
                {title}
            </ChakraButton>
        </Center>
    )
}

