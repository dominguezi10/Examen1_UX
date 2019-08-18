import React, { Component } from 'react';
import '../App.css';

class Perfil extends Component {
    constructor(){//recibo propiedades
        super()
    }

    render(){
        return(
            <div class="card Perfil">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        );
    }

}

export default Perfil;