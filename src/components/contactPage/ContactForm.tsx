import { Link } from 'react-router-dom'
import { useForm, ValidationError } from '@formspree/react'
import styled from 'styled-components'

const ContactForm = () => {
  const [state, handleSubmit] = useForm('mvojdkyb')

  if (state.succeeded) {
    return (
      <div className="section page" style={{ textAlign: 'center' }}>
        <h4>Thanks for contacting us!</h4>
        <Link className="btn" to={'/'} aria-label="Navigate to homepage">
          go back
        </Link>
      </div>
    )
  }
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Get in Touch</h4>

        <div className="form-row">
          <label className="form-label">
            FULL NAME <span className="star">*</span>
          </label>
          <input
            type="text"
            className="contact-input form-input"
            placeholder="Name"
            name="name"
            required
          />
        </div>

        <div className="form-row">
          <label className="form-label">
            EMAIL ADDRESS <span className="star">*</span>
          </label>
          <input
            type="email"
            className="contact-input form-input"
            placeholder="Email"
            name="email"
            required
          />
        </div>

        <div className="form-row">
          <label className="form-label">
            SUBJECT <span className="star">*</span>
          </label>
          <input
            type="text"
            className="contact-input form-input"
            placeholder="Subject"
            name="subject"
            required
          />
        </div>

        <div className="form-row">
          <label className="form-label">
            MESSAGE <span className="star">*</span>
          </label>
          <textarea
            rows={6}
            className="contact-input form-textarea"
            placeholder="Message"
            name="message"
            required
          />
        </div>
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          className="btn sendBtn"
          type="button"
          disabled={state.submitting}
          aria-label="submit your message to us by sending email"
        >
          SEND MESSAGE
        </button>
      </form>
    </Wrapper>
  )
}

export default ContactForm

const Wrapper = styled.div`
  .contact-input {
    border: 0;
    border-bottom: 1px solid var(--grey-300);
  }
  .contact-input:focus {
    border: 0;
    border-bottom: 1px solid var(--primary-500);
    box-shadow: none;
  }

  .sendBtn {
    padding: 1rem;
  }
`
