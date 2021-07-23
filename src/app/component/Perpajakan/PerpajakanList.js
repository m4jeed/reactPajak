import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PerpajakanLaporForm from './PerpajakanLaporForm';
import PerpajakanDataForm from './PerpajakanDataForm';

export default function PerpajakanList(props) {
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <Fragment>
            <div >
                <AppBar position="static" style={{backgroundColor:'white'}}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth">
                        <Tab label="Lapor Pajak" />
                        <Tab label="Data Pajak" />
                    </Tabs>
                </AppBar>
                {value === 0 && <PerpajakanLaporForm />}
                {value === 1 && <PerpajakanDataForm/>} 
            </div>
            
        </Fragment>
    );
}