import React from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import '../../../stylesheets/layout/_form.scss';

class Form extends React.Component {
  render() {
    return (
      <section className="section__custom wrapper__custom">
        <form action="" className="miForm">
          <Design />
          <Fill />
          <Share />
        </form>
      </section>
    );
  }
}
export default Form;
