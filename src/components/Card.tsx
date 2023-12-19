import { Box } from "@chakra-ui/react"

export const Card = ({children}:any) => {
    
   
    return(
        <Box borderRadius={'md'} padding={"25px"}>
            {children}
            
        </Box>
    )
}