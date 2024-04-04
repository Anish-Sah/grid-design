import styled from 'styled-components'

import { FaBars } from 'react-icons/fa'
import Logo from './utilities/Logo'
import { links } from '../utils/constants'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import { useState } from 'react'
import { BiMinus } from 'react-icons/bi'
import TopNavbar from './TopNavbar'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <Wrapper>
        <nav className="main-container">
          <TopNavbar />
          <div className="nav-bar-container">
            <div className="section-center">
              <div className="nav-center">
                <Logo />

                <div>
                  <div className="nav-links">
                    {links.map((link) => {
                      const { text, url, id, subLinks } = link
                      return (
                        <div
                          key={id}
                          className={`link-container ${
                            subLinks ? 'has-sub-links' : ''
                          }`}
                        >
                          <Link to={url} className="link">
                            {subLinks && subLinks.length > 0 ? (
                              <div className="expandable-link">
                                {text}

                                <div className="plus-minus-container">
                                  <BiMinus />
                                  <BiMinus className="rotatable-minus" />
                                </div>
                              </div>
                            ) : (
                              text
                            )}
                            <div className="underline"></div>
                          </Link>
                          {subLinks && subLinks.length > 0 && (
                            <div className="sub-links-container">
                              {subLinks.map((subLink, index) => {
                                return (
                                  <Link
                                    to={subLink.url}
                                    key={index}
                                    className="sub-link"
                                  >
                                    {subLink.text}
                                    <div className="underline"></div>
                                  </Link>
                                )
                              })}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>

                  <div className="toggle-btn-container">
                    <button
                      type="button"
                      className="btn nav-toggle-btn"
                      onClick={() => setIsSidebarOpen(true)}
                    >
                      <FaBars />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </Wrapper>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  )
}

const Wrapper = styled.nav`
  /* margin-bottom: 6rem; */
  .main-container {
    position: sticky;
    top: 0;
    left: 0;
    z-index: var(--navbar-z-index);
    width: 100%;
  }
  .nav-bar-container {
    height: 4rem;
    background: var(--white);
    box-shadow: var(--shadow-2);

    display: flex;
    align-items: center;
  }

  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .toggle-btn-container {
    padding-right: 0.5rem;
  }

  .nav-toggle-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    font-size: 1.75rem;
    box-shadow: none;
    display: flex;
  }

  .nav-links {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-toggle-btn {
      display: none;
    }

    .nav-links {
      display: flex;
      column-gap: 1rem;
      align-items: center;

      .link {
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--letterSpacing);
        padding: 0 0.25rem;
        display: block;
        cursor: pointer;
        color: var(--primary-900);
      }
      .active-link {
        color: var(--primary-500);
      }
    }
  }

  //sub links styling
  .link-container {
    position: relative;

    .sub-links-container {
      position: absolute;
      left: 0;
      top: 100%;
      width: 12rem;
      background: var(--grey-100);
      border-radius: var(--borderRadius);
      box-shadow: var(--shadow-2);
      padding: 0.5rem 1rem;

      display: none;

      .sub-link {
        display: inline-block;
        font-size: 0.85rem;
        color: var(--primary-900);
        text-transform: capitalize;
        padding: 0.35rem 0;
      }
    }
  }

  .has-sub-links {
    &:hover {
      .sub-links-container {
        display: block;
      }
    }
  }

  //plus minus changing links
  .expandable-link {
    display: flex;
    align-items: center;

    column-gap: 0.25rem;
  }

  .plus-minus-container {
    position: relative;
    display: flex;
    align-items: center;
    .rotatable-minus {
      position: absolute;
      top: 0;
      left: 0;
      transform: rotate(90deg);
      transition: var(--transition);
    }
  }

  .expandable-link {
    &:hover {
      .rotatable-minus {
        transform: rotate(0deg);
      }
    }
  }

  //underline animation
  .underline {
    width: 0%;
    height: 2px;
    background-color: var(--black);
    transition: var(--transition);
  }

  .link {
    &:hover {
      .underline {
        width: 100%;
      }
    }
  }

  .sub-link {
    &:hover {
      .underline {
        width: 100%;
      }
    }
  }
`

export default Navbar
