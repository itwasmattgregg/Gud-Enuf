import { Link } from "react-router";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl mb-6">
            Software that's<br />
            <span className="italic">actually</span> gud enuf.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            No hustle culture. No venture capital drama. Just burnt-out ex-big-tech engineers
            building software that helps you build real relationships with your customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              What we do
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary rounded-lg hover:bg-accent transition-colors"
            >
              Who we are
            </Link>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1757447247468-fe0962f638fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWxheGVkJTIwZGV2ZWxvcGVyJTIwY29mZmVlJTIwbGFwdG9wfGVufDF8fHx8MTc3MjEyNjgwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Relaxed developer working"
            className="w-full h-[400px] object-cover rounded-2xl"
          />
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
                  <p>Companies that listen to their users and actually care about feedback</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p>Teams building sustainable, profitable businesses (not chasing unicorn exits)</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p>Organizations focused on strengthening customer relationships</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p>People who value work-life balance and reasonable timelines</p>
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

      {/* Values Section */}
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl mb-12 text-center">
              Our philosophy is simple.
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-xl border border-border">
                <h3 className="text-2xl mb-3">Good enough</h3>
                <p className="text-muted-foreground">
                  Perfect is the enemy of done. We ship working software that solves real problems,
                  then iterate based on actual user feedback.
                </p>
              </div>

              <div className="bg-card p-8 rounded-xl border border-border">
                <h3 className="text-2xl mb-3">Sustainable</h3>
                <p className="text-muted-foreground">
                  No death marches. No crunch time. We build at a pace that's healthy for everyone involved,
                  including your team and ours.
                </p>
              </div>

              <div className="bg-card p-8 rounded-xl border border-border">
                <h3 className="text-2xl mb-3">Human-first</h3>
                <p className="text-muted-foreground">
                  Technology should serve people, not the other way around. We build tools that help
                  communities and companies connect authentically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Sound like your kind of people?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            If you're nodding along and not rolling your eyes, we should probably talk.
          </p>
          <a
            href="mailto:hello@gudenuf.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg"
          >
            Get in touch
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
