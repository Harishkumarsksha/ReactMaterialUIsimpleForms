import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';

export class Success extends Component {

    Continue = (event) => {
        event.preventDefault()
        this.props.nextStep();
    }

    back = (event) => {
        event.preventDefault()
        this.props.prevStep();
    }
    render() {
        const { values, handleChange } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Success' />
                    <h1>Thank your for your submission </h1>
                    <p>You will get the Eamil for the further Process</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}



export default Success
