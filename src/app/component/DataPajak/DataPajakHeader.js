import React from 'react';
import Typography from '@material-ui/core/Typography';
import Constant from '../../constant/Constant';

export default function DataPajakHeader(props) {

    return (
        <div>
            <div style={{ padding: 10 }}>
                <div style={{ padding: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                    <Typography style={{ fontSize: 16, color: Constant.textColor }}>Data pajak Restoran (4.1.1.02.01.00)</Typography>
                    <Typography style={{ fontSize: 16, color: Constant.textColor }}>PT. Cafe Ambonia (Cafe27)</Typography>
                    <Typography style={{ fontSize: 16, color: Constant.textColor }}>Pattimura Park, Kota Ambon</Typography>
                </div>
            </div>
        </div>
    );
}