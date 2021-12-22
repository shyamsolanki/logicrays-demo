/*

function demoOfVarKeyword()
{
  for(let i=0;i<5;i++)
  {
    console.log(i);
  }
  console.log(i);
}

function demoOfConstKeyword()
{
 const x=10;
 x=12;

} 

/*Calling function of demoOfVarKeyword() 
demoOfVarKeyword();*/

//Calling function of demoOfConstKeyword()
//demoOfConstKeyword();

import React from 'react';
import ReactDOM from 'react-dom';

var myStyle = {
  ontSize: 80,
  fontFamily: 'Courier',
  color: '#003300',
};

const element_css = (
  <div>
    <h1 style={myStyle}>This example is of CSS in reactjs</h1>
  </div>
);

ReactDOM.render(element_css, document.getElementById('root_jsxstyling_demo'));
