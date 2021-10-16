import Buttons from 'components/buttons'
import Dropwdowns from 'components/dropdowns'
import Menu from 'react-ui/menu/menu'
import MenuItem from 'react-ui/menu/menu-item'

function MainBody() {
  return (
    <>
      <div>
        <Buttons />
      </div>
      <div>
        <Dropwdowns />
      </div>
      <div>
        <Menu>
          <MenuItem onClick={() => console.log('Paco')}>Paco</MenuItem>
          <MenuItem onClick={() => console.log('Juan')}>Juan</MenuItem>
          <MenuItem onClick={() => console.log('Alberto')}>Alberto</MenuItem>
        </Menu>

        {/* <Menu compact>
          <MenuItem onClick={() => console.log('Paco')}>Paco</MenuItem>
          <MenuItem onClick={() => console.log('Juan')}>Juan</MenuItem>
          <MenuItem onClick={() => console.log('Alberto')}>Alberto</MenuItem>
        </Menu>

        <Menu collapsed>
          <MenuItem onClick={() => console.log('Paco')}>Paco</MenuItem>
          <MenuItem onClick={() => console.log('Juan')}>Juan</MenuItem>
          <MenuItem onClick={() => console.log('Alberto')}>Alberto</MenuItem>
        </Menu> */}
      </div>
    </>
  )
}

export default MainBody
