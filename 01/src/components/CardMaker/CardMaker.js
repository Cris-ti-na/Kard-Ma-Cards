import React from 'react';
import Form from './Form';
import Preview from './Preview';
import Footer from '../Footer';
import Header from '../Header';

class CardMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palette: '', //antes colorSelected
      name: '',
      job: '',
      photo: '',
      email: '',
      phone: '', //antes telephone
      linkedin: '', //antes linkedIn
      github: '', //antes gitHubZ
    };
  }
  render() {
    console.log('funciona');
    return (
      <div>
        <Header />
        {
          <main className="main__grid">
            <Preview />
            <Form />
          </main>
        }
        <Footer />
      </div>
    );
  }
}
export default CardMaker;
