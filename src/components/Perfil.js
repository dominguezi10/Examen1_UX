import React, { Component } from 'react';
import '../App.css';

class Perfil extends Component {
    constructor(props){//recibo propiedades
        super(props)
    }

    render(){
        return(
            <div className="perfil">
                {this.props.user}
                <p> Este deberia ser el perfil!</p>
            </div>
        );
    }

}

export default Perfil;