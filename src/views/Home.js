import React, {Component} from 'react';
import '../styles/Home.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
//import { Table,Button } from 'bootstrap';  
import axios from 'axios'; 

class Home extends Component{
    constructor()
    {
        super();
    }
render(){
        return (
            <div className="Home">
                <div className="Home-header-box">
                    <h2 className="Home-header-title">Bienvenido!!!</h2>
                </div>
                <div>
                    <table>
                        <thead className="btn-primary">
                            <tr>
                                <th>No. Recibo</th>
                                <th>Proveedor</th>
                                <th>Monto</th>                                
                            </tr>
                        </thead>
                    </table>
                </div>

            </div>


        );
    }
}

export default Home;