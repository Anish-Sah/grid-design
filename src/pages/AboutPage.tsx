import styled from 'styled-components'
import { PageHero } from '../components'
import { Link } from 'react-router-dom'

interface IAboutUsData {
  topic: string
  paragraphs: string[]
}

const aboutUsData: IAboutUsData[] = [
  {
    topic: '',
    paragraphs: [
      `Welcome to Grid Design Consultancy and Engineering Service Pvt. Ltd., where excellence in construction meets innovative engineering solutions. Established with a vision to redefine the standards of the construction industry, we bring together a wealth of expertise, passion, and dedication to deliver outstanding results for our clients.`,
      `At Grid Design Consultancy and Engineering Service Pvt. Ltd., we are committed to excellence in every aspect of our work, from design and planning to execution and delivery. Our team of experienced professionals is dedicated to providing innovative, sustainable, and cost-effective solutions that meet the unique needs of each project. With a focus on quality, safety, and client satisfaction, we strive to exceed expectations and deliver exceptional results that stand the test of time.`,
      `As a leading construction and engineering firm, we take pride in our reputation for integrity, reliability, and excellence. Our commitment to sustainability, innovation, and continuous improvement drives us to push the boundaries of what is possible, delivering cutting-edge solutions that set new standards for the industry. Whether you're planning a new project, seeking expert advice, or looking for a reliable partner to bring your vision to life, Grid Design Consultancy and Engineering Service Pvt. Ltd. is here to help.`,
    ],
  },
  {
    topic: 'our story',
    paragraphs: [
      `Grid Design Consultancy and Engineering Service Pvt. Ltd. traces its origins to a small group of ambitious individuals who shared a common vision for revolutionizing the construction and engineering landscape. Founded [insert year], our company began as a humble endeavor driven by a passion for innovation, a commitment to quality, and a desire to make a positive impact in the industry.`,
      `From our modest beginnings, we have steadily grown into a renowned construction and consultancy firm, serving clients across diverse sectors and geographies. Our journey has been marked by milestones, challenges, and triumphs, each shaping our evolution and reinforcing our dedication to excellence.`,
      `Over the years, we have earned the trust and confidence of our clients through our unwavering focus on delivering superior outcomes and exceeding expectations. Our success is a testament to the hard work, dedication, and expertise of our team, whose collective efforts have propelled us to new heights and established us as a leader in our field.`,
    ],
  },
  {
    topic: 'our vision',

    paragraphs: [
      `Our vision is to be the premier construction and engineering firm in the region, known for our commitment to excellence, innovation, and sustainability. We aim to be the partner of choice for clients seeking cutting-edge solutions that deliver exceptional value and lasting impact. By leveraging our expertise, experience, and creativity, we strive to set new benchmarks for quality, safety, and client satisfaction, establishing ourselves as a leader in the industry.`,
      `At Grid Design Consultancy and Engineering Service Pvt. Ltd., we are driven by a passion for excellence and a desire to make a positive impact in the world. Our vision is to create a legacy of exceptional projects that inspire, innovate, and endure, leaving a lasting imprint on the built environment and the communities we serve. By upholding the highest standards of professionalism, integrity, and quality, we aim to build enduring relationships with our clients, partners, and stakeholders, earning their trust and confidence through our unwavering commitment to excellence.`,
    ],
  },
  {
    topic: 'join us',
    paragraphs: [
      `Join us at Grid Design Consultancy and Engineering Service Pvt. Ltd. as we embark on an exciting journey in shaping the future of construction and engineering. Whether you're planning a project or seeking innovative solutions, we're here to guide you every step of the way. Contact us today to start realizing your construction goals with confidence.`,
      `Thank you for considering Grid Design Consultancy and Engineering Service Pvt. Ltd. as your partner in success.`,
    ],
  },
]

const AboutPage = () => {
  return (
    <Wrapper>
      <PageHero
        title="about us"
        subText="Crafting Architectural Dreams into Reality: Grid Design - Where Innovation and Expertise Illuminate the Future of Construction."
      />
      <div className="page">
        <div className="section section-center">
          {aboutUsData.map((item, index) => {
            const { topic, paragraphs } = item
            return (
              <div key={index} className="about-us">
                <h4>{topic}</h4>
                {paragraphs.map((text, index) => {
                  return <p key={index}>{text}</p>
                })}
              </div>
            )
          })}

          <Link
            to={'/contact'}
            aria-label="Reach us via any means provided in the contact page"
            className="btn"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default AboutPage
