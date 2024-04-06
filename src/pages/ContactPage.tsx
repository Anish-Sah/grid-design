import { FaPhone } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { ContactForm, PageHero } from '../components'
import styled from 'styled-components'
import heroImg from '../assets/images/image1.jpg'
import { COMPANY_INFO } from '../utils/constant'

const ContactPage = () => {
  return (
    <Wrapper>
      <PageHero
        title="contact"
        subText="Connect with us through and let's begin your Australian journey. We're here to assist you every step of the way."
        image={heroImg}
      />
      <main className="section">
        <div className="section-center">
          <div className="contact-container">
            <ContactForm />

            <div className="form info-form">
              <h4>Let's get in touch</h4>
              <p>We&apos;re open for any suggestion or just to have a chat</p>
              <h5>Main Office</h5>
              {/* OFFICE 1 */}
              <div className="contact-info">
                <div className="icon-box">
                  <FaPhone />
                </div>
                <div> + 977-{COMPANY_INFO.contact.join(', ')} </div>
              </div>
              <div className="contact-info">
                <div className="icon-box">
                  <MdEmail />
                </div>
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="contact-info">
                <div className="icon-box">
                  <MdLocationOn />
                </div>
                <span>{COMPANY_INFO.address}</span>
              </div>
              {/* Branch offices */}
              {COMPANY_INFO.branchOffices.map((office, index) => {
                return (
                  <div key={index}>
                    <h5> {office.name} </h5>
                    <div className="contact-info">
                      <div className="icon-box">
                        <FaPhone />
                      </div>
                      <span>+977-{office.contact.join(', ')}</span>
                    </div>
                    <div className="contact-info">
                      <div className="icon-box">
                        <MdLocationOn />
                      </div>
                      <span>{office.address}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        {/* <DisplayLocation /> */}
      </main>
    </Wrapper>
  )
}

export default ContactPage

const Wrapper = styled.div`
  .section {
    padding: 2rem 0;
  }
  .contact-container {
    display: grid;
    gap: 2rem;
  }

  .star {
    color: var(--red-dark);
  }

  .info-form {
    background-color: var(--primary-600);
    color: var(--white);

    * {
      color: var(--white);
    }
  }

  @media (min-width: 900px) {
    .contact-container {
      grid-template-columns: 1fr 1.5fr;
    }

    .info-form {
      order: -1;
    }
  }

  .contact-info {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    svg {
      flex-shrink: 0;
    }
  }

  .icon-box {
    display: flex;
    padding: 1rem;
    border-radius: 50%;
    border: 2px solid var(--grey-300);
  }
`
