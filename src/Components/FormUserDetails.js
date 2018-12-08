import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Appbar from 'material-ui/AppBar';

export class FormUserDetails extends  Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Appbar title="Informacion Del Usuario"/>
                    <TextField
                        hintText="Ingresar Tu Primer Nombre"
                        floatingLabelText="Primer Nombre"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField
                        hintText="Ingresar Tu Apellido"
                        floatingLabelText="Apellido"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br/>
                    <TextField
                        hintText="Ingresar correo"
                        floatingLabelText="correo"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br/>
                    <RaisedButton
                        label="Continuar"
                        primary={true}
                        style={style.button}
                        onClick={this.continue}
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
export default  FormUserDetails