import { Link } from 'react-router';
import { Check, Leaf, Recycle, Users, Wrench, X } from 'lucide-react';

const beliefs = [
  {
    title: 'Software is a tool, not a destination.',
    body: [
      "A hammer doesn't ask for your attention. It waits in a drawer, does its job, and goes back in the drawer. That's the standard we hold our work to.",
      'Good software finishes. It answers the question, completes the task, closes the loop, and returns you to your life. Every extra screen, upsell, and "while you\'re here" is a tax on someone\'s day.',
    ],
  },
  {
    title: "We're not trying to replace people.",
    body: [
      'Automation should take the tedium, not the part of the work that gives people meaning. Fewer spreadsheets to reconcile, fewer forms to retype, fewer 11pm fire drills.',
      'The goal is a person with more time and more capability — not a person with no job and a chatbot where their colleague used to be.',
    ],
  },
  {
    title: 'Engagement is not a virtue.',
    body: [
      '"Time on site" treats human attention as inventory to be sold. We will not optimize for it. No infinite scroll, no manufactured streaks, no dark patterns, no notifications engineered to pull you back in.',
      'If you open our software less this year than last year and still get your work done, that is a win, and we will say so out loud.',
    ],
  },
  {
    title: 'Enough is a real number.',
    body: [
      'There is a version of every company that squeezes a little harder: one more tier, one more ad slot, one more thing to mine, one more percent of margin taken out of somebody who had no way to say no.',
      "We are not trying to extract every ounce of value from the universe. We're not curious where the limit is. We intend to find a size that works and then stop.",
    ],
  },
  {
    title: 'Sustainable in every way.',
    body: [
      'Not just carbon — though carbon counts. Sustainability has to hold up ecologically, economically, technically, and humanly at the same time, or it was never sustainability.',
      'A system that burns out the people maintaining it is as broken as one that burns out the planet. Both eventually stop working.',
    ],
  },
];

const dimensions = [
  {
    icon: Leaf,
    title: 'Ecological',
    body: 'Less compute, less infrastructure, less hardware churn. The greenest feature is the one we talked you out of building.',
  },
  {
    icon: Recycle,
    title: 'Economic',
    body: 'Profitable at the size we are, with no obligation to be bigger next year. No investor clock forcing us to change who we serve.',
  },
  {
    icon: Wrench,
    title: 'Technical',
    body: 'Boring, documented, legible code. Systems that survive a decade and a staff turnover without a rewrite.',
  },
  {
    icon: Users,
    title: 'Human',
    body: '32–40 hour weeks, real rest, honest timelines. Work that is still worth doing on a Tuesday in ten years.',
  },
];

const practices = [
  'Ship the smallest thing that genuinely solves the problem, then stop',
  'Design for the moment someone closes the tab and gets on with their day',
  'Talk clients out of features that only serve a metric',
  'Automate the tedium, leave the judgment with the humans',
  'Write documentation so you are never locked into working with us',
  'Run lean infrastructure and measure what it costs the world to run',
];

const refusals = [
  'Engagement loops, streaks, and notification pressure',
  'Dark patterns, forced accounts, and cancellation mazes',
  'Surveillance and data collection we cannot justify to your users',
  'Replacing people with automation to cut a headcount line',
  'Growth-at-all-costs roadmaps and extractive pricing',
  'Systems that only stay standing if someone works weekends',
];

export function Manifesto() {
  return (
    <div>
      {/* Hero Section */}
      <section className='container mx-auto px-4 py-20 md:py-28'>
        <div className='max-w-4xl mx-auto'>
          <p className='text-sm uppercase tracking-widest text-muted-foreground mb-6'>
            Our manifesto
          </p>
          <h1 className='text-4xl md:text-6xl mb-8'>
            Technology should solve human problems, then{' '}
            <span className='italic'>get out of the way</span>.
          </h1>
          <p className='text-xl md:text-2xl text-muted-foreground'>
            That's the core of it. Everything else on this site — the services,
            the pricing, the benefit corporation paperwork — is a footnote to
            that one sentence.
          </p>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className='container mx-auto px-4 pb-20'>
        <div className='max-w-3xl mx-auto space-y-16'>
          {beliefs.map((belief, index) => (
            <div key={belief.title}>
              <div className='text-3xl text-primary mb-3'>
                {String(index + 1).padStart(2, '0')}
              </div>
              <h2 className='text-3xl md:text-4xl mb-5'>{belief.title}</h2>
              {belief.body.map((paragraph) => (
                <p key={paragraph} className='text-lg text-muted-foreground mb-4'>
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Sustainability Dimensions */}
      <section className='bg-accent py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto'>
            <h2 className='text-4xl md:text-5xl mb-4 text-center'>
              Four kinds of sustainable
            </h2>
            <p className='text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
              A project has to clear all four to count. Trading one for another
              is just moving the bill to someone who isn't in the room.
            </p>

            <div className='grid md:grid-cols-2 gap-6'>
              {dimensions.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className='bg-card p-8 rounded-xl border border-border'
                >
                  <Icon className='w-10 h-10 mb-4 text-primary' />
                  <h3 className='text-2xl mb-3'>{title}</h3>
                  <p className='text-muted-foreground'>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className='container mx-auto px-4 py-20'>
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-4xl md:text-5xl mb-12 text-center'>
            What that looks like in the work
          </h2>

          <div className='grid md:grid-cols-2 gap-10'>
            <div>
              <h3 className='text-2xl mb-6'>What we do</h3>
              <div className='space-y-4'>
                {practices.map((item) => (
                  <div key={item} className='flex gap-3'>
                    <Check className='w-6 h-6 text-primary flex-shrink-0 mt-1' />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className='text-2xl mb-6'>What we won't build</h3>
              <div className='space-y-4'>
                {refusals.map((item) => (
                  <div key={item} className='flex gap-3'>
                    <X className='w-6 h-6 text-red-600 flex-shrink-0 mt-1' />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className='container mx-auto px-4 py-20 border-t'>
        <div className='max-w-3xl mx-auto text-center'>
          <p className='text-2xl md:text-3xl mb-8'>
            We would rather build a small number of useful things that last than
            a large number of things that need you.
          </p>
          <p className='text-xl text-muted-foreground mb-10'>
            If that sounds like the kind of software you want to be responsible
            for, we should talk.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              to='/contact'
              className='inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg'
            >
              Start a conversation
            </Link>
            <Link
              to='/services'
              className='inline-flex items-center justify-center px-8 py-3 border-2 border-primary rounded-lg hover:bg-accent transition-colors text-lg'
            >
              See what we do
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
