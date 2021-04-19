import React from 'react';

import{Container} from './styles'

const Context: React.FC = ({children}) =>{
    return(
        <Container>
           {children}   
        </Container>        
    );
}

export default Context;