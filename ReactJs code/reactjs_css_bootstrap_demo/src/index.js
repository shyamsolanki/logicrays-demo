import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeSwitcherReactstrap from './bootstrap Demo/TheamSwitcher_ReactStrapDemo';
//import ButtonMyApp from './bootstrap Demo/ReactBootstrap_ButtionDemo';
//import FormsMyApp from './bootstrap Demo/ReactBootstrap_FormsDemo';
//import MyApp from './bootstrap Demo/ReactBootstrapAs_Adependency_Dropdown_Demo';
//import NavigationBarMyApp from './bootstrap Demo/React_Bootstrap_Nav';
//import External from './Css_Stysheet_External/myStyling';
//import CssModule from './Css_Module/CssModuledemo';
import './index.css';
//import CssStyledComponentDemo2 from './styledComponents-Demo/styledComonent2';
//import CssStyledComponentDemo from './styledComponents-Demo/styledComponent';
//import InlineCss from './Inline Styling/Inline Styling Example';

//ReactDOM.render(<InlineCss/>,document.getElementById('root_Inline_css'));
//ReactDOM.render(<CssModule/>,document.getElementById('root_Module_css'));
//ReactDOM.render(<External/>,document.getElementById('root_Stylesheet_External_css'));

/* ReactDOM.render(
  <CssStyledComponentDemo />,
  document.getElementById('root_Stylecomponante')
); 

ReactDOM.render(
  <CssStyledComponentDemo2 />,
  document.getElementById('root_Stylesheet_External2_css')
);
*/
//Bootstrap As a Dependency Dropdown demo
//ReactDOM.render(<MyApp />, document.getElementById('root_BottstrapDependency'));
/*
//Bootstrap Navbar demo
ReactDOM.render(
  <NavigationBarMyApp />,
  document.getElementById('root_BottstrapNavbar')
);
*/
/*
//Bootstrap Forms demo
ReactDOM.render(<FormsMyApp />, document.getElementById('root_BottstrapForms'));

//Bootstrap Buttion demo
ReactDOM.render(
  <ButtonMyApp />,
  document.getElementById('root_BootstrapButtion')
);*/
ReactDOM.render(
  <ThemeSwitcherReactstrap />,
  document.getElementById('root_RecatstrapThemeSwitcher')
);
