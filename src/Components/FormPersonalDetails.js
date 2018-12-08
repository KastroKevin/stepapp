import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Appbar from 'material-ui/AppBar';

export class FormPersonalDetails extends  Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const {values, handleChange} = this.props;
           return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Appbar title="Informacion Personal Del Usuario"/>
                    <TextField
                        hintText="Ingresar Tu Ciudad"
                        floatingLabelText="Ciudad"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br/>
                    <TextField
                        hintText="Ingresar Tu Ocupacion"
                        floatingLabelText="Ocupacion"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <br/>
                    <TextField
                        hintText="Ingresa tu biografia"
                        floatingLabelText="biografia"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                    />
                    <br/>
                    <RaisedButton
                        label="Continuar"
                        primary={true}
                        style={style.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Regresar"
                        primary={true}
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
export default  FormPersonalDetails