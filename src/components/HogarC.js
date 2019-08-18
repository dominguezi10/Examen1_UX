import React, { Component } from 'react';
import '../App.css';

class HogarC extends Component {
    constructor() {
        super()
    }

    calc(precio) {
        console.log("Ent");
        this.props.callback(this.props.num + precio);
    }

    render() {
        return (
            <div>
                <table class="table tableD">
                    <thead>
                        <tr>
                            <th scope="col">Muebles</th>
                            <th scope="col">Cocina</th>
                            <th scope="col">Exterior</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> $150
                            <img src="https://www.muemue.com/3899-big_default/sillon-nordico-poliester.jpg" width="80" />
                                <br /><button onClick={() => this.calc(150)}
                                    type="button" class="btn btn-info btnAgregar">Agregar</button></td>
                            <td> $340
                            <img src="https://li6.rightinthebox.com/images/285x285/201811/tbolpo1542424632198.jpg" width="80" /><br /><button onClick={() => this.calc(340)}
                                    type="button" class="btn btn-info btnAgregar">Agregar</button></td>
                            <td> $610
                            <img src="https://www.flyeralarm.com/images/upload/content/images/themenwelten/pointofsale/flyeralarm-themenweltpos-kategorie-aussenwerbung-283x240.jpg" width="80" />
                                <br /><button onClick={() => this.calc(610)}
                                    type="button" class="btn btn-info btnAgregar">Agregar</button></td>
                        </tr>
                        <tr>
                            <td> $100
                            <img src="https://st02.ventamueblesonline.es/14083-large_default/sillon-retro-vintage.jpg" width="80" />
                                <br /><button onClick={() => this.calc(100)}
                                    type="button" class="btn btn-info btnAgregar">Agregar</button></td>
                            <td> $210
                            <img src="https://i.linio.com/p/16897cb9659486eb1958b075c3937b5d-catalog.jpg" width="80" />
                                <br /><button onClick={() => this.calc(210)}
                                    type="button" class="btn btn-info btnAgregar">Agregar</button></td>
                            <td> $90
                            <img src="https://i.ebayimg.com/images/g/CN0AAOSwYHxWO2tR/s-l300.jpg" width="80" />
                                <br /><button onClick={() => this.calc(90)}
                                    type="button" class="btn btn-info btnAgregar">Agregar</button></td>
                        </tr>
                        <tr>
                            <td> $190
                            <img src="https://images-na.ssl-images-amazon.com/images/I/61iVjMSQTPL._SY355_.jpg" width="80" />
                                <br /><button onClick={() => this.calc(190)}
                                    type="button" class="btn btn-info btnAgregar">Agregar</button></td>
                            <td> $360
                            <img src="https://i.pinimg.com/originals/d6/91/d0/d691d070764dab8d7d55cc23464bd475.jpg" width="80" />
                                <br /><button onClick={() => this.calc(360)}
                                    type="button" class="btn btn-info btnAgregar">Agregar</button></td>
                            <td> $400
                            <img src="https://d15kx7sft32rtl.cloudfront.net/imagenes_articulosweb/192178580508550_PE635311_S5.JPG?v=10" width="80" />
                                <br /><button onClick={() => this.calc(400)}
                                    type="button" class="btn btn-info btnAgregar">Agregar</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}

export default HogarC;