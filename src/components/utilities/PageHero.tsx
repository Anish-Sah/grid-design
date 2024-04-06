import Breadcrumbs from './Breadcrumbs'
import heroImg from '../../assets/images/image2.jpg'
import styled from 'styled-components'

interface Props {
  title?: string
  subText?: string
  image?: string
  services?: boolean
  visas?: boolean
  endPoint?: string
}

const PageHero = ({
  title = 'title',
  subText,
  image = heroImg,
  services,
  visas,
  endPoint,
}: Props) => {
  return (
    <Wrapper>
      <div className="page-header">
        <div className="img-position">
          <div className="hero-img-container">
            <img src={image} alt="hero img" className="hero-img" />
          </div>
        </div>
        <div className="banner-container">
          <div className="section-center">
            <Breadcrumbs
              services={services}
              visas={visas}
              endPoint={endPoint}
            />
            <div className="text">
              <div className="page-hero-title">{title}</div>
              {subText && <div className="sub-text">{subText}</div>}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default PageHero

const Wrapper = styled.section`
  .hero-img-container {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.25);
    }
  }

  .hero-img {
    height: 20rem;
  }

  //banner styling
  .page-header {
    position: relative;
  }

  .banner-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1rem 0;
  }

  .text {
    color: var(--white);

    position: absolute;
    left: inherit;
    top: 50%;
    transform: translateY(-50%);

    .page-hero-title {
      font-size: 2rem;
      text-transform: capitalize;
      font-weight: 600;
    }

    .sub-text {
      max-width: 50rem;
    }
  }
`
