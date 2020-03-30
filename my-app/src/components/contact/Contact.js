import React from 'react';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2 className="contact__title">Contact</h2>
      <p className="contact__var">
        <span className="contact__var--purple">const</span> contact = { `{` }
      </p>
      <p className="contact__email">
        <span className="contact__email--green">email: </span>
        <button
          type="button"
          className="contact__email--pink"
          aria-label="Copy email to clipboard">
          'elliewhaley11@gmail.com'
        </button>,
      </p>
      <p className="contact__tel">
        <span className="contact__tel--green">phone: </span>
        <button
          type="button"
          className="contact__tel--pink"
          aria-label="call number">
          '+447445205906'
        </button>,
      </p>
      <p className="contact__git">
        <span className="contact__git--green">github: </span>
        <a
          className="contact__git--pink"
          href="https://github.com/ellewhaley/"
          aria-label="Go to github profile">'github.com/ellewhaley'
        </a>,
      </p>
      <p className="contact__in">
        <span className="contact__in--green">linkedin: </span>
        <a
          className="contact__in--pink"
          href="https://www.linkedin.com/in/elle-whaley/"
          aria-label="Go to linkedin profile">
          'www.linkedin.com/in/elle-whaley/'
        </a>
      </p>
      <p>{ `}` };</p>
    </div>
  );
}

export default Contact;
