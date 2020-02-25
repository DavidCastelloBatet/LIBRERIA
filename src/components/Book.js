import React from "react";

class Book extends React.Component {
  render() {
    return (
      <div className="lista">
        {this.props.filteredBooks.map(llibre => {
          return (
            <div key={llibre.titulo}>
              <li>
                <div id="flipLlibre" className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src={llibre.portada}
                        width="250"
                        height="330"
                        alt="portada"
                      />
                    </div>
                    <div className="flip-card-back">
                      <h2 className="title">{llibre.titulo}</h2>
                      <p className="idioma">
                        {llibre.idioma === "es"
                          ? "Idioma :  Español"
                          : "Language :  English"}
                      </p>
                      <p className="detalle">{llibre.descripcion}</p>
                      <button className="cssMoreInfo">
                        <a href="#" data-fancybox data-src={llibre.detalle}>
                          More Info...
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Book;
