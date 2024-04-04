import constructionIcon from '../../assets/icons/construction.png'
import engineeringIcon from '../../assets/icons/engineering.png'
import blueprintIcon from '../../assets/icons/blueprint.png'
import renovationIcon from '../../assets/icons/renovation.png'
import sustainabilityIcon from '../../assets/icons/sustainability.png'
import inspectionIcon from '../../assets/icons/inspection.png'
import managementIcon from '../../assets/icons/project-management.png'
import consultationIcon from '../../assets/icons/consultation.png'
import innovationIcon from '../../assets/icons/innovation.png'
import technologyIcon from '../../assets/icons/technology.png'
import collaborationIcon from '../../assets/icons/collaboration.png'
import expertiseIcon from '../../assets/icons/worker-beard.png'
import styled from 'styled-components'

interface IServiceCardType {
  image: string
  title: string
  text: string
}

const serviceData: IServiceCardType[] = [
  {
    image: constructionIcon,
    title: 'Construction Consultancy',
    text: 'From initial concept to final completion, our consultancy services provide expert guidance and innovative solutions for your construction projects. Trust our experienced team to bring your architectural visions to life with precision and excellence.',
  },
  {
    image: engineeringIcon,
    title: 'Engineering Solutions',
    text: "Our engineering solutions are tailored to meet the unique needs of every project. Whether it's structural analysis, foundation design, or project management, rely on our expertise to ensure the success of your construction endeavors.",
  },
  {
    image: blueprintIcon,
    title: 'Blueprint Design',
    text: 'Design is at the heart of every successful construction project. With our blueprint design services, we transform ideas into detailed plans, guiding the construction process from start to finish with clarity and accuracy.',
  },
  {
    image: renovationIcon,
    title: 'Renovation & Retrofitting',
    text: 'Revitalize existing structures and enhance their functionality with our renovation and retrofitting services. From modern upgrades to historical preservation, we breathe new life into buildings while respecting their unique heritage.',
  },
  {
    image: sustainabilityIcon,
    title: 'Sustainable Solutions',
    text: "Embrace sustainable practices and reduce your environmental footprint with our eco-friendly solutions. From green building design to renewable energy integration, we're committed to creating a more sustainable future.",
  },
  {
    image: inspectionIcon,
    title: 'Quality Assurance',
    text: 'Ensure the highest standards of quality and safety with our comprehensive inspection services. From pre-construction assessments to final inspections, we meticulously review every aspect of your project to deliver superior results.',
  },
  {
    image: managementIcon,
    title: 'Project Management',
    text: 'Navigate the complexities of construction projects with confidence with our project management expertise. From budgeting and scheduling to procurement and coordination, we oversee every detail to ensure successful outcomes.',
  },
  {
    image: consultationIcon,
    title: 'Consultation Services',
    text: 'Have questions or need expert advice? Our consultation services provide personalized support and guidance for all your construction-related inquiries. Let us help you make informed decisions and achieve your goals.',
  },
  {
    image: innovationIcon,
    title: 'Innovative Design',
    text: "Push the boundaries of creativity with our innovative design solutions. From cutting-edge architectural concepts to futuristic building materials, we're dedicated to exploring new possibilities and creating iconic structures.",
  },
  {
    image: technologyIcon,
    title: 'Technology Integration',
    text: 'Harness the power of technology to optimize your construction processes. Our expertise in technology integration ensures seamless communication, collaboration, and efficiency throughout every phase of your project.',
  },
  {
    image: collaborationIcon,
    title: 'Collaborative Approach',
    text: 'Achieve success through collaboration with Grid Design. We believe in working closely with clients, architects, engineers, and contractors to foster teamwork, communication, and mutual understanding for exceptional results.',
  },
  {
    image: expertiseIcon,
    title: 'Industry Expertise',
    text: 'Benefit from our extensive industry expertise and knowledge. With years of experience in the construction and consultancy field, we bring a wealth of insights and best practices to every project we undertake.',
  },
]

const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div>
          <div>
            <h2 className="title">OUR SERVICES</h2>
            <div className="title-underline"></div>
          </div>

          <p className="desc">
            Discover Our Comprehensive Solutions for an Effortless Journey to
            Realize Your Architectural Vision.
          </p>

          <div className="services-container">
            {serviceData.map((item, index) => {
              return (
                <div key={index} className="service-card">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="service-icon"
                  />
                  <div className="card-title">{item.title}</div>
                  <p>{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Services

const Wrapper = styled.section`
  margin-bottom: 2rem;

  .desc {
    text-align: center;
    margin-top: 1rem;
  }

  //service card styling

  .services-container {
    display: grid;
    gap: 2rem;
  }

  //animation
  @mixin keyframes($animation-name) {
    @-webkit-keyframes #{$animation-name} {
      @content;
    }
    @keyframes #{$animation-name} {
      @content;
    }
  }

  @mixin animation($str) {
    -webkit-animation: #{$str};
    animation: #{$str};
  }
  @keyframes shake {
    0% {
      transform: rotate(0);
      transform-origin: top center;
    }

    20% {
      transform: rotate(10deg);
      transform-origin: top center;
    }

    40% {
      transform: rotate(-10deg);
      transform-origin: top center;
    }
    60% {
      transform: rotate(5deg);
      transform-origin: top center;
    }

    80% {
      transform: rotate(-5deg);
      transform-origin: top center;
    }
    100% {
      transform: rotate(0);
      transform-origin: top center;
    }
  }

  .service-card {
    padding: 2rem;
    box-shadow: 0px 0px 11px 2px rgba(84, 84, 84, 0.43);
    text-align: center;
    cursor: pointer;
  }

  .service-icon {
    height: 7rem;
    object-fit: contain;
    transition: var(--transition);
  }
  .card-title {
    color: var(--primary-600);
    font-size: 1.35rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 786px) {
    .services-container {
      grid-template-columns: 1fr 1fr;
    }

    .service-card {
      &:hover {
        .service-icon {
          animation: shake 0.5s linear;
        }
      }
    }
  }

  @media (min-width: 992px) {
    .services-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`
