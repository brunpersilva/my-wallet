import React from 'react';
import ContentHeader from '../../Components/ContentHeader'
import {Container} from './styles';
import SelectInput from '../../Components/SelectInput';


const Dashboard: React.FC = () =>{
    const names = [
        {value: 'Bruno', label: 'Silva'},
        {value: 'Jude', label: 'truara'},
        {value: 'henrique', label: 'bian'}
    ]

    return(
        <Container>
            <ContentHeader title="Dashboard" lineColor="#28a54e">
                <SelectInput options={names} onChange ={() =>{}}></SelectInput>

            </ContentHeader>
        </Container>
    );
}

export default Dashboard;