import { Box } from "@chakra-ui/react"
import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"

export const Layout = ({children}: any) => {
    return(
        <Box  minHeight={'100vh'} bg={"#9413dc"} >
            <Header />
            {children}
            <Footer />
        </Box>
    )
}