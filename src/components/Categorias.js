import React, { Component } from 'react';
import firebase from 'firebase';
import '../App.css';
import HogarC from './HogarC'
import RopaC from './RopaC' 
import OtrosC from './OtrosC'

class Categorias extends Component {
    constructor() {
        super()

        this.state = {
            valor: 0,
            compras : []
        };

        this.Hogar = this.Hogar.bind(this);
        this.HacerCompra = this.HacerCompra.bind(this);
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

    componentDidMount() {
        firebase.database().ref('Compras').on('value',snap=>{
            /*const compra = snap.val();
            if(compra != null){
                this.setState({
                    compras: compra
                });
            }*/
            this.setState({
                compras: this.state.compras.concat(snap.val())
            });
        });
    }


    HacerCompra(){
        console.log(this.props.userEmail);
        const compraUser = {
            totalCompra : this.state.valor,
            cliente : this.props.userName,
            correo : this.props.userEmail
        };

        const db = firebase.database().ref('Compras');
        const newCompra  = db.push();
        newCompra.set(compraUser);
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
            <li class="list-group-item"> $ {this.state.valor}  
            <button type="button" class="btn btn-info btnAgregar" onClick={this.HacerCompra}> Comprar</button> </li>
            <li class="list-group-item">
            <button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal">Compras Anteroires</button> </li>
            </ul>

            <div class="modal fade modalT" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Compras Anteroires</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                </div>
            </div>
            </div>
            

            </div>

        );
    }

}

export default Categorias;