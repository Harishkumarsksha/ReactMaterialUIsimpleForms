import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton';
export class Confirm extends Component {
    Continue = (event) => {
        event.preventDefault()
        this.props.nextStep();
    }
    back = (event) => {
        event.preventDefault()
        this.props.prevStep();
    }
    render() {
        const { values: { firstName, lastName, email, occupation, city, bio }, handleChange } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Confirm' />

                    <List>
                        <ListItem
                            primaryText='First Name'
                            secondaryText={firstName} />
                        <ListItem
                            primaryText='Last Name'
                            secondaryText={lastName} />
                        <ListItem
                            primaryText='Email'
                            secondaryText={firstName} />
                        <ListItem
                            primaryText='Occupation'
                            secondaryText={occupation} />
                        <ListItem
                            primaryText='City'
                            secondaryText={city} />
                        <ListItem
                            primaryText='Bio '
                            secondaryText={bio} />
                    </List>
                    <RaisedButton
                        label=' Confirm & Continue'
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

export default Confirm
