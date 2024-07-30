import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Separator from "../../components/Separator.jsx";
import "./Contact.css"

function ContactPage() {
  return (
    <>
      <Header />
      <div class="contact-container">
          <Separator
              title="Contact Now"
              fontSize="25px"
            />
          <div class="form-container">
              <form action="/submit" method="post">
                  <label for="name">Name:</label>
                  <input type="text" id="name" name="name" placeholder="Page under development, you won't be able to send any messages!"/>
                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email"/>
                  <label for="subject">Subject:</label>
                  <input type="text" id="subject" name="subject"/>
                  <label for="message">Message:</label>
                  <textarea id="message" name="message" placeholder="Page under development, you won't be able to send any messages!"></textarea>
              </form>
              <button type="submit">Submit</button>
          </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
