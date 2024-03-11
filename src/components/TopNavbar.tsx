import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from 'react-icons/fa'
import { GrMailOption } from 'react-icons/gr'
import { IoMdPin } from 'react-icons/io'

const TopNavbar = () => {
  return (
    <Wrapper>
      <div className="nav-header-container">
        <div className="nav-header section-center">
          <div className="nav-header-links">
            <div className="header-link">
              <Link
                aria-label="Contact us at the following email"
                to={'mailto:griddesignconsultancy@gmail.com'}
                className="contact-info"
              >
                <GrMailOption /> griddesignconsultancy@gmail.com
              </Link>
            </div>

            <div className="header-link">
              <Link
                aria-label="Call us at the provided phone number"
                to={'tel:+977-9849374440'}
                className="contact-info"
              >
                <FaPhoneAlt /> +977-9849374440
              </Link>
            </div>

            <div className="header-link">
              <Link
                aria-label="Visit us: Our location on Google Maps"
                target="_blank"
                to={'https://maps.app.goo.gl/zmfUgq1F2T93Cyzj8'}
                className="contact-info"
              >
                <IoMdPin />
                <span>Katahariya, Rautahat</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default TopNavbar

const Wrapper = styled.div`
  .contact-info {
    display: flex;
    align-items: center;
    column-gap: 0.25rem;
  }

  .nav-header-container {
    background-color: var(--secondary-100);
  }

  .nav-header {
    font-weight: 500;
    justify-content: space-between;
    padding: 0.25rem 0;

    .nav-header-links {
      display: flex;
      column-gap: 2rem;
      cursor: pointer;
      flex-wrap: wrap;
    }

    .header-link {
      display: inline-flex;
      align-items: center;
      column-gap: 0.5rem;
      font-weight: 400;

      a {
        color: var(--secondary-800);
      }

      &:hover {
        text-decoration: underline;
        color: var(--black);
      }
    }
  }
`
