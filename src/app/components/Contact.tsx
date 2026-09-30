import { Link } from "react-router";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <div>
      <section className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-xl mx-auto">
          <h1 className="text-5xl md:text-6xl mb-6 text-center">
            Get in touch.
          </h1>
          <p className="text-xl text-muted-foreground mb-4 text-center">
            Tell us the human problem you need solved — and how you want the
            software to get out of the way afterward. We&apos;ll get back to you
            within a couple of days.
          </p>
          <p className="text-sm text-muted-foreground mb-10 text-center">
            New here?{" "}
            <Link
              to="/manifesto"
              className="text-primary hover:underline underline-offset-4"
            >
              Read the manifesto
            </Link>{" "}
            first — it&apos;s the shortest way to know if we&apos;re a fit.
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
