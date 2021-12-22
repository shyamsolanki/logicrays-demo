import React from 'react';
class InlineCss extends React.Component {
  render() {
    const mystyle = {
      color: 'red',
      backgroundColor: 'lightBlue',
      padding: '10px',
      fontFamily: 'Arial',
    };

    return (
      <div style={mystyle}>
        <h1>Hello JavaTpoint</h1>
        <p>Here, you can find all CS tutorials.</p>
      </div>
    );
  }
}
export default InlineCss;
