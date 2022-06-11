function ContactMe() {
  return (
    <section className="cm">
      <div className="cm__container">
        <div className="cm__wrapper">
          <div className="cm__card">
            <div className="cm__text">
              <h4 className="cm__title">Contact Me</h4>
              <p className="cm__lead">
                Questions, career or feedback, please keep in touch with me
              </p>
            </div>
            <form action="#" className="cm__form">
              <input type="text" name="personName" placeholder="Name*" />
              <input
                type="email"
                name="personEmail"
                placeholder="Email Address*"
              />
              <textarea
                name="personInquiry"
                placeholder="What can I help?"
              ></textarea>
              <button type="submit" className="cm__submit">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
