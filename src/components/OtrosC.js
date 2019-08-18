import React, { Component } from 'react';
import '../App.css';

class OtrosC extends Component {
    constructor() {
        super()
    }

    calc(precio) {
        this.props.callback(this.props.num + precio);
    }

    render() {
        return (
            <div>
                <table class="table tableD">
                    <thead>
                        <tr>
                            <th scope="col">Juegos</th>
                            <th scope="col">Juguetes</th>
                            <th scope="col">Herramientas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> $550
                            <img src="https://juguettos.com/1369195-large_default/A0271102.jpg" width="80" />
                                <br /><button onClick={() => this.calc(550)}
                                    type="button" class="btn btn-primary btnAgregar">Agregar</button></td>
                            <td> $220
                            <img src="https://images-na.ssl-images-amazon.com/images/I/71D31c-jkdL._SX355_.jpg" width="80" />
                            <br /><button onClick={() => this.calc(220)}
                                    type="button" class="btn btn-primary btnAgregar">Agregar</button></td>
                            <td> $190
                            <img src="https://www.ikea.com/PIAimages/0711971_PE728599_S5.JPG?f=s" width="80" />
                                <br /><button onClick={() => this.calc(190)}
                                    type="button" class="btn btn-primary btnAgregar">Agregar</button></td>
                        </tr>
                        <tr>
                            <td> $620
                            <img src="https://www.yaesta.com/uploads/productos/28781.jpg?v08082019" width="80" />
                                <br /><button onClick={() => this.calc(620)}
                                    type="button" class="btn btn-primary btnAgregar">Agregar</button></td>
                            <td> $400
                            <img src="https://alijuguetes.es/10708-large_default/casita-pj-masks-de-fabrica-de-juguetes.jpg" width="80" />
                                <br /><button onClick={() => this.calc(400)}
                                    type="button" class="btn btn-primary btnAgregar">Agregar</button></td>
                            <td> $280
                            <img src="https://www.demaquinasyherramientas.com/wp-content/uploads/2016/06/Herramientas-de-Inoxidable.jpg" width="80" />
                                <br /><button onClick={() => this.calc(280)}
                                    type="button" class="btn btn-primary btnAgregar">Agregar</button></td>
                        </tr>
                        <tr>
                            <td> $590
                            <img src="https://cdn.kemik.gt/2015/07/81bd2knw2el._sl1500_.jpg" width="80" />
                                <br /><button onClick={() => this.calc(590)}
                                    type="button" class="btn btn-primary btnAgregar">Agregar</button></td>
                            <td> $370
                            <img src="https://olimpica.vteximg.com.br/arquivos/ids/177788-900-900/Fisher-Price--Perrito-Piano-Aprende-Conmigo.jpg?v=636782581860270000" width="80" />
                                <br /><button onClick={() => this.calc(370)}
                                    type="button" class="btn btn-primary btnAgregar">Agregar</button></td>
                            <td> $380
                            <img src="https://i90.psgsm.net/tb.com/p/856528/480/electrical-installation-works-set.jpg" width="80" />
                                <br /><button onClick={() => this.calc(280)}
                                    type="button" class="btn btn-primary btnAgregar">Agregar</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}

export default OtrosC;