import { useState, type FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdnyvgr";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (honeypot) {
      setStatus("success");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-left rounded-lg border border-border bg-accent/50 p-6">
        <p className="text-lg font-medium mb-1">Thanks — we got it.</p>
        <p className="text-muted-foreground">
          We'll get back to you within a couple of days.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-4"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="text-left space-y-5 w-full">
      <p className="hidden" aria-hidden="true">
        <label>
          Don't fill this out if you're human:{" "}
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </label>
      </p>

      <div className="space-y-2">
        <Label htmlFor="contact-name">Name</Label>
        <Input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={status === "submitting"}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-email">Email</Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "submitting"}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={status === "submitting"}
          className="min-h-32"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive" role="alert">
          Something went wrong. Try again, or email us at{" "}
          <a
            href="mailto:hello@gudenuf.com"
            className="underline hover:text-primary"
          >
            hello@gudenuf.com
          </a>
          .
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto text-base px-8"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
