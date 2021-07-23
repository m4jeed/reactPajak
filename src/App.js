import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import HomeMain from './app/component/Home/HomeMain';
import PajakMain from './app/component/Pajak/PajakMain';
import PerpajakanMain from './app/component/Perpajakan/PerpajakanMain';
import LaporanExitMain from './app/component/LaporanExitPajak/LaporanExitMain';
import DataPajakMain from './app/component/DataPajak/DataPajakMain';
import DataPajakLunasMain from './app/component/DataPajakLunas/DataPajakLunasMain';
import SspdMain from './app/component/Sspd/SspdMain';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#66CCFF'
    }
  },  
})

function App() {
  return (
    
        <div>
          <MuiThemeProvider theme={theme}>
            <Router>
              <Switch>
                <Route path="/pajak" component={PajakMain} />
                <Route path="/perpajakan" component={PerpajakanMain} />
                <Route path="/hasil_pelaporan" component={LaporanExitMain} />
                <Route path="/list_data_pajak" component={DataPajakMain} />
                <Route path="/list_pajak_lunas" component={DataPajakLunasMain} />
                <Route path="/sspd_data" component={SspdMain} />
                <Route path="/" component={PajakMain} />
                {/* <Route path="/" component={HomeMain} /> */}
              </Switch>
            </Router>
          </MuiThemeProvider>
        </div>
  );
}

export default App;
