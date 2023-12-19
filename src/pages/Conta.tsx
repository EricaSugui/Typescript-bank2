import { useContext, useEffect, useState } from "react"
import {useParams, useNavigate } from 'react-router-dom'
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { api } from "../api"
import CardInfo from "../components/CardInfo/CardInfo"
import { AppContext } from "../components/AppContext"

interface IUserData {
    id: string
    email: string
    password: string
    name: string
    balance: number
}

export const Conta = () => {
    const [userData, setUserData] = useState<null | IUserData>()

    useEffect(()=>{
        const getData = async () => {
            const data: any | IUserData = await api
            setUserData(data)
        }
        getData()
    })

    const actualData = new Date()
    const access = `${actualData.getDate()}/${actualData.getMonth()}/${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`
    const { id } = useParams()
    const navigate = useNavigate()
    const {isLoggedIn} = useContext(AppContext)
    if(userData && id !== userData.id){
        navigate('/')
    }
    !isLoggedIn && navigate('/')

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                { userData === undefined || userData === null ? 
                (<Center>
                    <Spinner size={'xl'} color='white'/>
                    <h1>Carregando informações...</h1>
                </Center>) : (
                    <>
                        <CardInfo mainContent={`Bem vinda ${userData?.name}`} content={access}/>
                        <CardInfo mainContent='Saldo: ' content={`R$ ${userData?.balance.toFixed(2)}`}/>  
                    </>
                )}
            
            </SimpleGrid>
            </Center>
    )
}