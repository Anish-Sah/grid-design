import { Link, useLocation } from 'react-router-dom'
import { styled } from 'styled-components'
import { links } from '../../utils/LinksConstants'

const NextButton = () => {
  const location = useLocation()

  const getNextPageLink = () => {
    const currentPageIndex = links.findIndex(
      (link) => link.url === location.pathname
    )

    const nextPageIndex = currentPageIndex + 1
    const nextPage = links[nextPageIndex] || links[0]
    return nextPage
  }

  return (
    <Wrapper>
      <div className="section section-center">
        <div className="next-button-container">
          <div className="next">Next</div>
          <Link to={getNextPageLink().url} className="page-title">
            {getNextPageLink().text}
            <div className="underline"></div>
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--grey-50);
  .next-button-container {
    text-align: center;
    padding: 4rem 0;

    .next {
      font-size: 1.5rem;
      font-weight: 300;
    }
    .page-title {
      cursor: pointer;
      text-transform: capitalize;
      font-size: 3rem;
      display: inline-block;
    }
  }

  //underline animation
  .underline {
    width: 0%;
    height: 2px;
    background-color: var(--black);
    transition: var(--transition);
  }

  .page-title {
    &:hover {
      .underline {
        width: 100%;
      }
    }
  }
`

export default NextButton
