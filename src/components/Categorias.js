import React, { Component } from 'react';
import '../App.css';

class Categorias extends Component {
    constructor() {//recibo propiedades
        super()

    this.Hogar = this.Hogar.bind(this);
    }

    Hogar(){
        document.getElementById('cont').style.display = 'block';
        document.getElementById('cont2').style.display = 'none';
        document.getElementById('cont3').style.display = 'none';
    }
    Ropa(){
        document.getElementById('cont2').style.display = 'block';
        document.getElementById('cont').style.display = 'none';
        document.getElementById('cont3').style.display = 'none';
    }
    Otro(){
        document.getElementById('cont3').style.display = 'block';
        document.getElementById('cont2').style.display = 'none';
        document.getElementById('cont').style.display = 'none';
    }
    

    render() {
        return (
            <div> 
                <div class="list-group categorias">
                <a onClick={this.Hogar} type="button" class="list-group-item list-group-item-action ">
                    <i class="fas fa-home"></i> Hogar </a>
                <a onClick={this.Ropa} type="button" class="list-group-item list-group-item-action">
                    <i class="fas fa-address-card"></i> Ropa </a>
                <a onClick={this.Otro} type="button" class="list-group-item list-group-item-action">
                    <i class="fas fa-shopping-cart"></i> Otros </a>
            </div>

            
            <div class="contenedor" id="cont" display='block'> jasjLK</div>
            
            <div class="contenedor other" id="cont2"> Hola</div>
            
            <div class="contenedor other" id="cont3"> Hola3</div>

            </div>
        );
    }

}

export default Categorias;