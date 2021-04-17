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

    const fruits = [
        {value: 'apple', label: 'red'},
        {value: 'pear', label: 'green'},
        {value: 'grape', label: 'purple'}
    ]

    return(
        <Container>
            <ContentHeader title="Dashboard" lineColor="#fff">
                <SelectInput options={names}></SelectInput>

            </ContentHeader>
        </Container>
    );
}

export default Dashboard;