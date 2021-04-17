import React from 'react';

import{Container} from './style'

import MainHeader from '../MainHeader'
import Aside from '../Aside'
import Content from '../Context'

const Layout: React.FC = ({children}) =>{
    return(
        <Container>
            <MainHeader/>
            <Aside/>
            <Content>
                {children}
            </Content>  
        </Container>
    );
}

export default Layout;