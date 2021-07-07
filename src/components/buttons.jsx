const { default: Button } = require('react-ui/button')

function Buttons() {
  return (
    <>
      <Button>Text</Button>
      <Button primary>Text</Button>
      <Button warn>Text</Button>
      <Button disabled>Text</Button>

      <Button raised>Text</Button>
      <Button primary raised>
        Text
      </Button>
      <Button warn raised>
        Text
      </Button>
      <Button disabled raised>
        Text
      </Button>

      <Button bordered>Text</Button>
      <Button primary bordered>
        Text
      </Button>
      <Button warn bordered>
        Text
      </Button>
      <Button disabled bordered>
        Text
      </Button>

      <Button dashed>Text</Button>
      <Button primary dashed>
        Text
      </Button>
      <Button warn dashed>
        Text
      </Button>
      <Button disabled dashed>
        Text
      </Button>
    </>
  )
}

export default Buttons
