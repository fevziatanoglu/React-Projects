import "./contact.css"

export default function Contact() {
  return (

    <section id="contact" className="contact">

      <h3>Get Touch</h3>
      <h1>Contact Me</h1>

      <div className="contact-container">


        <div className="contact-info">
          <div className="content">
            <h2 className="item">Mobile</h2>
            <h3 className="item">+90 0538 776 41 62</h3>
            <p className="item">Send a message</p>
          </div>

          <div className="content">
            <h2 className="item">Gmail</h2>
            <h3 className="item">fevziatanoglu@gmail.com</h3>
            <p className="item">Send a message</p>
          </div>
        </div>


        <div className="contact-email">
          <form>

            <input type="text" placeholder="Name"></input>
            <input type="email" placeholder="Email"></input>
            <textarea type="text" placeholder="Message" rows={7}></textarea>
            <button className="btn" type="submit">Send</button>
          </form>

        </div>

      </div>


      <div className="bottom-bar"></div>

    </section>

  )
}