import { Link } from 'react-router-dom'
import { HiChevronDoubleRight } from 'react-icons/hi'
import styled from 'styled-components'

interface Props {
  services?: boolean
  visas?: boolean
  endPoint?: string
}

const Breadcrumbs = ({ endPoint, services, visas }: Props) => {
  return (
    <Wrapper>
      <div className="breadcrumb-container">
        <Link to="/">Home</Link>
        {(services || visas) && <HiChevronDoubleRight />}
        {services && (
          <Link to="/services" aria-label="Explore our services">
            Services
          </Link>
        )}

        {visas && (
          <Link to="/visas" aria-label="Explore the visa types of Australia">
            Visas
          </Link>
        )}

        {endPoint && <HiChevronDoubleRight />}
        {endPoint && <span className="text-truncate">{endPoint}</span>}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .breadcrumb-container {
    font-weight: 500;
    font-size: 1.2rem;
    text-transform: capitalize;

    display: flex;
    align-items: center;
    column-gap: 0.5rem;

    a {
      color: var(--white);
    }
  }
`

export default Breadcrumbs
