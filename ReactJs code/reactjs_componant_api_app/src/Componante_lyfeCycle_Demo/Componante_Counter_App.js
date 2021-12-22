import React from 'react';
import Content from './Componante_content';
class Counter extends React.Component 
{
    constructor(props) 
    {
    super(props);
    this.state = {
    data: 0
    }
    this.setNewNumber = this.setNewNumber.bind(this)
    };
    
setNewNumber() 
{
this.setState({data: this.state.data + 1})
}
    render()
     {
        const disp_count=
        <div>
        <button onClick = {this.setNewNumber}>INCREMENT</button>
        <Content myNumber = {this.state.data}></Content>
        </div>
        return disp_count;
     }
}
export default Counter;