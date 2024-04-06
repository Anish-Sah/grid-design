import { styled } from 'styled-components'
import defaultImage from '../assets/team-images/defaultMember.png'
import img1 from '../assets/team-images/member1.jpg'
import { COMPANY_INFO } from '../utils/constant'
// import img2 from '../assets/team-images/member2.jpg'
// import { PageHero } from '../components'

interface ITeamMemberInfo {
  name: string
  designation: string
  image: string
  backgroundColor?: string
  portfolio: string
}

const teamMembers: ITeamMemberInfo[] = [
  {
    name: 'Om Prakash Gupta',
    designation: `director of ${COMPANY_INFO.name}`,
    image: img1,
    backgroundColor: 'LightSteelBlue',
    portfolio: `Mr. Om Prakash Gupta, Director of Grid Design Consultancy and Engineering Service Pvt. Ltd., brings over two decades of expertise, leading the company with innovation and excellence. His guidance has propelled Grid Design Consultancy to success in diverse projects, showcasing proficiency in architecture and project management. Mr. Gupta's commitment to client satisfaction and reliability has earned the company a strong reputation in the industry. Beyond his role, he actively advocates for sustainability and technological advancements, driving industry progress. His visionary leadership and dedication to quality have solidified Grid Design Consultancy's standing as a trusted provider of tailored solutions.`,
  },
  {
    name: 'Full Name',
    designation: `Business Analyst ${COMPANY_INFO.name}`,
    image: defaultImage,
    backgroundColor: 'MediumPurple',
    portfolio: `As the Business Analyst at Grid Design Consultancy and Engineering Service Pvt. Ltd., [Name] leverages analytical expertise to drive strategic decision-making and operational efficiency. With a keen eye for detail, [Name] identifies opportunities for process improvement and cost optimization, contributing to the company's success. Their proficiency in data analysis and market research informs business strategies and enhances project outcomes. [Name]'s collaborative approach fosters effective communication and alignment across teams, ensuring project goals are met. Their dedication to driving innovation and maximizing value positions them as an invaluable asset to the company.`,
  },

  {
    name: 'Full Name',
    designation: `Operation Head ${COMPANY_INFO.name}`,
    image: defaultImage,
    backgroundColor: 'MediumPurple',
    portfolio: `As the Business Analyst at Grid Design Consultancy and Engineering Service Pvt. Ltd., [Name] leverages analytical expertise to drive strategic decision-making and operational efficiency. With a keen eye for detail, [Name] identifies opportunities for process improvement and cost optimization, contributing to the company's success. Their proficiency in data analysis and market research informs business strategies and enhances project outcomes. [Name]'s collaborative approach fosters effective communication and alignment across teams, ensuring project goals are met. Their dedication to driving innovation and maximizing value positions them as an invaluable asset to the company.`,
  },
]

const TeamPage = () => {
  return (
    <>
      {/* <PageHero
        title="team"
        subText="A multidisciplinary team of experts dedicated to delivering innovative solutions for complex projects."
      /> */}
      <Wrapper>
        <div className="section section-center page">
          <h4 className="text-title">our team</h4>

          <div className="team-members-container">
            {teamMembers.map((member, index) => {
              const { name, designation, image, backgroundColor, portfolio } =
                member
              return (
                <div key={index} className="single-member">
                  <div>
                    <div
                      key={index}
                      className="member-image-container"
                      style={{ background: backgroundColor }}
                    >
                      <img src={image} alt={name} />
                    </div>
                  </div>
                  <div>
                    <div className="info">
                      <div className="member-name">{name} </div>
                      <p className="member-designation">{designation} </p>
                    </div>

                    <div className="portfolio-desc">{portfolio}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  --borderRadius: 0.75rem;

  .text-title {
    text-align: center;
    text-decoration: underline;
  }

  .single-member {
    display: grid;
    margin-bottom: 2rem;
    justify-items: center;

    padding: 2rem 1rem;
    box-shadow: var(--shadow-3);

    .member-image-container {
      width: 10rem;
      height: 10rem;
      position: relative;
      border-radius: var(--borderRadius);

      &::after {
        content: '';
        position: absolute;
        top: -1rem;
        left: 1rem;
        width: 100%;
        height: 100%;
        background: var(--grey-200);
        z-index: -1;
        border-radius: var(--borderRadius);
      }
      img {
        height: 100%;
        object-fit: cover;
        border-radius: var(--borderRadius);
        overflow: hidden;
      }
    }

    .member-name {
      font-weight: 500;
    }

    .info {
      text-align: center;
      text-transform: capitalize;
    }
  }

  .portfolio-desc {
    text-align: justify;
  }

  @media (min-width: 786px) {
    .single-member {
      grid-template-columns: auto 1fr;
      column-gap: 3rem;

      .member-image-container {
        width: 15rem;
        height: 15rem;
      }

      .info {
        text-align: left;
      }
    }
  }
`

export default TeamPage
