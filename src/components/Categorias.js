import React, { Component } from 'react';
import '../App.css';
import HogarC from './HogarC'
import RopaC from './RopaC' 
import OtrosC from './OtrosC'

class Categorias extends Component {
    constructor() {
        super()

        this.state = {
            valor: 0
        };

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
    
    // setiar valor
    getResponse(valor){
        this.setState({valor});
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

            
            <div class="contenedor" id="cont" display='block'> 
            <HogarC num={this.state.valor} callback={this.getResponse.bind(this)}/>
            </div>
            
            <div class="contenedor other" id="cont2"> 
            <RopaC num={this.state.valor} callback={this.getResponse.bind(this)}/>
            </div>
            
            
            <div class="contenedor other" id="cont3"> 
            <OtrosC num={this.state.valor} callback={this.getResponse.bind(this)}/>
            </div>

            <ul class="list-group Valor">
            <li class="list-group-item"> $ {this.state.valor} <button type="button" class="btn btn-info btnAgregar">Comprar</button> </li>
            <li class="list-group-item"> Compras Anteroires</li>
            </ul>
            </div>



        );
    }

}

export default Categorias;