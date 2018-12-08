import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Appbar from 'material-ui/AppBar';

export class Confirm extends  Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const {values: { firstName, lastName, email, occupation, city, bio}} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Appbar title="Confirmar Datos Del Usuario"/>
                    <List>
                        <ListItem
                            primaryText="Nombre"
                            secondaryText={firstName}
                        />
                        <ListItem
                            primaryText="Apellido"
                            secondaryText={lastName}
                        />
                        <ListItem
                            primaryText="Correo"
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText="Ocupacion"
                            secondaryText={occupation}
                        />
                        <ListItem
                            primaryText="Ciudad"
                            secondaryText={city}
                        />
                        <ListItem
                            primaryText="Biografia"
                            secondaryText={bio}
                        />
                    </List>
                    <RaisedButton
                        label="Continuar"
                        primary={true}
                        style={style.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Regresar"
                        primary={false}
                        style={style.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const style = {
    button: {
        margin: 15
    }
};
export default  Confirm