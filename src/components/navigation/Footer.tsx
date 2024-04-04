import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from '../utilities/Logo'
import { footerLinks, socialLinks } from '../../utils/LinksConstants'
import { COMPANY_INFO } from '../../utils/constant'

const Footer = () => {
  return (
    <Wrapper className="section" id="footer">
      <div className="section-center footers-center">
        <div className="container-1 sub-section">
          <Logo />
          <p>
            Welcome to a future crafted with precision and purpose. At Grid
            Design, we're not just builders; we're partners in visionary
            construction. Through our three pillars—Design Excellence,
            Sustainable Solutions, and Innovation Hub—we reshape landscapes with
            cutting-edge technologies and purpose-driven design. The future is
            bold, and together, we build it.
          </p>
          <div className="social-icons">
            {socialLinks.map((socialLink, index) => {
              return (
                <a key={index} href={socialLink.url} className="social-icon">
                  {socialLink.icon}
                </a>
              )
            })}
          </div>
        </div>
        {/* single sub-section */}
        <div className="container-2 sub-section">
          <h5>browse</h5>
          <ul>
            {footerLinks.map((footerLink, index) => {
              return (
                <li key={index}>
                  <Link to={footerLink.url} className="footer-link">
                    {footerLink.text}{' '}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* single sub-section */}
        <div className="container-5 sub-section">
          <h5>contact</h5>
          <ul style={{ display: 'grid' }}>
            <li> +977 - {COMPANY_INFO.contact.join(', ')} </li>
            <li className="text-truncate">{COMPANY_INFO.email}</li>
            <li>{COMPANY_INFO.address}</li>
            <li>
              <Link to="/get-in-touch" className="footer-link">
                details
              </Link>
            </li>
          </ul>
        </div>
        {/* end of single sub-section */}
      </div>
      <div className="footer-text">
        <div>
          Copyright &copy; 2023{' '}
          <span className="highlight">{COMPANY_INFO.name}</span> |{' '}
          <Link to="/privacy">Privacy</Link> | <Link to="/terms">Terms</Link> |{' '}
          <Link to="/copyright">Copyright</Link> | Powered by
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--grey-900);
  font-size: var(--small-text);
  padding-bottom: 2rem;

  .footers-center {
    display: grid;
    gap: 3rem 0;
  }

  .sub-section {
    margin: 0 1rem 0rem 0.5rem;

    h5 {
      font-size: 1rem;
      font-weight: 400;
      color: var(--grey-100);
      letter-spacing: 0;
      margin-bottom: 0;
    }
    li {
      padding: 0.5rem 0;
      color: var(--grey-400);
    }
  }
  a {
    color: var(--grey-400);
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      color: var(--primary-500);
    }
  }

  .container-1 {
    p {
      color: var(--grey-400);
      text-align: justify;
    }
    .social-icons {
      margin-top: 3rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0 1rem;
      align-items: center;
    }
    .social-icon {
      width: 2.5rem;
      height: 2.5rem;
      border: 1px solid var(--white);
      border-radius: 50%;
      transition: var(--transition);
      cursor: pointer;
      display: flex;
      color: var(--white);
      justify-content: center;
      align-items: center;

      &:hover {
        background: var(--primary-500);
        border-color: transparent;
      }
    }
  }

  .footer-text {
    text-align: center;
    color: var(--grey-400);
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 0;
    padding: 0 1rem;
    .highlight {
      color: var(--primary-500);
    }
  }
  .footer-link {
    text-transform: capitalize;
  }

  @media (min-width: 567px) {
    .footers-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .container-1 {
      grid-column: 1/3;
    }
  }
  @media (min-width: 992px) {
    .footers-center {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  .company-link {
    margin-top: 0.75rem;
  }
`

export default Footer
