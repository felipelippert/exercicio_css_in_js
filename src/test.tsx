import styled from 'styled-components'
type ButtonProps = {
  main: boolean
  fontSize?: string
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.main ? 'green' : 'red')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const DangerButton = styled(Button)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Test() {
  return (
    <>
      <Button main>Send</Button>
      <Button fontSize="14px" main={false}>
        Cancel
      </Button>
      <DangerButton as="a" main>
        <span>Do not Click here</span>
      </DangerButton>
    </>
  )
}

export default Test
