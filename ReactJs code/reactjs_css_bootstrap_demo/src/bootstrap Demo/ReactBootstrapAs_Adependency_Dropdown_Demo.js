import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
function MyApp() {
  const disp_data = (
    <div className="App Container">
      <DropdownButton
        alignRight
        title="Dropdown right"
        id="dropdown-menu-align-right"
      >
        <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
        <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
        <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
      </DropdownButton>
    </div>
  );
  return disp_data;
}
export default MyApp;
