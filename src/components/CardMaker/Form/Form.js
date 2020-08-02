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
          <Design
            userInfo={this.props.userInfo}
            getInformation={this.props.getInformation}
            handleCollapse={this.props.handleCollapse}
            activePanel={this.props.activePanel}
            id="collapse-1"
          />
          <Fill
            userInfo={this.props.userInfo}
            getInformation={this.props.getInformation}
            handleCollapse={this.props.handleCollapse}
            activePanel={this.props.activePanel}
            id="collapse-2"
            updateAvatar={this.props.updateAvatar}
            isAvatarDefault={this.props.isAvatarDefault}
            photo={this.props.userInfo.photo}
          />
          <Share
            handleCollapse={this.props.handleCollapse}
            activePanel={this.props.activePanel}
            id="collapse-3"
            formCompleted={this.props.formCompleted}
          />
        </form>
      </section>
    );
  }
}
export default Form;
