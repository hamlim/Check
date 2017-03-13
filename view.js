import React, {Component} from 'react';

class View extends Component {
  render() {
    if (this.props.visible) {
      return (
        <section>
          {this.props.children}
        </section>
      )
    } else {
      return null;
    }
  }
}

export default View;