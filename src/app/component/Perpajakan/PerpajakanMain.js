import React, { Component, Fragment } from 'react';
import PerpajakanHeader from './PerpajakanHeader';
import PerpajakanList from './PerpajakanList';

export default class PerpajakanMain extends Component {
    render() {
        return (
            <Fragment>
                <div className="wrapper">
                    <PerpajakanHeader/>
                    <PerpajakanList />
                </div>
            </Fragment>
            
            
        )
    }
}
