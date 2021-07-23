import React, { Component, Fragment } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import '../../style/Styles.css';
import PajakList from './PajakList';
import PerpajakanMain from '../Perpajakan/PerpajakanMain';

export default class PajakMain extends Component {
    handlePage = (e) =>{
        window.location='/perpajakan';
    };

    render() {
        return (
            <Fragment>
                <div className="wrapper">
                    <PajakList handlePage={this.handlePage} />
                </div>
                <Router>
                    <Route path="/perpajakan" component={PerpajakanMain} />
                </Router>
            </Fragment>
        )
    }
}
