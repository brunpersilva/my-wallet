import React, {useMemo} from 'react';
import emojis from '../../Utils/emojis'
import{Container, Profile, Welcome, UserName} from './style'
import Toggle from '../Toggle'

const MainHeader: React.FC = () =>{
    const emoji = useMemo(()=> {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    }, []);

    return(
        <Container>
            
        <Toggle/>

        <Profile>
            <Welcome>Olá, {emoji}</Welcome>
            <UserName>Bruno Silva</UserName>
        </Profile>
        </Container>
    );
}

export default MainHeader;