import React, {Component} from 'react'
import './resume.css'
import Graph from '../Graph/Graph'


class Resume extends Component{
   
    render() {

      return (
        <div>
            <div id="dialog" >
                
            <div className="dialog-content">
                <div>
                    <h1>Miriam García Guzmán</h1>
                </div>
                <h3>FullStack Web Developer</h3>
              <div>
                  <div className="resume-info">
                    <a href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=miriam.garcia.guzman.novy@gmail.com' className="info__content"><i className="fas fa-at"></i> miriam.garci.guzman.novy@gmail.com</a>
                    <a href="/" className="info__content"><i className="fas fa-mobile-alt"></i> +52 5512894295</a>
                    <br/>
                    <a href="https://www.google.com/maps/place/%C3%81lvaro+Obreg%C3%B3n,+CDMX/@19.318163,-99.3180715,12z/data=!3m1!4b1!4m5!3m4!1s0x85d2008a471412b3:0x38fb8ad19cad555b!8m2!3d19.3605334!4d-99.2267067" className="info__content"><i className="fas fa-map-marker-alt"></i> Álvaro Obregón, CDMX</a>
                    <a href="/"className="info__content"><i className="fas fa-female"></i> Edad: 31</a>
                    <br/>
                    <a href="https://github.com/MiriamGaGuMuk" className="info__content"><i className="fab fa-github"></i> /MiriamGaGuMuk</a>
                    <a href="https://gitlab.com/MiriamGaGu" className="info__content"><i className="fab fa-gitlab"></i> /MiriamGaGu</a>
                    <a href="https://www.linkedin.com/in/miriamgagu/" className="info__content"><i className="fab fa-linkedin-in"></i> /miriamgagu</a>
                    <br/>
                </div>
                <section className="experience">
                <div className="experience__title">
                    <h3>Experiencia</h3>
                </div>
                <h3>Muktek Academy Muktek Academy</h3>
                <p>Proyectos Full-Stack Web Developer</p>
                <p><i className="far fa-calendar-alt"></i> Noviembre 2018 - Febrero 2019</p>
                <p><i className="fas fa-map-marker-alt"></i>CDMX</p>
                <ul>
                  <li> HTML HTML/CSS/SASS</li>
                  <li> JavaScript Proyectos Vanilla JavaScript</li>
                  <li> React Proyectos ReactJS.</li>
                  <li> BackEnd Proyectos NodeJS, MongoDB, mongoose, express.</li>
                  <li> Proyecto Full-Stack ReactJS/NodeJs.</li>
                </ul>

                <br/>

                <h3>PuraScents</h3>
                <p>BackEnd Trainee Web Developer</p>
                <p><i className="far fa-calendar-alt"></i> Agosto 2018 - Noviembre 2019</p>
                <p><i className="fas fa-map-marker-alt"></i> OR, Utha </p>
                <ul>
                  <li> Resolviendo Issues de la API</li>
                  <li> Administrando base de datos en Firebase</li>
                </ul>
                <br/>
                <h3>Mrs. Fixer</h3>
                <p>Arreglo y mantenimieto de computadoras</p>
                <p><i className="far fa-calendar-alt"></i> Enero 2008 - Mayo 2018</p>
                <p><i className="fas fa-map-marker-alt"></i> Ciudad de Mexico </p>
                <ul>
                  <li> Mantenimiento de computadoras </li>
                  <li> Instalacion de software </li>
                </ul>

              </section>
            
                  <h3>Idiomas</h3>
                  {/* <input name="rate" type="radio" value="3"/> */}
                  <div className="rate">
                    <span className="rating">Inglés</span>
                    <span className="rating"><i class="far fa-check-circle"></i></span>
                    <span className="rating"><i class="far fa-check-circle"></i></span>
                    <span className="rating"><i class="far fa-check-circle"></i></span>
                    <span className="rating"><i class="far fa-check-circle"></i></span>
                    <span className="rating"><i class="far fa-check-circle"></i></span>
                    <br />
                    <span className="rating">Alemán</span>
                    <span className="rating"><i class="far fa-check-circle"></i></span>
                    <span className="rating"><i class="far fa-check-circle"></i></span>
                    <span className="rating"><i class="far fa-check-circle"></i></span>
                    <span className="rating"><i class="far fa-check-circle"></i></span>
                    <span className="rating"><i class="far fa-check-circle"></i></span>
                  </div>
              </div>

              <Canvas />
              
            </div>
        </div>
        </div>
      );
    }
}


export default Resume;