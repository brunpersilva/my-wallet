import React from 'react';
import logoImg from '../../assets/logo.svg'
import{
    Container, 
    Header, 
    LogImg, 
    MenuContainer, 
    MenuItemLink,
    Title 
} from './style';

import {
    MdDashboard,
    MdArrowDownward, 
    MdArrowUpward,
    MdExitToApp
}from 'react-icons/md';

const Aside: React.FC = () =>{
    return(
        <Container>
            <Header>
                <LogImg src={logoImg} alt="My Wallet Logo" />
                <Title>My Wallet</Title>              
            </Header>

            <MenuContainer>
                <MenuItemLink href="#">
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdArrowUpward/>
                    Entrance
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdArrowDownward/>
                    Exits
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdExitToApp/>
                    Exit
                </MenuItemLink>

            </MenuContainer>          
        </Container>
    );
}

export default Aside;