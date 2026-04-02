import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Heart, Lightbulb, Shield } from 'lucide-react';

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className='container mx-auto px-4 py-20'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-5xl md:text-7xl mb-6'>
            We've seen how the
            <br />
            sausage is made.
          </h1>
          <p className='text-xl md:text-2xl text-muted-foreground'>
            And honestly? We're tired of it. So we started Gud Enuf to do things
            differently.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className='container mx-auto px-4 py-12'>
        <div className='max-w-5xl mx-auto'>
          <ImageWithFallback
            src='https://images.unsplash.com/photo-1758873269317-51888e824b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMGNvbGxhYm9yYXRpb24lMjBtZWV0aW5nfGVufDF8fHx8MTc3MjEwODIzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
            alt='Team collaboration'
            className='w-full h-[500px] object-cover rounded-2xl mb-16'
          />

          <div className='prose prose-lg max-w-3xl mx-auto'>
            <h2 className='text-3xl mb-6'>The backstory</h2>

            <p className='text-muted-foreground mb-6'>
              We're a collective of engineers who spent years at big tech
              companies and fast-growing startups. We've shipped products used
              by millions. We've survived reorgs, pivots, and all-hands meetings
              that could have been emails.
            </p>

            <p className='text-muted-foreground mb-6'>
              But somewhere along the way, we noticed a pattern: the relentless
              push for growth metrics, the "ship fast and break things"
              mentality that breaks teams instead, the disconnect between what
              users actually need and what gets built.
            </p>

            <p className='text-muted-foreground mb-6'>
              We got burnt out. Not from working hard—we love building things.
              But from working on things that didn't matter, for companies that
              treated both their employees and customers as resources to be
              optimized rather than people to serve.
            </p>

            <p className='text-muted-foreground mb-6'>
              So we left. And we started Gud Enuf with a simple mission: build
              software that's actually good enough—meaning it solves real
              problems for real people, without all the unnecessary drama,
              politics, and hustle culture baggage.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='bg-accent py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-4xl md:text-5xl mb-12 text-center'>
              What we believe
            </h2>

            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-card p-8 rounded-xl border border-border'>
                <Users className='w-10 h-10 mb-4 text-primary' />
                <h3 className='text-2xl mb-3'>People over metrics</h3>
                <p className='text-muted-foreground'>
                  Vanity metrics and growth charts don't mean much if you're not
                  actually helping people. We optimize for human outcomes, not
                  just numbers going up and to the right.
                </p>
              </div>

              <div className='bg-card p-8 rounded-xl border border-border'>
                <Heart className='w-10 h-10 mb-4 text-primary' />
                <h3 className='text-2xl mb-3'>Sustainable pace</h3>
                <p className='text-muted-foreground'>
                  The best work happens when people are well-rested, have time
                  for their lives, and aren't constantly in crisis mode. We work
                  normal hours and take real vacations.
                </p>
              </div>

              <div className='bg-card p-8 rounded-xl border border-border'>
                <Lightbulb className='w-10 h-10 mb-4 text-primary' />
                <h3 className='text-2xl mb-3'>Iterative improvement</h3>
                <p className='text-muted-foreground'>
                  Launch something useful, get feedback, make it better. Repeat.
                  No need for 18-month "perfect" launches that miss the market
                  entirely.
                </p>
              </div>

              <div className='bg-card p-8 rounded-xl border border-border'>
                <Shield className='w-10 h-10 mb-4 text-primary' />
                <h3 className='text-2xl mb-3'>Honest communication</h3>
                <p className='text-muted-foreground'>
                  We'll tell you when something's a bad idea, when timelines are
                  unrealistic, and when we don't know the answer. No corporate
                  speak, no false promises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='container mx-auto px-4 py-20'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl md:text-5xl mb-8 text-center'>
            We're intentionally small
          </h2>
          <p className='text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
            Not because we can't scale, but because we don't want to. Small
            teams do better work, communicate more clearly, and don't need three
            layers of management to make decisions.
          </p>

          <div className='bg-accent p-8 rounded-xl border border-border'>
            <p className='text-lg text-muted-foreground mb-4'>
              <strong>Our backgrounds:</strong> Between us, we've worked for big
              tech companies like Google, Shopify, Verizon, and various
              successful (and not-so-successful) startups. We've built systems
              that handle millions of requests, designed APIs used by thousands
              of developers, and led teams through countless product launches.
            </p>
            <p className='text-lg text-muted-foreground'>
              <strong>What we learned:</strong> That most of that complexity was
              unnecessary. That the best solutions are usually the simplest
              ones. That treating people well actually leads to better outcomes.
              Revolutionary, we know.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='container mx-auto px-4 py-20 border-t'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-4xl mb-6'>Want to work with us?</h2>
          <p className='text-xl text-muted-foreground mb-8'>
            We're selective about who we work with—not because we're snobs, but
            because life's too short to work on projects we don't believe in.
          </p>
          <a
            href='mailto:hello@gudenuf.com'
            className='inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg'
          >
            Let's talk
          </a>
        </div>
      </section>
    </div>
  );
}
