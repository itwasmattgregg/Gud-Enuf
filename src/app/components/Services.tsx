import {
  Code2,
  Sparkles,
  Users2,
  BarChart3,
  MessageSquare,
  Wrench,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className='container mx-auto px-4 py-20'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-5xl md:text-7xl mb-6'>What we actually do.</h1>
          <p className='text-xl md:text-2xl text-muted-foreground'>
            Software consulting and SaaS products that help you build better
            relationships with your customers. No buzzwords, no BS.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className='container mx-auto px-4 py-20'>
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-4xl md:text-5xl mb-12'>Our services</h2>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='border-2 border-border p-8 rounded-xl hover:border-primary transition-colors'>
              <Code2 className='w-12 h-12 mb-4 text-primary' />
              <h3 className='text-2xl mb-4'>Custom Software Development</h3>
              <p className='text-muted-foreground mb-4'>
                We build web applications, internal tools, and customer-facing
                products. Modern tech stack, clean code, and documentation that
                actually makes sense.
              </p>
              <p className='text-sm text-muted-foreground/70'>
                React, Node.js, Python, PostgreSQL, and whatever else actually
                fits your needs (not what's trendy on Hacker News).
              </p>
            </div>

            <div className='border-2 border-border p-8 rounded-xl hover:border-primary transition-colors'>
              <Sparkles className='w-12 h-12 mb-4 text-primary' />
              <h3 className='text-2xl mb-4'>Product Strategy & UX</h3>
              <p className='text-muted-foreground mb-4'>
                Help figuring out what to build, who it's for, and how to make
                it actually usable. We talk to your users so you don't have to
                guess what they want.
              </p>
              <p className='text-sm text-muted-foreground/70'>
                User research, prototyping, information architecture, and design
                that prioritizes clarity over "wow factor."
              </p>
            </div>

            <div className='border-2 border-border p-8 rounded-xl hover:border-primary transition-colors'>
              <Users2 className='w-12 h-12 mb-4 text-primary' />
              <h3 className='text-2xl mb-4'>Customer Relationship Tools</h3>
              <p className='text-muted-foreground mb-4'>
                CRMs, community platforms, feedback systems—software that helps
                you actually listen to and engage with your customers, not just
                market to them.
              </p>
              <p className='text-sm text-muted-foreground/70'>
                Custom solutions or thoughtful integrations with existing tools.
                Whatever helps you build real relationships, not just databases.
              </p>
            </div>

            <div className='border-2 border-border p-8 rounded-xl hover:border-primary transition-colors'>
              <MessageSquare className='w-12 h-12 mb-4 text-primary' />
              <h3 className='text-2xl mb-4'>Technical Consulting</h3>
              <p className='text-muted-foreground mb-4'>
                Architecture reviews, code audits, technical roadmaps, and
                honest answers to "should we build this ourselves or buy
                something?" questions.
              </p>
              <p className='text-sm text-muted-foreground/70'>
                We've made enough mistakes to help you avoid the common ones.
                And we'll admit when something is outside our expertise.
              </p>
            </div>

            <div className='border-2 border-border p-8 rounded-xl hover:border-primary transition-colors'>
              <BarChart3 className='w-12 h-12 mb-4 text-primary' />
              <h3 className='text-2xl mb-4'>Data & Analytics</h3>
              <p className='text-muted-foreground mb-4'>
                Set up analytics that tell you what's actually happening, not
                just vanity metrics. Dashboards that people actually use.
              </p>
              <p className='text-sm text-muted-foreground/70'>
                Customer behavior analysis, A/B testing, data pipelines, and
                reporting that informs decisions instead of decorating slides.
              </p>
            </div>

            <div className='border-2 border-border p-8 rounded-xl hover:border-primary transition-colors'>
              <Wrench className='w-12 h-12 mb-4 text-primary' />
              <h3 className='text-2xl mb-4'>Maintenance & Support</h3>
              <p className='text-muted-foreground mb-4'>
                Ongoing support for products we've built (or ones we've
                inherited). Bug fixes, feature updates, and someone to call when
                things go wrong.
              </p>
              <p className='text-sm text-muted-foreground/70'>
                We're not going to ghost you after launch. Retainer agreements
                that are actually flexible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='bg-accent py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-4xl md:text-5xl mb-8'>How we work</h2>
            <p className='text-xl text-muted-foreground mb-12'>
              No lengthy proposals or surprise invoices. Here's what working
              with us actually looks like:
            </p>

            <div className='space-y-8'>
              <div className='bg-card p-8 rounded-xl border border-border'>
                <div className='text-3xl mb-2'>1.</div>
                <h3 className='text-2xl mb-3'>Initial conversation</h3>
                <p className='text-muted-foreground'>
                  We talk about your needs, your users, and your goals. We'll be
                  honest if we're not the right fit—and we'll tell you if what
                  you're asking for doesn't make sense.
                </p>
              </div>

              <div className='bg-card p-8 rounded-xl border border-border'>
                <div className='text-3xl mb-2'>2.</div>
                <h3 className='text-2xl mb-3'>Small project first</h3>
                <p className='text-muted-foreground'>
                  We usually start with a smaller, well-defined project. This
                  lets both of us see if we work well together before committing
                  to anything big.
                </p>
              </div>

              <div className='bg-card p-8 rounded-xl border border-border'>
                <div className='text-3xl mb-2'>3.</div>
                <h3 className='text-2xl mb-3'>Iterative development</h3>
                <p className='text-muted-foreground'>
                  We ship working software early and often. You see progress
                  every week or two, not in six months. We adjust based on
                  feedback, not on a rigid plan.
                </p>
              </div>

              <div className='bg-card p-8 rounded-xl border border-border'>
                <div className='text-3xl mb-2'>4.</div>
                <h3 className='text-2xl mb-3'>Clear communication</h3>
                <p className='text-muted-foreground'>
                  Regular updates, honest timelines, and no jargon. If
                  something's taking longer than expected, we'll tell you why
                  and what we're doing about it.
                </p>
              </div>

              <div className='bg-card p-8 rounded-xl border border-border'>
                <div className='text-3xl mb-2'>5.</div>
                <h3 className='text-2xl mb-3'>Launch & support</h3>
                <p className='text-muted-foreground'>
                  We help you launch, train your team, and stick around for
                  support. We document everything so you're never locked into
                  working with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className='container mx-auto px-4 py-20'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-4xl md:text-5xl mb-8'>About pricing</h2>
          <div className='prose prose-lg'>
            <p className='text-muted-foreground mb-4'>
              We're not going to put prices on this page because every project
              is different. What we can tell you:
            </p>
            <ul className='text-muted-foreground space-y-3'>
              <li>
                We charge fair rates for experienced engineers (think senior dev
                rates, not agency markup)
              </li>
              <li>
                We prefer fixed-price for well-defined projects, retainers for
                ongoing work
              </li>
              <li>
                We're flexible for nonprofits, community projects, and
                early-stage bootstrapped companies
              </li>
              <li>
                We don't do spec work or "let's just see where this goes"
                indefinite arrangements
              </li>
              <li>
                You own everything we build for you—no weird licensing or
                lock-in
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='container mx-auto px-4 py-20 border-t'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-4xl mb-6'>Let's see if we're a fit.</h2>
          <p className='text-xl text-muted-foreground mb-8'>
            Send us an email describing what you're trying to build and who it's
            for. We'll get back to you within a couple days.
          </p>
          <a
            href='mailto:hello@gudenuf.com'
            className='inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg'
          >
            hello@gudenuf.com
          </a>
          <p className='text-sm text-muted-foreground/70 mt-4'>
            No forms. No sales calls. Just send an email like a normal person.
          </p>
        </div>
      </section>
    </div>
  );
}
