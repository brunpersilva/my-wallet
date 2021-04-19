import React, {useMemo, useState, useEffect} from 'react';
import ContentHeader from '../../Components/ContentHeader';
import SelectInput from '../../Components/SelectInput';
import HistoryFinanceCard from '../../Components/HistoryFinanceCard';
import { Container, Content, Filters } from './style';

import formatCurrency from '../../Utils/formatCurrency';
import formatDate from '../../Utils/formatDate';

import gains from '../../Repository/gains';
import expanses from '../../Repository/expanses';

interface IRouteParams{
    match: {
        params:{
            type: string;
        }
    }
}
interface IData{
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dataFormatted: string;
    tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) =>{

    const[monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const[yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));    
    const[data, setData]= useState<IData[]>([]);

    const{ type } = match.params;
    const title = useMemo(()=> {
       return type === 'entry-balance' ? 'Entrance' : 'Exit'
    },[type]);

    const lineColor = useMemo(()=> {
        return type === 'entry-balance' ? '#F7931B' : '#E44C4E'
     },[type]);

     const listData=useMemo(()=> {
         return type ==='entry-balance' ? gains : expanses;
     },[type]);

    const months = [
        {value: 1, label: 'January'},
        {value: 2, label: 'Febuary'},
        {value: 3, label: 'March'},
        {value: 4, label: 'April'},
        {value: 5, label: 'May'},
        {value: 6, label: 'June'},
        {value: 7, label: 'July'},
        {value: 8, label: 'August'},
        {value: 9, label: 'September'},
        {value: 10, label: 'October'},
        {value: 11, label: 'November'},
        {value: 12, label: 'December'},
    ]

    const years = [
        {value: 2019, label: 2019},
        {value: 2020, label: 2020},
        {value: 2021, label: 2021}
    ]

    useEffect(() => {
      const filteredDate =  listData.filter(item => {
          const date = new Date(item.date);
          const month = String(date.getMonth() + 1);
          const year = String(date.getFullYear());

          return month === monthSelected && year === yearSelected;
        });
          
          const formattedDate = filteredDate.map(
            item =>{
                return{
                    id: String('_' + Math.random().toString(36).substr(2, 9)),
                    description: item.description,
                    amountFormatted: formatCurrency(Number(item.amount)),
                    frequency: item.frequency,
                    dataFormatted: formatDate(item.date),
                    tagColor: item.frequency === 'recorrente' ? '#4E41f0' : '#E44C43'
                }
        })

        setData(formattedDate);

    },[listData, monthSelected, yearSelected, data.length]);

    return(
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
                <SelectInput options={months} onChange={(e)=> setMonthSelected(e.target.value)} defaultValue={monthSelected}/>
                <SelectInput options={years} onChange={(e)=> setYearSelected(e.target.value)} defaultValue={yearSelected}/>
            </ContentHeader>

            <Filters>
                <button type="button"
                className="tag-filter tag-filter-recurrent">
                    Recurring
                </button>

                <button type="button"
                className="tag-filter tag-filter-eventual">
                    Eventual
                </button>
            </Filters>


            <Content>
                {
                    data.map(item => (
                        <HistoryFinanceCard 
                        key={item.id}
                        tagColor={item.tagColor}
                        title={item.description}
                        subtitle={item.dataFormatted}
                        amount={item.amountFormatted}
                        />
                    ))
                
                }                 
            </Content>
            
        </Container>
    );
}

export default List;