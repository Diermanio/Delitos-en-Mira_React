import React, { Component } from "react";

class News extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="subintro">
          <div class="container">
            <div class="row">
              <div class="span8">
                <ul class="breadcrumb">
                  <li>
                    <a href="#">
                      <i class="icon-home"></i>
                    </a>
                    <i class="icon-angle-right"></i>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <i class="icon-angle-right"></i>
                  </li>
                  <li class="active">Noticias</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="maincontent">
          <div class="container">
            <div class="row">
              <div class="span4">
                <aside>
                  <div class="widget">
                    <h4 class="rheading">
                      Categorias<span></span>
                    </h4>
                    <ul class="cat">
                      <li>
                        <a href="#">Actualizaciones (20)</a>
                      </li>
                      <li>
                        <a href="#">Anuncios (5)</a>
                      </li>
                    </ul>
                  </div>
                  <div class="widget">
                    <h4 class="rheading">
                      Noticias Recientes<span></span>
                    </h4>
                    <ul class="recent-posts">
                      <li>
                        <a href="#">Verificación de Correo Electronico</a>
                        <div class="clear"></div>
                        <span class="date">
                          <i class="icon-calendar"></i> 13 March, 2019
                        </span>
                        <span class="comment">
                          <i class="icon-comment"></i> 4 Comments
                        </span>
                      </li>
                      <li>
                        <a href="#">Nueva Variedad de Iconos</a>
                        <div class="clear"></div>
                        <span class="date">
                          <i class="icon-calendar"></i> 6 March, 2019
                        </span>
                        <span class="comment">
                          <i class="icon-comment"></i> 2 Comments
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div class="widget">
                    <h4 class="rheading">
                      Post tags<span></span>
                    </h4>
                    <ul class="tags">
                      <li>
                        <a href="#" class="btn">
                          Tutorial
                        </a>
                      </li>
                      <li>
                        <a href="#" class="btn">
                          Seguridad
                        </a>
                      </li>
                      <li>
                        <a href="#" class="btn">
                          Online
                        </a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
              <div class="span8">
                <article class="blog-post">
                  <div class="post-heading">
                    <h3>
                      <a href="#">Verificacion de correo electronico</a>
                    </h3>
                  </div>
                  <div class="row">
                    <div class="span8">
                      <div class="post-image">
                        <a href="#">
                          <img src="assets/img/dummies/blog1.jpg" alt="" />
                        </a>
                      </div>
                      <ul class="post-meta">
                        <li class="first">
                          <i class="icon-calendar"></i>
                          <span>Mar 13, 2013</span>
                        </li>
                        <li>
                          <i class="icon-comments"></i>
                          <span>
                            <a href="#">4 comments</a>
                          </span>
                        </li>
                        <li class="last">
                          <i class="icon-tags"></i>
                          <span>
                            <a href="#">Seguridad</a>
                          </span>
                        </li>
                      </ul>
                      <div class="clearfix"></div>
                      <p>
                        En la ultima actualizacion del sistema se introdujo la
                        opcion de verificacion de correo electronico para los
                        usuarios. Se alienta a los usuarios a realizarla debido
                        a la confiabilidad que le agrega a sus reportes.
                      </p>
                      <a href="#" class="btn btn-small btn-theme">
                        Leer más
                      </a>
                    </div>
                  </div>
                </article>

                <article class="blog-post">
                  <div class="post-heading">
                    <h3>
                      <a href="#">Nueva Variedad de Iconos</a>
                    </h3>
                  </div>
                  <div class="row">
                    <div class="span8">
                      <ul class="post-meta">
                        <li class="first">
                          <i class="icon-calendar"></i>
                          <span>Mar 6, 2013</span>
                        </li>
                        <li>
                          <i class="icon-comments"></i>
                          <span>
                            <a href="#">2 comments</a>
                          </span>
                        </li>
                        <li class="last">
                          <i class="icon-tags"></i>
                          <span>
                            <a href="#">Tutorial</a>
                          </span>
                        </li>
                      </ul>
                      <div class="post-quote">
                        <blockquote>
                          <p>
                            <i class="icon-quote-left"></i> De la variedad nace
                            la libertad <i class="icon-quote-right"></i>
                          </p>
                        </blockquote>
                      </div>

                      <a href="#" class="btn btn-small btn-theme">
                        Leer más
                      </a>
                    </div>
                  </div>
                </article>

                <div class="pagination">
                  <ul>
                    <li>
                      <a href="#">Prev</a>
                    </li>
                    <li class="active">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">Next</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default News;
