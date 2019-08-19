import React, { Component } from 'react';
import firebase from 'firebase';
//import logo from './logo.svg';
import './App.css';
import Perfil from './components/Perfil';
import Categorias from './components/Categorias';

class App extends Component {
  constructor() {
    super();
    /*user*/
    this.state = {
      user: null
    };

    this.InicioSesion = this.InicioSesion.bind(this);
    this.Salir = this.Salir.bind(this);
    this.Estado = this.Estado.bind(this);
  }

  /*ciclo de vida del user, esto es propio de react*/
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  /* para iniciar sesion*/
  InicioSesion() {
    const val = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(val)
      .then(result => console.log(`${result.user.email} inicio Sesion!`))
      .catch(error => console.log(`Error!! ${error.code}: ${error.message}`));
    //alert("Bienvenido ");
  }

  /* cerrar sesion*/
  Salir() {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} cerro sesion`))
      .catch(error => console.log(``));
  }

  /*evaluar si esta logueado 
  
  <Perfil user={this.state.user}/>*/
  Estado() {
    if (this.state.user) {
      return (
        <div className="Usuario">
          <Perfil userName={this.state.user.displayName} userEmail={this.state.user.email}
            userImage={this.state.user.photoURL} />
          <button onClick={this.Salir} type="button" class="btn btn-danger btnOf">Salir</button>
          <Categorias  userName={this.state.user.displayName} userEmail={this.state.user.email}/>

        </div>
      );
    } else {
      return (<button onClick={this.InicioSesion} type="button" class="btn btn-warning btnLog"> Login </button>);
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>ST-ore {this.Estado()}</p>
        </header>

      </div>
    );
  }
}

export default App;

