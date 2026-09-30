import { Link } from "react-router";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ContactForm } from "./ContactForm";

const coreBeliefs = [
  {
    headline: "Software is a tool, not a destination.",
    detail:
      "The best thing a piece of software can do, most of the time, is nothing at all. It should answer the question, close the loop, and return you to your life.",
  },
  {
    headline: "We're not trying to replace people.",
    detail:
      "Automation should take the tedium, not the part of the work that gives people meaning. The goal is a person with more time and more capability — not a person with no job.",
  },
  {
    headline: "Engagement is not a virtue.",
    detail:
      "\"Time on site\" treats human attention as inventory. We don't build infinite scroll, manufactured streaks, dark patterns, or notifications designed to pull you back in.",
  },
  {
    headline: "Enough is a real number.",
    detail:
      "We're not trying to extract every ounce of value out of the universe. There's always a version that squeezes harder; we're not interested in finding the limit.",
  },
  {
    headline: "Sustainable in every way.",
    detail:
      "Ecologically, economically, technically, and humanly — all four at once. A system that burns out the people maintaining it is as broken as one that burns out the planet.",
  },
];

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-90"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, #d7e3d8 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 90% 20%, rgba(74, 118, 110, 0.12) 0%, transparent 50%), linear-gradient(180deg, #fafaf9 0%, #f5f5f4 100%)",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <p
              className="text-4xl md:text-6xl font-bold tracking-tight mb-8 animate-in-fade"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Gud Enuf
            </p>
            <h1 className="text-3xl md:text-5xl mb-6 animate-in-fade animate-in-delay-1">
              Technology should solve human problems,
              <br className="hidden md:block" /> then{" "}
              <span className="italic">get out of the way</span>.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in-fade animate-in-delay-2">
              Not to replace you. Not to keep you staring at a screen all day
              &ldquo;driving engagement.&rdquo; Software that does its job and
              leaves you alone — building toward a world that is sustainable in
              every way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in-fade animate-in-delay-3">
              <Link
                to="/manifesto"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Read our manifesto
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary rounded-lg hover:bg-accent transition-colors"
              >
                What we do
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="w-full">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1757447247468-fe0962f638fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWxheGVkJTIwZGV2ZWxvcGVyJTIwY29mZmVlJTIwbGFwdG9wfGVufDF8fHx8MTc3MjEyNjgwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Quiet workspace — software that leaves room for the rest of life"
          className="w-full h-[360px] md:h-[480px] object-cover"
        />
      </section>

      {/* Core Belief Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-4">What we actually believe</h2>
          <p className="text-xl text-muted-foreground mb-12">
            We'd rather be clear about this up front than have you find out three
            months into a project.
          </p>

          <div className="divide-y divide-border border-y border-border">
            {coreBeliefs.map(({ headline, detail }) => (
              <div key={headline} className="py-6">
                <h3 className="text-2xl mb-2">{headline}</h3>
                <p className="text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>

          <Link
            to="/manifesto"
            className="inline-flex items-center gap-2 mt-8 text-primary hover:gap-3 transition-all"
          >
            Read the full manifesto
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-12 text-center">
            We're intentionally selective.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl mb-4">We work with:</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p>Nonprofits, cooperatives, and community organizations</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p>Small businesses and mission-driven founders avoiding VC pressure</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p>Teams tired of rebuilding the same system every two years</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p>Organizations that want a long-term partner, not a vendor</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p>Teams building sustainable, profitable businesses (not chasing unicorn exits)</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl mb-4">We don't work with:</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p>VC-funded businesses obsessed with "growth at all costs"</p>
                </div>
                <div className="flex gap-3">
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p>Teams with big egos who think they know better than their users</p>
                </div>
                <div className="flex gap-3">
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p>Anyone expecting us to "hustle" or work nights and weekends</p>
                </div>
                <div className="flex gap-3">
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p>Projects that exploit users or communities for profit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we practice it */}
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl mb-4">
              Restraint is the product.
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              The five beliefs above are not marketing. They are how we decide
              what to build, what to refuse, and when to stop.
            </p>
            <div className="divide-y divide-border border-y border-border">
              <div className="py-8">
                <h3 className="text-2xl mb-2">Good enough</h3>
                <p className="text-muted-foreground">
                  Not settling — restraint. The discipline to stop when something
                  works and refuse complexity that adds no real value.
                </p>
              </div>
              <div className="py-8">
                <h3 className="text-2xl mb-2">Built to last</h3>
                <p className="text-muted-foreground">
                  Optimized for year five, not launch day. Maintainable code,
                  clear architecture, and honest documentation.
                </p>
              </div>
              <div className="py-8">
                <h3 className="text-2xl mb-2">For people, not extraction</h3>
                <p className="text-muted-foreground">
                  Strengthen communities and cooperation — never trap anyone in
                  a system built to squeeze more out of them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit Corp Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center border border-border rounded-xl p-8">
          <p className="text-muted-foreground text-lg">
            We are a <strong>Minnesota Benefit Corporation</strong> — legally committed to considering community impact, worker well-being, and long-term sustainability alongside profit. We reinvest in the communities we're part of.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Sound like your kind of people?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            If you're nodding along and not rolling your eyes, we should probably talk.
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
