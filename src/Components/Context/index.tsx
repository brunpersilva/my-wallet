import React from 'react';

import{Container} from './style'

const Context: React.FC = ({children}) =>{
    return(
        <Container>
           {children}   
        </Container>        
    );
}

export default Context;