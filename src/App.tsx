import React from 'react';
import {ThemeProvider} from 'styled-components'
import Layout from './Components/Layout';
import GlobalStyles from './Styles/GlobalStyles';
import dark from './Styles/Themes/Dark'
import light from './Styles/Themes/Light'

const App: React.FC = () => {
    return(

            <ThemeProvider theme={dark}>      
                <GlobalStyles/>
                <Layout/>
            </ThemeProvider>

    )
}
export default App;