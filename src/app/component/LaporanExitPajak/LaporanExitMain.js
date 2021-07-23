import React, { Component, Fragment } from 'react'
import LaporanExitDetail from './LaporanExitDetail'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import PerpajakanMain from '../Perpajakan/PerpajakanMain';

export default class LaporanExitMain extends Component {

    handleBack() {
        window.location = '/perpajakan';
    };

    render() {
        
        return (
            <Fragment>
                <div className="wrapper">
                    <LaporanExitDetail handleBack={this.handleBack} />
                </div>
                <Router>
                    <Route path="/perpajakan" component={PerpajakanMain} />
                </Router>
            </Fragment>
        )
    }
}
