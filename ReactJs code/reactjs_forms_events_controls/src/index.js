import React from 'react';
import ReactDOM from 'react-dom';
import { MenuBlog } from './Reactjs_Key_Demo/Reactjs_Key';
//import UserDetails from './Handling_Multipal_Input_Demo/Handling_Multipal_input';
//import BooksDetails from './Handling_Multipal_input/Handling_Multipal_Input_ErrorMassgae';
//import UserDetails from './Handling_Multipal_Input_AddError_Message_Demo/Add_Error_Massage_Demo'import UserDetails from './Handling_Multipal_Input_Demo/Handling_Multipal_input';
//import BooksDetails from './Handling_Multipal_input/Handling_Multipal_Input_ErrorMassgae';
//import LogInLogOutApp from './Conditional_Rendering_login_ App/Login_Logout_App';
//import ConditionalRendringVotingSystem from './Reactjs_Conditionl_Rendering/Conditionl_Rendring_Votingsystem';
//import BooksonClick from './Reactjs Events Demo/EventDemo_onClickevent';
//import BooksDetails from './Reactjs Events Demo/EventsDemo_Book';
 
//ReactDOM.render(<BooksDetails/>,document.getElementById('roots_events'));
//ReactDOM.render(<BooksonClick/>,document.getElementById("product_form_event_onclick"))
//ReactDOM.render(<ConditionalRendringVotingSystem/>,document.getElementById("voting_form_event_onclick"))
//LoginLogout demo
//ReactDOM.render(<LogInLogOutApp/>,document.getElementById("root_conditional_rendering_login_app"))
//ReactDOM.render(<BooksDetails/>,document.getElementById("root_handling_multipal_input"))
//ReactDOM.render(<UserDetails/>,document.getElementById("root_handleing_multiple_inputs"))
//ReactDOM.render(<UserDetails/>,document.getElementById("root_add_error_message"))
/*
var range;
range=parseInt(prompt("Chose number"));
var numbers = [1, 2, 3, 4, 5];
const multiplyNums = numbers.map((number)=>{
return (number * range);
});
console.log(multiplyNums);

const myList = ['Maths', 'History', 'Hindi', 'Gujrati', 'science'];
const listItems = myList.map((myList)=>{
return <li>{myList}</li>;
});
const displist=
<ol>{listItems}</ol>

ReactDOM.render(displist,document.getElementById("root_reactjslist_demo1"));

const ListItem = ({ value, onClick }) => (
    <li onClick={onClick}>{value}</li>
  );
  
  const List = ({ items, onItemClick }) => (
    <ol>
      {
        items.map((item, i) => <ListItem key={i} value={item} onClick={onItemClick} />)
      }
    </ol>
  );
  
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: '',
        fruites: ['Apple', 'Banana', 'Orange']
      };
    }
  
    onClick = () => {
      const { inputValue, fruites } = this.state;
      if (inputValue) {
        const nextState = [...fruites, inputValue];
        this.setState({ fruites: nextState, inputValue: '' });
      }
    }
  
    onChange = (e) => this.setState({ inputValue: e.target.value });
  
    handleItemClick = (e) => {console.log(e.target.innerHTML)}
  
    render() {
      const { fruites, inputValue } = this.state;
      return (
        <div>
          <input type="text" value={inputValue} onChange={this.onChange} />
          <button onClick={this.onClick}>Add</button>
          <List items={fruites} onItemClick={this.handleItemClick} />
        </div>
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById("root"));
  */

//Key Demo
const data=
[
  {empid: 1, empname: 'Dhaval', designation: 'web designer'},
  {empid: 2, empname: 'shyam', designation: 'React js Devloper'},
  {empid: 3, empname: 'Abhishek', designation: 'Frontend Devloper'},
]
ReactDOM.render(<MenuBlog empdata={data}/>, document.getElementById("root_reactjskey_list"));
