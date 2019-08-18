import React, { Component } from 'react';
import '../App.css';

class RopaC extends Component {
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
                            <th scope="col">Mujer</th>
                            <th scope="col">Hombre</th>
                            <th scope="col">Niño</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> $250
                            <img src="https://www.vestuarielx.com/2086-large_default/camisa-rosa-val-popelin-mujer.jpg" width="80" />
                                <br /><button onClick={() => this.calc(250)}
                                    type="button" class="btn btn-success btnAgregar">Agregar</button></td>
                            <td> $340
                            <img src="https://http2.mlstatic.com/pantalon-hombre-montagne-cargo-elio-gabardina-D_NQ_NP_931159-MLA26330639001_112017-F.jpg" width="80" /><br /><button onClick={() => this.calc(340)}
                                    type="button" class="btn btn-success btnAgregar">Agregar</button></td>
                            <td> $280
                            <img src="https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/29-03139-064-390-2.JPG?v=20190208100409" width="80" />
                                <br /><button onClick={() => this.calc(280)}
                                    type="button" class="btn btn-success btnAgregar">Agregar</button></td>
                        </tr>
                        <tr>
                            <td> $300
                            <img src="https://cdn2.salewa.com/media/image/16/9d/6f/c57bed26-4d73-4d2c-bad8-a81fbf2a64db_salewa_600x600.jpg" width="80" />
                                <br /><button onClick={() => this.calc(300)}
                                    type="button" class="btn btn-success btnAgregar">Agregar</button></td>
                            <td> $300
                            <img src="https://http2.mlstatic.com/camisa-camiseta-slim-fit-hombre-lines-promocion-D_NQ_NP_882633-MCO31002883771_062019-Q.jpg" width="80" />
                                <br /><button onClick={() => this.calc(300)}
                                    type="button" class="btn btn-success btnAgregar">Agregar</button></td>
                            <td> $450
                            <img src="https://http2.mlstatic.com/vestido-nina-fiesta-elegante-pajecita-bautizo-p-comunion-D_NQ_NP_963323-MCO31111128185_062019-Q.jpg" width="80" />
                                <br /><button onClick={() => this.calc(450)}
                                    type="button" class="btn btn-success btnAgregar">Agregar</button></td>
                        </tr>
                        <tr>
                            <td> $200
                            <img src="https://modaconlocura.com/294-large_default/pantalon-mujer-dril-vinotinto.jpg" width="80" />
                                <br /><button onClick={() => this.calc(200)}
                                    type="button" class="btn btn-success btnAgregar">Agregar</button></td>
                            <td> $390
                            <img src="https://d26gvt3wemusnl.cloudfront.net/pub/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/n/f/nf0a2una_254_1.jpg" width="80" />
                                <br /><button onClick={() => this.calc(390)}
                                    type="button" class="btn btn-success btnAgregar">Agregar</button></td>
                            <td> $250
                            <img src="https://www.canadahouseonline.com/es/85655-large_default/camiseta-lovely.jpg" width="80" />
                                <br /><button onClick={() => this.calc(250)}
                                    type="button" class="btn btn-success btnAgregar">Agregar</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}

export default RopaC;