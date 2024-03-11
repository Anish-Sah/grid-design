import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/grid-logo.jpeg'

const Logo = () => {
  return (
    <Wrapper>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .logo-container {
    width: 5rem;
  }
`

export default Logo
