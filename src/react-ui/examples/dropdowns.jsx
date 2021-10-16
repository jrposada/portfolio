const { default: Dropdown } = require('react-ui/dropdown/dropdown')

function Dropwdowns() {
  const panel = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid black',
        }}
      >
        <div>Paco</div>
        <div>Juan</div>
        <div>Alberto</div>
        <div>AlbertoAlbertoAlbertoAlbertoAlberto</div>
      </div>
    )
  }
  return (
    <>
      <Dropdown panel={panel()} trigger="hover">
        Hover me!
      </Dropdown>
      <Dropdown panel={panel()} primary position="top">
        Top
      </Dropdown>
      <Dropdown panel={panel()} warn>
        Dropdown
      </Dropdown>

      <Dropdown panel={panel()} raised>
        Dropdown
      </Dropdown>
      <Dropdown panel={panel()} raised primary position="left">
        Left
      </Dropdown>
      <Dropdown panel={panel()} raised warn>
        Dropdown
      </Dropdown>

      <Dropdown panel={panel()} bordered>
        Dropdown
      </Dropdown>
      <Dropdown panel={panel()} bordered primary position="bottom">
        Bottom
      </Dropdown>
      <Dropdown panel={panel()} bordered warn>
        Dropdown
      </Dropdown>

      <Dropdown panel={panel()} dashed>
        Dropdown
      </Dropdown>
      <Dropdown panel={panel()} dashed primary position="right">
        Right
      </Dropdown>
      <Dropdown panel={panel()} dashed warn>
        Dropdown
      </Dropdown>
    </>
  )
}

export default Dropwdowns
