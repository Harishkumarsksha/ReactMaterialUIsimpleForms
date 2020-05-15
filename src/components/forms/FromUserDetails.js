import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export class FromUserDetails extends Component {
    Continue = (event) => {
        event.preventDefault()
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='User Details' />
                    <TextField
                        hintText='Enter your  First Name '
                        floatingLabelText='First Name'
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    /> <br />
                    <TextField
                        hintText='Enter your Last Name  '
                        floatingLabelText='Last Name'
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    /> <br />
                    <TextField
                        hintText='Enter your Email'
                        floatingLabelText='Eamil'
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    /> <br />
                    <RaisedButton
                        label='Continue'
                        primary={true}
                        style={styles.button}
                        onClick={this.Continue}

                    />
                    <RaisedButton
                        label='Back'
                        primary={false}
                        style={styles.button}
                        onClick={this.back}

                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


const styles = {
    button: {
        margin: 15
    }
}

export default FromUserDetails
