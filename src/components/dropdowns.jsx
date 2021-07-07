const { default: Dropdown } = require('react-ui/dropdown')

function Dropwdowns() {
  const panel = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>Paco</div>
        <div>Juan</div>
        <div>Alberto</div>
        <div>Alberto</div>
      </div>
    )
  }
  return (
    <>
      <Dropdown panel={panel()}>Dropdown</Dropdown>
      <Dropdown panel={panel()} primary>
        Dropdown
      </Dropdown>
      <Dropdown panel={panel()} warn>
        Dropdown
      </Dropdown>

      <Dropdown panel={panel()} raised>
        Dropdown
      </Dropdown>
      <Dropdown panel={panel()} raised primary>
        Dropdown
      </Dropdown>
      <Dropdown panel={panel()} raised warn>
        Dropdown
      </Dropdown>

      <Dropdown panel={panel()} bordered>
        Dropdown
      </Dropdown>
      <Dropdown panel={panel()} bordered primary>
        Dropdown
      </Dropdown>
      <Dropdown panel={panel()} bordered warn>
        Dropdown
      </Dropdown>

      <Dropdown panel={panel()} dashed>
        Dropdown
      </Dropdown>
      <Dropdown panel={panel()} dashed primary>
        Dropdown
      </Dropdown>
      <Dropdown panel={panel()} dashed warn>
        Dropdown
      </Dropdown>
    </>
  )
}

export default Dropwdowns
