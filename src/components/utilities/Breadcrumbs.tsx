import { Link, useLocation } from 'react-router-dom'
import { HiChevronDoubleRight } from 'react-icons/hi'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

const Breadcrumbs = () => {
  const { pathname } = useLocation()
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([])

  useEffect(() => {
    const splitPath = pathname.split('/').splice(1)
    setBreadcrumbs(splitPath)
  }, [pathname])

  const constructUrl = (index: number) => {
    const path = breadcrumbs.slice(0, index + 1).join('/')
    console.log(path, 'path')
    return `/${path}`
  }

  const hyphenToSpace = (str: string) => {
    return str.replace(/-/g, ' ')
  }

  return (
    <Wrapper>
      <div className="breadcrumb-container">
        <Link to="/">Home</Link>

        {breadcrumbs.map((breadcrumb, index) => {
          return (
            <span key={index} className="breadcrumb-link">
              <HiChevronDoubleRight />
              {index === breadcrumbs.length - 1 ? (
                <span className="text-truncate">
                  {hyphenToSpace(breadcrumb)}
                </span>
              ) : (
                <Link to={constructUrl(index)}>{breadcrumb}</Link>
              )}
            </span>
          )
        })}
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
    column-gap: 0.25rem;
    color: var(--white);

    a {
      color: var(--white);
      transition: var(--transition);
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .breadcrumb-link {
    display: flex;
    align-items: center;
    column-gap: 0.25rem;
  }
`

export default Breadcrumbs
