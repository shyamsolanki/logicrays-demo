import React from 'react';
import styled from 'styled-components';

class CssStyledComponentDemo2 extends React.Component {
  render() {
    const backdefault = {
      backgroundImage: 'url("../../imeges/backimge.jpg")',
    };

    const Div = styled.div`
      margin: 20px;
      border: 5px dashed green;
      &:hover {
        background-image: ${(props) => props.hoverImage};
      }
    `;

    const Title = styled.h1`
      font-family: Arial;
      font-size: 35px;
      text-align: center;
      color: palevioletred;
    `;

    const Paragraph = styled.p`
      font-size: 25px;
      text-align: center;
      background-color: lightgreen;
    `;

    return (
      <div>
        <Title>Styled Components Example</Title>
        <p>
          Logicrays technology is providing 100% job placement ,we have designed
          our training program as per market requirement and standard which
          makes your placement a very easy and smooth process. The ultimate goal
          of Logicrays technology is to make you able to get your desired job in
          IT field being an IT student and not to divert at any other field. We
          have a large set of IT companies we tied-up with.we help you to get
          the best suitable job according to your capabilities and potential.
        </p>
        <Div
          style={backdefault}
          hoverImage='url("../../imeges/bacjimge2.jpg") !important'
        >
          <Paragraph>Hello Logicraiys Acadamy Ahmedabad!!</Paragraph>
        </Div>
      </div>
    );
  }
}
export default CssStyledComponentDemo2;
