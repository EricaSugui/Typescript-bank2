import { NavLink, useNavigate } from 'react-router-dom'
import './Header.css'
import { useContext } from 'react'
import { AppContext } from '../AppContext'
import { Button } from '../Button/Button'
import { changeLocalStorage } from '../../services/storage'

export const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()
    const logout =  () => {
        if (isLoggedIn) {
            alert('Tchau!')
            changeLocalStorage({login: false})
            setIsLoggedIn(false)
            navigate('/')
        }
    }
    return (
        <div className='header'>
            <div className="logo">
                <NavLink to={'/'}>
                    Dio Bank
                </NavLink>
            </div>
            {isLoggedIn && (
                <div className="button">
                    <Button
                    title='Sair'
                    onClick={logout}
                    /> 
                </div>
            )}
        </div>
    )
}