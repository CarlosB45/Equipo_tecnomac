import React, {Component} from 'react';
import '../style/Styles.css';
import {button} from 'reactstrap';
import {Link} from 'react-router-dom';

function Home (){

    return (
   
        <div className = "Home">
            <div className="sidebar">
                <div className="sidebar-brand">
                    <h2><span className="Inventario"></span> <span>Administración de inventarios</span></h2>
                </div>

                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <Link to="./Home" className="active"><img src="../img/icon/home_black_24dp.svg"/><span className="home"></span>
                            <span>Inicio</span></Link>
                        </li>
                        <li>
                            <Link to=""><span className="product"></span>
                            <span>Productos</span></Link>
                        </li>
                        <li>
                            <Link to=""><span className="salesman"></span>
                            <span>Comerciales</span></Link>
                        </li>
                        <li>
                            <Link to=""><span className="stock"></span>
                            <span>Ventas</span></Link>
                        </li>
                        <li>
                            <Link to="./Vizualizacion"><img src="../img/icon/add_circle_outline_white_24dp.svg" /><span className="home"></span>
                            <span>Gestión de usuarios</span></Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className = "main-content">
                <header>
                    <div>
                        <img src="../img/logo.png" width="60px" height="60px"/>
                    </div>

                    <div className="name-company">
                        <h2><span>Tecnosoluciones</span></h2>
                    </div>

                    <div className="user-wrapper">
                        <img src="../img/icon/user.png" width="40px" height="40px" alt=""/>
                        <p><h4>Administrador</h4>
                        <small>Super Admin</small></p>
                    </div>
                </header>

            <main>

                <div class="cards-c">

                    <div class="card-productos">
                        <div> 
                            <h1>250</h1>
                            <span>Número de productos vendidos</span>
                        </div>
                        <div>
                            <span class="products"></span>
                        </div>
                    </div>

                    <div class="card-ventas">
                        <div>
                           <h1>1.400 Millones</h1>
                           <span>Total Ventas</span>
                        </div>
                    </div>

                    <div class="card-single">
                        <div>
                           <h1>1.300.000</h1>
                           <span>Numero de ventas</span>
                        </div>
                    </div>
                </div>
                <hr />

                <div class="recent-grid">
                    <div class="projects">
                        <div class="card">
                            <div class="card-header">
                                <h3>Ranking de Comerciales</h3>
                                <button>Mostrar todo <span class="las la-arrow-right">
                                </span></button>
                            </div>

                            <div class="card-body">
                                <div class="table">
                                    <table width="100%">
                                    <thead>
                                            <tr>
                                               <td>Nombre del comercial</td>
                                               <td>Total Ventas</td>
                                               <td>Ciudad</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Jhon Deiby Salazar</td>
                                                <td>
                                                   $500.000.000
                                                </td>
                                                <td>
                                                    Bogotá
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Victor Manuel Ciro Ledesma</td>
                                                <td>
                                                 $478.000.000
                                                </td>
                                                <td>
                                                 Bogotá
                                                </td>

                                            </tr>

                                            <tr>
                                                <td>Julian Andres Quesada</td>
                                                <td>
                                                 $430.000.000
                                                </td>
                                                <td>
                                                 Cartagena
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Andres Hernandez Camargo</td>
                                                <td>
                                                 $400.000.000
                                                </td>
                                                <td>
                                                 Bogotá
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Manuel Garzón Sanchez</td>
                                                <td>
                                                 $370.000.000
                                                </td>
                                                <td>
                                                 Medellín
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Julieta Milena Quesada</td>
                                                <td>
                                                 $346.000.000
                                                </td>
                                                <td>
                                                 Medellín
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Marlen Salazar Orozco</td>
                                                <td>
                                                 $310.000.000
                                                </td>
                                                <td>
                                                 Cali
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Katherine Gil Ortiz</td>
                                                <td>
                                                 $290.000.000
                                                </td>
                                                <td>
                                                 Bogotá
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Barbara Ortiz Bermudez</td>
                                                <td>
                                                 $278.000.000
                                                </td>
                                                <td>
                                                 Bucaramanga
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Julian Andres Salazar Rayo</td>
                                                <td>
                                                 $264.000.000
                                                </td>
                                                <td>
                                                 Bogotá
                                                </td>
                                            </tr>
                                        </tbody>                                    
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="productos">
                        <div class="card">
                            <div class="card-header">
                               <h4>Productos más vendidos</h4>
                            </div>
                        </div>

                        <div class="card-body">
                            <div class="customer">
                                <div class="info">
                                    <img src="./img/Productos/1.jfif" width="40px" height="40px" alt=""></img>
                                    <div>
                                        <h4>TV SAMSUNG 65" UHD QLED</h4>
                                        <small>6500 Unidades</small>
                                    </div>
                                </div>
                            </div>
                            <div class="customer">
                                <div class="info">
                                    <img src="./img/Productos/2.jfif" width="40px " height="40px " alt=" "/>
                                    <div>
                                        <h4>TV LG 65" LED UK</h4>
                                        <small>6350 Unidades</small>
                                    </div>
                                </div>
                            </div>

                            <div class="customer ">
                                <div class="info ">
                                    <img src="./img/Productos/3.jfif " width="40px " height="40px " alt=" "/>
                                    <div>
                                        <h4>Televisor Samsung 58" LED 4K </h4>
                                        <small>6100 Unidades</small>
                                    </div>
                                </div>
                            </div>

                            <div class="customer ">
                                <div class="info ">
                                    <img src="./img/Productos/4.jfif" width="40px " height="40px " alt=" "/>
                                    <div>
                                        <h4>Portátil Gamer Asus Tuf Gaming"</h4>
                                        <small>5900 Unidades</small>
                                    </div>
                                </div>
                            </div>

                            <div class="customer ">
                                <div class="info ">
                                    <img src="./img/Productos/5.jfif" width="40px " height="40px " alt=" "/>
                                    <div>
                                        <h4>MacBook Air 13,3"</h4>
                                        <small>5300 Unidades</small>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>                
                </div>
            </main>
        </div>

    </div>




    );

}

export default Home;
