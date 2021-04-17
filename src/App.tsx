import React from 'react';
import {ThemeProvider} from 'styled-components'
import Layout from './Components/Layout';
import Dashboard from './Pages/Dashboard';
import GlobalStyles from './Styles/GlobalStyles';
import dark from './Styles/Themes/Dark'
//import light from './Styles/Themes/Light'

const App: React.FC = () => {
    return(

            <ThemeProvider theme={dark}>      
                <GlobalStyles/>
                <Layout>
                    <Dashboard/>
                </Layout>
            </ThemeProvider>

    )
}
export default App;