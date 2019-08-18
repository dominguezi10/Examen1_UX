import React, { Component } from 'react';
import '../App.css';

class Perfil extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div class="card Perfil">
                <div class="card-header">
                <img src={this.props.userImage} width="60"  class="imagenPerfil"/>
                <br/>{this.props.userName} 
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{this.props.userEmail}</li>
                </ul>
            </div>
        );
    }

}

export default Perfil;