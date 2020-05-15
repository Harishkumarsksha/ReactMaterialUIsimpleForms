import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export class FromPersonalDetails extends Component {

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
                    <AppBar title='User Personal Details' />
                    <TextField
                        hintText='Enter Occupation '
                        floatingLabelText='Occupation'
                        onChange={handleChange('occupation')}
                        defaultValue={values.Occupation}
                    /> <br />
                    <TextField
                        hintText='Enter city'
                        floatingLabelText='city'
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    /> <br />
                    <TextField
                        hintText='Enter your Bio'
                        floatingLabelText='Bio'
                        onChange={handleChange('Bio')}
                        defaultValue={values.Bio}
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

export default FromPersonalDetails
