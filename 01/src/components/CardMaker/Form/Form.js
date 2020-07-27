import React from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import '../../../stylesheets/layout/_form.scss';

class Form extends React.Component {
  render() {
    console.log('props que recibo en form', this.props); //Compruebo que recibe funcion del padre
    return (
      <section className="section__custom wrapper__custom">
        <form action="" className="miForm">
          <Design getInformation={this.props.getInformation} />
          <Fill getInformation={this.props.getInformation} />
          <Share />
        </form>
      </section>
    );
  }
}
export default Form;
