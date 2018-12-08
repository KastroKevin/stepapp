import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Appbar from 'material-ui/AppBar';

export class Success extends  Component {
    render() {
        const { values } = this.props;
        console.log(values);

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Appbar title="Completado"/>
                    <h2>Gracias Por Registrarte :)</h2>
                    <p>Recibira un correo de confirmacion</p>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
export default  Success