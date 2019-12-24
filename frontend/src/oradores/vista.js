import React from 'react';

class Vista extends React.Component {
  render() {
    return (
      <>
            <ul>{this.props.oradores.map((orador, index) => <li key={`orador-${index}`}>{orador}</li>)}</ul>
      </>
    );
  }
}


export default Vista;
