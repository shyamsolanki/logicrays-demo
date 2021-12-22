import React from 'react';
import ReactDOM from 'react-dom';
import BookInfo from './Props demo/Props Books';
//import BooksData from './Props demo/props single';
//import BooksDetails from './ClssComponante _Statefull Changing State/ClassComponante Changing State';
//import BooksDetails from './ClassComponate_StateFullDemo/ClassComponante_Statefull Books';
//import RootComponent from './App';
//import CenterCompo from './Classcomponante_Demo/Center Componante';
//import DemoClassCompo from './Classcomponante_Demo/Classcomponante_stateless Demo';
//import FooteCompo from './Classcomponante_Demo/Footer Componante';
//import HeaderCompo from './Classcomponante_Demo/Header Componante';
//import { PrintingMessage } from './Function Componant Demo/Functionalcomponante';


/*
ReactDOM.render(<PrintingMessage/>,document.getElementById("root_functioncomponentdemo"));
*/
/*
ReactDOM.render(< DemoClassCompo/>,document.getElementById("root_classcomponent_statelessdemo"));
*/
/*
ReactDOM.render(<HeaderCompo/>,document.getElementById("root_classcomponentheader_statelessdemo"));
ReactDOM.render(<FooteCompo/>,document.getElementById("root_classcomponentfooer_statelessdemo"));
ReactDOM.render(<CenterCompo/>,document.getElementById("root_classcomponentcenter_statelessdemo"));
ReactDOM.render(<RootComponent/>,document.getElementById("root Combiningcomponante"));

ReactDOM.render(<BooksDetails/>,document.getElementById('rootstatefullBooks'));

//ReactDOM.render(<BooksDetails/>,document.getElementById('rootstatefullChangename'));

//Props demo in stateless class component
const ele=<BooksData bookName="Science"/>
ReactDOM.render(ele,document.getElementById('root_propsdemo'));
*/
//Multipal Props demo
ReactDOM.render(<BookInfo/>,document.getElementById("root_mutipalprops"));
