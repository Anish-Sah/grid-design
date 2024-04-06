import { useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { styled } from 'styled-components'
import {
  ProjectCategory,
  ProjectStatus,
  portfolioThemeColors,
  projectStatusColors,
} from '../utils/constant'
import { dashToSpace, spaceToDash } from '../functions/function'

import greenHeaven from '../assets/projects/green-haven-apartments.png'
import metroplex from '../assets/projects/metroplex-office-tower.png'
import urbanRenewal from '../assets/projects/urban.png'
import skyHighMall from '../assets/projects/structure-analysis.png'
import communityCenter from '../assets/projects/architectural-design.png'
import highwayExpansion from '../assets/projects/project-management.png'
import heritageBuilding from '../assets/projects/seismic-retrofitting.png'
import industrialComplex from '../assets/projects/mep-design.png'
import damConstruction from '../assets/projects/geotechnical-investigation.png'
import highwayOverpass from '../assets/projects/highway-overpass.png'
import commercialBuilding from '../assets/projects/commercial-building.png'
import waterTreatment from '../assets/projects/water-treatment.png'

const filters = [
  {
    buttonText: 'all',
    url: '/portfolio',
    tagline:
      'Discover our diverse portfolio of projects, spanning construction, consultancy, and engineering services.',
    theme: portfolioThemeColors[0],
  },
  {
    buttonText: ProjectCategory.Construction,
    url: `/portfolio?filter=${spaceToDash(ProjectCategory.Construction)}`,
    tagline:
      'Building sustainable communities, crafting spaces that inspire and empower generations.',
    theme: portfolioThemeColors[1],
  },
  {
    buttonText: ProjectCategory.Consultancy,
    url: `/portfolio?filter=${spaceToDash(ProjectCategory.Consultancy)}`,

    tagline:
      'Empowering visionaries, providing expert guidance and solutions for sustainable growth.',

    theme: portfolioThemeColors[2],
  },
  {
    buttonText: ProjectCategory.EngineeringServices,
    url: `/portfolio?filter=${spaceToDash(
      ProjectCategory.EngineeringServices
    )}`,

    tagline:
      'Engineering a brighter future, innovating solutions that drive progress and prosperity',

    theme: portfolioThemeColors[3],
  },
]

interface IProject {
  name: string
  desc: string
  logo: string
  footerText: ProjectStatus | ''
  category: ProjectCategory
}

const projects: IProject[] = [
  {
    name: 'Green Haven Apartments',
    desc: 'Design and construction of eco-friendly residential apartments with sustainable features.',
    logo: greenHeaven,
    footerText: ProjectStatus.Completed,
    category: ProjectCategory.Construction,
  },
  {
    name: 'Metroplex Office Tower',
    desc: 'Engineering and construction of a modern office tower equipped with state-of-the-art facilities.',
    logo: metroplex,
    footerText: ProjectStatus.Acquired,
    category: ProjectCategory.Construction,
  },
  {
    name: 'Urban Renewal Initiative',
    desc: 'Renovation and revitalization of urban areas, including infrastructure upgrades and beautification projects.',
    logo: urbanRenewal,
    footerText: ProjectStatus.Ongoing,
    category: ProjectCategory.Construction,
  },
  {
    name: 'Structural Analysis for Sky High Mall',
    desc: 'Providing structural engineering consultancy for the construction of a multi-storey shopping complex.',
    logo: skyHighMall,
    footerText: ProjectStatus.Acquired,
    category: ProjectCategory.Consultancy,
  },
  {
    name: 'Architectural Design for Community Center',
    desc: 'Designing an innovative community center with a focus on functionality and aesthetic appeal.',
    logo: communityCenter,
    footerText: ProjectStatus.Completed,
    category: ProjectCategory.Consultancy,
  },
  {
    name: 'Project Management for Highway Expansion',
    desc: 'Overseeing the project management aspects of a major highway expansion project, ensuring timely completion and quality control.',
    logo: highwayExpansion,
    footerText: ProjectStatus.Acquired,
    category: ProjectCategory.Consultancy,
  },
  {
    name: 'Seismic Retrofitting of Heritage Building',
    desc: 'Implementing seismic retrofitting techniques to strengthen a heritage building against earthquake hazards.',
    logo: heritageBuilding,
    footerText: ProjectStatus.Ongoing,
    category: ProjectCategory.EngineeringServices,
  },
  {
    name: 'MEP Design for Industrial Complex',
    desc: 'Designing mechanical, electrical, and plumbing systems for an industrial complex to optimize efficiency and functionality.',
    logo: industrialComplex,
    footerText: ProjectStatus.Ongoing,
    category: ProjectCategory.EngineeringServices,
  },
  {
    name: 'Geotechnical Investigation for Dam Construction',
    desc: 'Conducting geotechnical investigations to assess soil conditions and suitability for the construction of a hydroelectric dam.',
    logo: damConstruction,
    footerText: ProjectStatus.Completed,
    category: ProjectCategory.EngineeringServices,
  },
  {
    name: 'Highway Overpass Construction',
    desc: 'Design and construction of a highway overpass to improve traffic flow and safety.',
    logo: highwayOverpass,
    footerText: ProjectStatus.Acquired,
    category: ProjectCategory.Construction,
  },
  {
    name: 'Commercial Building Renovation',
    desc: 'Renovation and modernization of a commercial building to enhance functionality and aesthetics.',
    logo: commercialBuilding,
    footerText: ProjectStatus.Completed,
    category: ProjectCategory.Construction,
  },
  {
    name: 'Water Treatment Plant Engineering',
    desc: 'Engineering design and construction of a water treatment plant to provide clean and safe drinking water.',
    logo: waterTreatment,
    footerText: ProjectStatus.Acquired,
    category: ProjectCategory.EngineeringServices,
  },
]

const PortfolioPage = () => {
  const [subHeaderText, setSubHeaderText] = useState(filters[0].tagline)
  const [backgroundTheme, setBackgroundTheme] = useState(filters[0].theme)
  const location = useLocation()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const handleClick = ({
    url,
    tagline,
    theme,
  }: {
    url: string
    tagline: string
    theme: string
  }) => {
    setSubHeaderText(tagline)
    console.log(theme)
    setBackgroundTheme(theme)
    navigate(url)
  }

  return (
    <Wrapper style={{ background: backgroundTheme }}>
      <div className="section section-center page-100">
        <div className="portfolio-container">
          <div className="portfolio-header">
            <div className="header-btn-container">
              {filters.map((filter, index) => {
                const { url, theme, tagline, buttonText } = filter
                return (
                  <div
                    key={index}
                    className={`header-btn ${
                      location.pathname + location.search === url
                        ? 'active-btn'
                        : ''
                    }`}
                    onClick={() =>
                      handleClick({
                        url,
                        theme,
                        tagline,
                      })
                    }
                  >
                    {buttonText}
                    <div className="underline"></div>
                  </div>
                )
              })}
            </div>
            <div className="portfolio-sub-header">{subHeaderText}</div>
          </div>

          <div className="portfolio-projects-container">
            {projects
              .filter(
                (element) =>
                  !searchParams.get('filter') ||
                  element.category === dashToSpace(searchParams.get('filter'))
              )
              .map((project, index) => {
                const { name, desc, logo, footerText } = project
                return (
                  <div key={index} className="single-project">
                    <div className="project-logo">
                      <img src={logo} alt={name} className="logo" />
                    </div>

                    <div className="info-container">
                      <div className="body-text">
                        <div className="project-name">{name}</div>
                        <div className="project-desc">{desc}</div>
                      </div>
                      {footerText && (
                        <div
                          className="footer-text"
                          style={{
                            background:
                              projectStatusColors[footerText] || 'red',
                          }}
                        >
                          {footerText}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--primary-50);
  transition: var(--transition);

  .header-btn-container {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 0.5rem 2rem;
    flex-wrap: wrap;
    justify-content: center;
    cursor: pointer;

    .header-btn {
      color: var(--grey-600);
      &:hover {
        .underline {
          width: 100%;
        }
      }
    }
    .active-btn {
      color: var(--grey-900);
      .underline {
        width: 100%;
      }
    }

    &:hover {
    }
  }

  .portfolio-sub-header {
    margin: 1rem;
    text-align: center;
  }

  //projects styling
  .portfolio-projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    gap: 1rem;
  }
  .single-project {
    position: relative;
    height: 14rem;
    background: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
    }
  }
  .project-logo {
    width: 50%;
  }

  .info-container {
    .body-text {
      padding: 2rem;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      opacity: 0;
      background-color: var(--primary-200);
      transition: var(--transition);
      .project-name {
        font-weight: 500;
      }
      .project-desc {
        font-size: 0.75rem;
        font-weight: 300;
      }
    }

    .footer-text {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 0.35rem 0;
      text-align: center;
      transition: var(--transition);
    }
  }

  .single-project {
    &:hover {
      .body-text {
        opacity: 1;
      }
      .footer-text {
        background-color: var(--white) !important;
      }
    }
  }
`

export default PortfolioPage
