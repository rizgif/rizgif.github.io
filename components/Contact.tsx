export default function Contact() {
    return (
      <section id="contact" className="container mx-auto p-8">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <form action="mailto:rnursaidy@gmail.com" method="post" enctype="text/plain" className="flex flex-col space-y-4">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className="border rounded p-2" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className="border rounded p-2" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" className="border rounded p-2" />
          <button type="submit" className="bg-blue-500 text-white rounded p-2">Send</button>
        </form>
      </section>
    );
  }
  