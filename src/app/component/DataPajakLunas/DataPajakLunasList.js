import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Constant from '../../constant/Constant';
import DataPajakLunasDetail from './DataPajakLunasDetail';

export default function DataPajakLunasList(props) {
    const [value, setValue] = React.useState(1);

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
                        <Tab label="Belum Lunas" />
                        <Tab label="Lunas" style={{backgroundColor:Constant.primaryColor, color:'white'}}/>
                    </Tabs>
                </AppBar>
                {/* {value === 0 && <DataPajakBlList 
                no_spt="Nomor SPT" 
                tgl_sptpd="Tanggal SPTPD"
                masa_pajak="Masa Pajak"
                dp="Dasar Pengenaan" 
                tf="Tarif (%)"
                pajak="Pajak (Rp)"
                biaya="Biaya Admin"
                tgl_bayar="Tanggal Bayar"
                kode_bayar="Kode Bayar"
                sama_dengan=":" />} */}
                {value === 1 && <DataPajakLunasDetail
                no_spt="Nomor SPT" 
                tgl_sptpd="Tanggal SPTPD"
                masa_pajak="Masa Pajak"
                dp="Dasar Pengenaan" 
                tf="Tarif (%)"
                pajak="Pajak (Rp)"
                biaya="Biaya Admin"
                tgl_bayar="Tanggal Bayar"
                kode_bayar="Kode Bayar"
                sama_dengan=":" />} 
            </div>
            
        </Fragment>
    );
}