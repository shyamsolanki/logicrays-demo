import React from 'react';
import {
  ButtonDropdown,
  DropdownItem,
  DropdownToggle,
  Button,
  DropdownMenu,
} from 'reactstrap';

class ThemeSwitcherReactstrap extends React.Component {
  state = {
    theme: null,
    Dropdown: false,
  };
  toggleDropdown = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };
  resetTheme = (event) => {
    event.preventDefault();
    this.setState({ theme: null });
  };
  chooseTheme = (theme, event) => {
    event.preventDefault();
    this.setState({ theme });
  };

  render() {
    const { theme, dropdownOpen } = this.state;
    const themeClass = theme ? theme.toLowerCase() : 'secondary';

    return (
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        <span className={`h3 mb-4 w-100 text-center text-${themeClass}`}>
          {theme || 'Default'}
        </span>
        <ButtonDropdown isOpen={dropdownOpen} toggle={this.toggleDropdown}>
          <Button id="caret" color={themeClass}>
            {theme || 'Custom'} Theme
          </Button>
          <DropdownToggle caret size="lg" color={themeClass} text="Abcd" />
          <DropdownMenu>
            <DropdownItem onClick={(e) => this.chooseTheme('Primary', e)}>
              Primary Theme
            </DropdownItem>
            <DropdownItem onClick={(e) => this.chooseTheme('Danger', e)}>
              Danger Theme
            </DropdownItem>
            <DropdownItem onClick={(e) => this.chooseTheme('Success', e)}>
              Success Theme
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={this.resetTheme}>Default Theme</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    );
  }
}
export default ThemeSwitcherReactstrap;
