import React from 'react';
import '../stylesheets/layout/_main.scss';

class Main extends React.Component {
  render() {
    return (
      <main className="container">
        <div className="container__logoBox"></div>
        <h1 className="container__title">Crea tu tarjeta de visita</h1>
        <p className="container__subtitle">
          <span> Crea mejores contactos profesionales de</span>
          <span>forma fácil y cómoda</span>
        </p>
        <div className="container__articlesBox">
          <article className="step1">
            <i className="far fa-object-ungroup"></i>
            <p className="articleTitle">1.diseña</p>
          </article>
          <article className="step2">
            <i className="far fa-keyboard"></i>
            <p className="articleTitle">2.rellena</p>
          </article>
          <article className="step3">
            <i className="fas fa-share-alt"></i>
            <p className="articleTitle">3.comparte</p>
          </article>
        </div>
        <a
          className="container__btn"
          href="./profilecards.html"
          title="go to profile card maker"
        >
          comenzar
        </a>
      </main>
    );
  }
}
export default Main;
