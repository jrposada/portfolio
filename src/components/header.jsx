import Expander from 'ui/expander';
import SearchBar from 'ui/search-bar';
import Switch from 'ui/switch';
import Dropdown from 'ui/dropdown';
import Button from 'ui/button';

import './header.scss';

function Header() {
  return (
    <header className="header">
      <SearchBar />
      <Expander />
      <Button>Button</Button>
      <Switch />
      <Dropdown />
    </header>
  );
}

export default Header;
