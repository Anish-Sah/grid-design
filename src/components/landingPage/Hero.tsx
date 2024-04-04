import styled from 'styled-components'
import { Link } from 'react-router-dom'
import hero from '../../assets/images/hero-img.jpg'
import { BsBuildings } from 'react-icons/bs'
import { RiToolsFill } from 'react-icons/ri'
import { MdEventAvailable } from 'react-icons/md'

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-container">
        <div className="hero">
          <div className="section-center">
            <div className="hero-banner">
              <h3 className="tag-line">
                Grid Design Consultancy and Engineering Services
              </h3>
              <h1 className="hero-text">
                BUILDING DREAMS, ENGINEERING EXCELLENCE
              </h1>
              <p className="hero-desc">
                {
                  "Building Tomorrow, Engineering Your Vision Today! Trust our expert team at Grid Design for innovative construction solutions tailored to your needs. From concept to completion, we're committed to realizing your architectural dreams with precision and excellence."
                }
              </p>
            </div>

            <HeroCard />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

interface HeroCardType {
  icon: JSX.Element
  mainText: string
  subText: string
  buttonText: string
  url: string
}

const heroCardData: HeroCardType[] = [
  {
    icon: <BsBuildings />,
    mainText: 'Construction Consultancy',
    subText: 'Guiding Your Path to Structural Brilliance.',
    buttonText: 'Get Started',
    url: '/services/construction-consultancy',
  },
  {
    icon: <RiToolsFill />,
    mainText: 'Engineering Solutions',
    subText: 'Your Path to Innovative Construction Starts Here.',
    buttonText: 'Explore Solutions',
    url: '/services/engineering-solutions',
  },
  {
    icon: <MdEventAvailable />,
    mainText: 'Schedule a Consultation',
    subText: 'Find the Best Design Solution for Your Project.',
    buttonText: "Let's Connect",
    url: '/contact',
  },
]

const HeroCard = () => {
  return (
    <div className="hero-card-container">
      {heroCardData.map((item, index) => {
        return (
          <div key={index} className="hero-card">
            <div className="icon">{item.icon}</div>
            <div className="main-text">{item.mainText}</div>
            <p className="sub-text">{item.subText}</p>
            <Link
              to={item.url}
              className={`btn card-btn`}
              aria-label={item.buttonText}
            >
              {item.buttonText}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Hero

const Wrapper = styled.div`
  .hero {
    // background: url('../../assets/australia2.webp') center/cover no-repeat;
    // background: linear-gradient(rgba(61, 85, 59, 0.4), rgba(0, 0, 0, 0.3)),
    //   url('../../assets/australia-visa.webp') center/cover no-repeat;
    background: linear-gradient(rgba(61, 85, 59, 0.6), rgba(0, 0, 0, 0.3)),
      url(${hero}) center/cover no-repeat;
  }

  .hero {
    height: 100%;
    padding: 2rem 0;
    margin-bottom: 2rem;
  }

  //hero card styling

  .hero-card {
    width: 100%;
    background-color: var(--white);
    border-radius: 10px;
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    box-shadow: var(--shadow-4);

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    text-align: center;

    .icon {
      display: flex;
      color: var(--primary-500);
      font-size: 5rem;
      justify-content: center;
    }

    .main-text {
      color: var(--primary-500);
      font-size: 1.75rem;
    }
    .sub-text {
      color: var(--grey-500);
    }
    .card-btn {
      border-radius: 100px;
      padding: 0.75rem 1.5rem;
      text-transform: uppercase;
    }
  }

  //hero banner styling
  .hero-banner {
    padding: 3rem 0;
    h1,
    h3 {
      margin: 0.35rem 0;
    }

    .tag-line {
      font-size: 3rem;
      font-weight: 700;
      color: var(--primary-500);
    }

    .hero-text,
    .hero-desc {
      color: var(--white);
    }

    .hero-desc {
      font-size: 1.25rem;
      max-width: 50rem;
      letter-spacing: 1px;
    }
  }

  @media (min-width: 1200px) {
    .hero-container {
      background-color: transparent;
      height: 850px;
    }
    .hero {
      height: 500px;
    }
    .hero-card-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 3rem;
    }

    .hero-banner {
      margin-top: 3rem;
    }
  }

  @media (min-width: 1300px) {
    .hero-container {
      /* height: 820px; */
    }
  }

  @media (min-width: 1400px) {
    .hero-container {
      height: 750px;
    }
  }
`
