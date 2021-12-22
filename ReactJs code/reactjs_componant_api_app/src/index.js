import React from 'react';
import ReactDOM from 'react-dom';
import RootComponante from './App';
//import FindDOMNodeexample from './Componante_Api_Demos/FindDOMNode_api_Demo';
//import ForceUpdateExample from './Componante_Api_Demos/ForceUpdate';
//Force Update
//ReactDOM.render(<ForceUpdateExample/>,document.getElementById("Root_ForceUpdate_Methode"))
//FindDOMNodeExample
//ReactDOM.render(<FindDOMNodeexample/>,document.getElementById("Root_FindDOMNode_Methode"))

//Counter app
ReactDOM.render(<RootComponante/>, document.getElementById('Counter_app'));
setTimeout(() => {
ReactDOM.unmountComponentAtNode(document.getElementById('Counter_app'));}, 10000);