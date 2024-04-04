import { useNavigate } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
import Logo from './utilities/Logo'
// import { useEffect, useState } from 'react'
import { links } from '../utils/constants'

interface IProps {
  isSidebarOpen: boolean
  setIsSidebarOpen: (f: boolean) => void
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: IProps) => {
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (isSidebarOpen) {
  //     if (typeof window != 'undefined' && window.document) {
  //       document.body.style.overflow = 'hidden'
  //     }
  //   } else {
  //     document.body.style.overflow = 'unset'
  //   }
  // }, [isSidebarOpen])

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const handleClick = (url: string) => {
    navigate(url)
    closeSidebar()
  }

  return (
    <Wrapper>
      <div>
        <aside
          className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
        >
          <div className="sidebar-header">
            <Logo />
            <button
              type="button"
              className="btn-icon close-btn"
              onClick={closeSidebar}
            >
              <FaTimes />
            </button>
          </div>

          <div className="sidebar-links">
            {links.map((link) => {
              const { url, text, id, subLinks } = link
              return (
                <div key={id}>
                  <div
                    className="sidebar-link"
                    onClick={() => {
                      handleClick(url)
                    }}
                  >
                    {text}
                  </div>
                  {subLinks && subLinks.length > 0 && (
                    <div className="sub-links-container">
                      {subLinks.map((subLink, index) => {
                        return (
                          <div
                            key={index}
                            className="sub-link"
                            onClick={() => {
                              handleClick(subLink.url)
                            }}
                          >
                            {subLink.text}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </aside>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    /* border-bottom: 1px solid var(--grey-200); */
    box-shadow: var(--shadow-2);
  }
  .close-btn {
    color: var(--red-dark);
    transition: var(--transition);
    cursor: pointer;
    svg {
      font-size: 1.5rem;
    }

    &:hover {
      color: var(--red-light);
    }
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;
    background: var(--white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
    overflow-y: auto;
    box-shadow: var(--shadow-4);
  }
  .show-sidebar {
    transform: translate(0);
    z-index: var(--sidebar-z-index);
  }

  @media (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }

  .sidebar-links {
    margin: 0;
    padding: 0;
    .sidebar-link {
      color: var(--grey-900);
      text-transform: capitalize;
      letter-spacing: var(--letterSpacing);
      padding: 1rem 1.5rem;
      transition: var(--transition);
      cursor: pointer;

      &:hover {
        letter-spacing: 0.25rem;
        color: var(--primary-500);
        background: var(--primary-50);
      }
    }
  }

  //sub links styling
  .sub-links-container {
    padding-left: 2rem;

    .sub-link {
      display: block;
      padding: 0.35rem 0;
      text-transform: capitalize;
      color: var(--primary-900);
      transition: var(--transition);
      cursor: pointer;

      &:hover {
        padding-left: 1rem;
        background: var(--primary-50);
        color: var(--primary-500);
      }
    }
  }
`

export default Sidebar
