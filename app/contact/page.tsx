export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="container section">
      <h1>Request a demo</h1>
      <p className="lead">Send a quick note—reply within 24 hours.</p>

      <form className="form" action="https://formspree.io/f/your_form_id" method="POST">
        <label>
          Name
          <input name="name" placeholder="Your name" required />
        </label>

        <label>
          Email
          <input type="email" name="email" placeholder="you@company.com" required />
        </label>

        <label>
          Business type
          <input name="business" placeholder="Cleaning, handyman, dental, etc." />
        </label>

        <label>
          Message
          <textarea name="message" placeholder="What are you trying to automate?" rows={5} required />
        </label>

        <button className="btnPrimary" type="submit">Send</button>
        <p className="muted small">
          Tip: Replace the form action with your Formspree endpoint or your own API route.
        </p>
      </form>
    </div>
  );
}
