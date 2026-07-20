import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <div>
      <section className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-xl mx-auto">
          <h1 className="text-5xl md:text-6xl mb-6 text-center">
            Get in touch.
          </h1>
          <p className="text-xl text-muted-foreground mb-10 text-center">
            Tell us what you're trying to build and who it's for. We'll get back
            to you within a couple of days.
          </p>
          <ContactForm />
          <p className="text-sm text-muted-foreground mt-8 text-center">
            Prefer email? Reach us at{" "}
            <a
              href="mailto:hello@gudenuf.com"
              className="hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              hello@gudenuf.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
