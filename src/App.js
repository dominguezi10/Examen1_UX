import React, { Component } from 'react';
import firebase from 'firebase';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    /*user*/
    this.state = {
      user:null
    };

    this.InicioSesion = this.InicioSesion.bind(this);
    this.Salir = this.Salir.bind(this);
    this.Estado = this.Estado.bind(this);
  }

  /*ciclo de vida del user, esto es propio de react*/
  componentWillMount(){
    firebase.auth().onAuthStateChanged(user =>{
      this.setState({user});
    });
  }

  /* para iniciar sesion*/
  InicioSesion() {
    const val = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(val)
    .then(result => console.log('${result.user.email} inicio Sesion!'))
    .catch(error => console.log('Error!! ${error.code}: ${error.message}'));
  }

  /* cerrar sesion*/
  Salir(){
    firebase.auth().signOut()
    .then(result => console.log('${result.user.email} cerro sesion'))
    .catch(error => console.log('Error!! ${error.code}: ${error.message}'));
  }

  /*evaluar si esta logueado*/
  Estado(){
    if(this.state.user){
      return (
        <div>
          <p>Bienvenido {this.state.user.displayName} </p>
          <button onClick={this.Salir}>Salir</button> 
        </div>

      );
    }else{
      return (<button onClick={this.InicioSesion}> Login </button>);
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          </header>

          <p>Este es mi proyecto !!!!</p>
          <p> {this.Estado()} </p>
      </div>
    );
  }
}

export default App;

