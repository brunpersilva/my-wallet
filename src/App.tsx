import React from 'react';
import {ThemeProvider} from 'styled-components';
import Routes from './Routes'

import GlobalStyles from './Styles/GlobalStyles';
import dark from './Styles/Themes/Dark'

const App: React.FC = () => {
    return(
            <ThemeProvider theme={dark}>      
                <GlobalStyles/>
                <Routes/>
            </ThemeProvider>

    )
}
export default App;