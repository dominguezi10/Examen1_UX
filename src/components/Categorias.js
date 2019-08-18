import React, { Component } from 'react';
import '../App.css';

class Categorias extends Component {
    constructor() {//recibo propiedades
        super()
    }

    render() {
        return (
            <div class="list-group categorias">
                <a onClick="#" type="button" class="list-group-item list-group-item-action ">Hogar</a>
                <a onClick="#" type="button" class="list-group-item list-group-item-action">Ropa</a>
                <a onClick="#" type="button" class="list-group-item list-group-item-action">Otros</a>
            </div>
        );
    }

}

export default Categorias;