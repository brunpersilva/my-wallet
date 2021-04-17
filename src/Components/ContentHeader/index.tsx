import react from 'react';
import {Container, TitleContainer, Controllers} from './styles';


interface IContentHeaderProps {
    title: string;
    lineColor: string;    
    children: React.ReactNode;

};

const ContentHeader: React.FC<IContentHeaderProps> = ({
    title, lineColor, children}) => {

        const options=[
            
        ]
    

    return(        
           <Container>
                <TitleContainer>                    
                   <h1>{title}</h1>
                </TitleContainer>
                <Controllers>   
                    {children}                    
                </Controllers>
           </Container>
        
    )
}

export default ContentHeader;