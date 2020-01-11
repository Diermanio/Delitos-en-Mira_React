import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="span4">
              <div class="widget">
                <img
                  id="comsapplogo"
                  class="roundedimage"
                  src="assets/img/logocomsf2.png"
                  alt="logo"
                  title="Comsapp"
                />
                <div class="clear"></div>
              </div>
            </div>
            <div class="span4">
              <div class="widget">
                <h5>Páginas de interés</h5>
                <ul class="regular">
                  <li>
                    <a href="AcercaDeNostros.html">Acerca de Nosotros</a>
                  </li>
                  <li>
                    <a href="Quehacemos.html">Que hacemos?</a>
                  </li>
                  <li>
                    <a href="Noticias.html">Noticias</a>
                  </li>
                  <li>
                    <a href="RealContactenos.html">Contactenos</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="span4">
              <div class="widget">
                <h5>Contactenos</h5>
                <address>
                  <i class="icon-home"></i> <strong>Comsapp, 2019</strong>
                  <br />
                  ESPOL Campus Gustavo Galindo
                </address>
                <p>
                  <i class="icon-phone"></i>+593 9542235
                  <br />
                  <i class="icon-envelope-alt"></i> comsapp@gmail.com
                </p>
              </div>
              <div class="widget">
                <ul class="social">
                  <li>
                    <a href="#" data-placement="bottom" title="Twitter">
                      <i class="icon-twitter icon-square icon-32"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-placement="bottom" title="Facebook">
                      <i class="icon-facebook icon-square icon-32"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-placement="bottom" title="Linkedin">
                      <i class="icon-linkedin icon-square icon-32"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-placement="bottom" title="Pinterest">
                      <i class="icon-pinterest icon-square icon-32"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-placement="bottom" title="Google plus">
                      <i class="icon-google-plus icon-square icon-32"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="verybottom">
          <div class="container">
            <div class="row">
              <div class="span6">
                <p>&copy; Lumia - All right reserved</p>
              </div>
              <div class="span6">
                <div class="pull-right">
                  <div class="credits">
                    Created by{" "}
                    <a href="https://bootstrapmade.com/">BootstrapMade</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
