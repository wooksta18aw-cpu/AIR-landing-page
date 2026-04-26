export default function AirLandingPage() {
  const GOOGLE_PLAY_URL =
    'https://play.google.com/store/apps/details?id=app.rork.invoicing_app_0whxrcd&pcampaignid=web_share';

  const APP_STORE_URL = '#';

  const AndroidIcon = ({ className = 'h-5 w-5' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.6 9.48l1.84-3.18a.5.5 0 10-.86-.5l-1.86 3.22A10.2 10.2 0 0012 7.9a10.2 10.2 0 00-4.72 1.12L5.42 5.8a.5.5 0 10-.86.5L6.4 9.48A8.14 8.14 0 003.5 15.7V17h17v-1.3a8.14 8.14 0 00-2.9-6.22zM8.5 14a1 1 0 110-2 1 1 0 010 2zm7 0a1 1 0 110-2 1 1 0 010 2z" />
    </svg>
  );

  const AppleIcon = ({ className = 'h-5 w-5' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.37 1.75c0 1.1-.44 2.12-1.15 2.9-.76.82-1.98 1.46-3 1.37-.12-1.05.43-2.17 1.11-2.94.76-.86 2.06-1.5 3.04-1.33zM20.6 17.26c-.52 1.18-.77 1.7-1.44 2.74-.94 1.45-2.26 3.26-3.9 3.28-1.45.02-1.83-.95-3.8-.94-1.98.01-2.39.96-3.84.94-1.64-.02-2.9-1.65-3.84-3.1-2.63-4.07-2.9-8.85-1.28-11.39 1.15-1.8 2.96-2.85 4.66-2.85 1.73 0 2.82.96 4.25.96 1.39 0 2.24-.96 4.25-.96 1.52 0 3.14.83 4.29 2.27-3.77 2.07-3.16 7.45.65 9.05z" />
    </svg>
  );

  const CheckIcon = ({ className = 'h-4 w-4' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const DownloadIcon = ({ className = 'h-6 w-6' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const BellIcon = ({ className = 'h-6 w-6' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 17H9m10-1.5c-1.3-1.1-2-2.7-2-4.4V9a5 5 0 0 0-10 0v2.1c0 1.7-.7 3.3-2 4.4V17h14v-1.5zM10 20h4"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const BriefcaseIcon = ({ className = 'h-6 w-6' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2m-9 4h12M5 7h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const features = [
    {
      icon: <BellIcon />,
      title: 'Automated invoice reminders',
      text: 'Send professional reminders automatically before and after due dates, so you spend less time chasing payments manually.',
    },
    {
      icon: <DownloadIcon />,
      title: 'Export invoices anytime',
      text: 'Download clean CSV spreadsheets or branded PDF reports whenever your accountant needs them — without handing over app access.',
    },
    {
      icon: <BriefcaseIcon />,
      title: 'Built for trades and small businesses',
      text: 'Ideal for trades, freelancers, and service businesses that want faster payments without a bloated accounting system.',
    },
  ];

  const steps = [
    'Create your customer and invoice.',
    'Set the due date and record payments.',
    'AIR automatically follows up.',
    'Export invoices as CSV or PDF.',
  ];

  const faqs = [
    {
      q: 'What does AIR do?',
      a: 'AIR helps small businesses create invoices and automatically send reminder emails so unpaid invoices are followed up consistently.',
    },
    {
      q: 'Can I export my invoices?',
      a: 'Yes. AIR lets you export clean CSV spreadsheets or branded PDF invoice reports at any time, making it easier to send records to your accountant.',
    },
    {
      q: 'Is this a full accounting app?',
      a: 'No. AIR is focused on invoicing, reminders, and simple invoice records, with a cleaner experience for businesses that mainly want to get paid faster.',
    },
    {
      q: 'Is there a free trial?',
      a: 'Yes. AIR launches with a 14-day free trial so new users can test the app before subscribing.',
    },
    {
      q: 'What is included at launch?',
      a: 'The launch version includes invoice creation, customer management, dashboard tracking, automated invoice reminders, CSV export, and branded PDF invoice reports.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-up {
          opacity: 0;
          animation: fadeUp 0.8s ease forwards;
        }

        .delay-1 { animation-delay: 0.08s; }
        .delay-2 { animation-delay: 0.16s; }
        .delay-3 { animation-delay: 0.24s; }
        .delay-4 { animation-delay: 0.32s; }
      `}</style>

      <section className="relative overflow-hidden bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-6 pt-8 pb-20 md:pt-10 md:pb-24">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="fade-up delay-1 lg:pt-4">
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center rounded-full bg-white/20 px-6 py-3 text-base font-semibold backdrop-blur">
                  Breathe easy with AIR
                </div>

                <div className="inline-flex items-center rounded-full bg-white/20 px-6 py-3 text-base font-semibold backdrop-blur">
                  Export invoices anytime
                </div>
              </div>

              <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
                Get paid faster
                <br />
                without chasing.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-50 md:text-xl">
                AIR automatically sends invoice reminders, tracks what is overdue, and keeps your
                cash flow moving — without the admin.
              </p>

              <div className="mt-8 max-w-xl">
                <div className="grid gap-4 sm:grid-cols-2">
                  <a
                    href={GOOGLE_PLAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-base font-bold text-blue-700 shadow-xl shadow-blue-950/15 transition duration-200 hover:scale-[1.02] hover:shadow-2xl"
                  >
                    <AndroidIcon />
                    Get AIR on Google Play
                  </a>

                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-base font-bold text-blue-700 shadow-xl shadow-blue-950/15 transition duration-200 hover:scale-[1.02] hover:shadow-2xl"
                  >
                    <AppleIcon />
                    Get AIR on iOS
                  </a>
                </div>

                <div className="mt-4 flex justify-center">
                  <a
                    href="#how-it-works"
                    className="inline-flex min-w-[220px] items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-6 py-4 text-base font-semibold text-white backdrop-blur transition duration-200 hover:scale-[1.02] hover:bg-white/15"
                  >
                    See how it works
                  </a>
                </div>
              </div>

              <div className="mt-8 grid max-w-xl gap-4 text-sm text-blue-50 sm:grid-cols-3">
                {['14-day free trial', 'Built for trades and small businesses', 'CSV and PDF exports'].map(
                  (item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-blue-700">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      <span className="leading-5">{item}</span>
                    </div>
                  ),
                )}
              </div>

              <div className="mt-6 max-w-xl rounded-2xl border border-blue-100 bg-blue-50 p-4 shadow-xl shadow-blue-950/10">
                <div className="flex gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <DownloadIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-blue-800">Export ready</p>
                    <p className="mt-1 text-sm leading-6 text-blue-700">
                      Download clean CSV files or branded PDF reports whenever your accountant
                      needs them.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-up delay-2 lg:justify-self-end">
              <div className="rounded-[32px] bg-white p-4 shadow-2xl shadow-blue-900/20">
                <div className="rounded-[28px] bg-slate-100 p-4">
                  <div className="rounded-3xl bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-500">Dashboard</p>
                        <h3 className="mt-1 text-xl font-bold text-slate-900">Your invoices</h3>
                      </div>

                      <div className="rounded-2xl bg-blue-100 px-3 py-2 text-sm font-semibold text-blue-700">
                        AIR
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl bg-blue-600 p-4 text-white">
                        <p className="text-sm text-blue-100">Total Revenue</p>
                        <p className="mt-2 text-2xl font-bold">£4,820</p>
                      </div>

                      <div className="rounded-2xl bg-amber-500 p-4 text-white">
                        <p className="text-sm text-amber-50">Pending</p>
                        <p className="mt-2 text-2xl font-bold">£1,140</p>
                      </div>

                      <div className="rounded-2xl bg-red-500 p-4 text-white">
                        <p className="text-sm text-red-50">Overdue</p>
                        <p className="mt-2 text-2xl font-bold">£380</p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      {[
                        {
                          number: 'INV-2026-0004',
                          desc: 'Electrical work',
                          status: 'OVERDUE',
                          amount: '£380',
                          cardClass: 'border-red-200 bg-red-50 border-l-red-600',
                          badgeClass: 'bg-red-100 text-red-700',
                        },
                        {
                          number: 'INV-2026-0003',
                          desc: 'Repair of downstairs sink',
                          status: 'SENT',
                          amount: '£240',
                          cardClass: 'border-blue-200 bg-blue-50 border-l-blue-600',
                          badgeClass: 'bg-blue-100 text-blue-700',
                        },
                        {
                          number: 'INV-2026-0002',
                          desc: 'Boiler servicing',
                          status: 'PAID',
                          amount: '£120',
                          cardClass: 'border-green-200 bg-green-50 border-l-green-600',
                          badgeClass: 'bg-green-100 text-green-700',
                        },
                        {
                          number: 'INV-2026-0001',
                          desc: 'Kitchen fitting deposit',
                          status: 'PARTIALLY PAID',
                          amount: '£560',
                          cardClass: 'border-amber-200 bg-amber-50 border-l-amber-500',
                          badgeClass: 'bg-amber-100 text-amber-700',
                        },
                      ].map((invoice) => (
                        <div
                          key={invoice.number}
                          className={`rounded-2xl border border-l-[6px] p-4 ${invoice.cardClass}`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="font-semibold text-slate-900">{invoice.number}</p>
                              <p className="mt-1 text-sm text-slate-600">{invoice.desc}</p>
                            </div>

                            <div className="text-right">
                              <p
                                className={`inline-flex rounded-lg px-2.5 py-1 text-[11px] font-bold ${invoice.badgeClass}`}
                              >
                                {invoice.status}
                              </p>
                              <p className="mt-2 font-semibold text-slate-900">{invoice.amount}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards section */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`fade-up rounded-3xl bg-white p-8 text-slate-900 shadow-sm ring-1 ring-slate-200 ${
                  index === 0 ? 'delay-1' : index === 1 ? 'delay-2' : 'delay-3'
                }`}
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/25">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section
        id="how-it-works"
        className="bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 px-6 py-20 text-white"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="fade-up delay-1 rounded-[32px] bg-slate-900 p-8 text-white shadow-xl shadow-blue-950/20">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
                Export without the hassle
              </p>
              <h3 className="mt-3 text-3xl font-bold text-white">
                Your invoice data stays yours.
              </h3>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Export anytime as CSV or PDF. No need to give your accountant app access just to
                share your records.
              </p>

              <div className="mt-7 space-y-3">
                {['CSV spreadsheets', 'Branded PDF reports', 'Year filters for quick records'].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3 text-white">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="font-semibold">{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div>
              <div className="max-w-3xl fade-up delay-1">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-100">
                  How it works
                </p>
                <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                  A simpler way to stay on top of unpaid invoices
                </h2>
                <p className="mt-4 text-lg leading-8 text-blue-50">
                  AIR handles the follow-ups. You stay in control — and your invoice records are
                  always easy to export.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {steps.map((step, index) => (
                  <div
                    key={step}
                    className={`fade-up rounded-2xl bg-white px-5 py-4 text-slate-900 shadow-xl shadow-blue-950/10 ring-1 ring-white/30 ${
                      index === 0
                        ? 'delay-1'
                        : index === 1
                          ? 'delay-2'
                          : index === 2
                            ? 'delay-3'
                            : 'delay-4'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-base font-bold text-white">
                        {index + 1}
                      </div>

                      <p className="flex-1 text-sm font-bold leading-6 text-slate-900">{step}</p>

                      {index === 3 ? (
                        <div className="flex shrink-0 flex-wrap gap-2">
                          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                            CSV
                          </span>
                          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                            PDF
                          </span>
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AIR section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="fade-up delay-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Why AIR
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Built for getting paid faster, not for drowning you in features
            </h2>

            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
              <p>
                Most accounting tools do a hundred things. AIR focuses on one core problem: unpaid
                invoices that need following up.
              </p>
              <p>
                That means a simpler workflow, cleaner mobile experience, automated reminders, and
                easy invoice exports when you need to send records to your accountant.
              </p>
              <p>
                Export clean CSV spreadsheets or branded PDF reports anytime — without giving your
                accountant access to the whole app.
              </p>
            </div>
          </div>

          <div className="fade-up delay-2">
            <div className="rounded-[32px] bg-slate-900 p-8 text-white shadow-xl transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Launch pricing
              </p>

              <h3 className="mt-3 text-4xl font-bold">
                £7.99
                <span className="text-lg font-medium text-slate-300">/month</span>
              </h3>

              <p className="mt-4 text-slate-300">
                Includes the AIR launch plan with invoice creation, tracking, automated reminders,
                CSV export, and branded PDF invoice reports.
              </p>

              <ul className="mt-6 space-y-3 text-slate-100">
                <li>14-day free trial</li>
                <li>Unlimited invoice reminders</li>
                <li>Customer and invoice management</li>
                <li>Simple dashboard and status tracking</li>
                <li>CSV and PDF invoice exports</li>
              </ul>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={GOOGLE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-500 px-6 py-4 text-base font-semibold text-white transition duration-200 hover:scale-[1.01] hover:bg-blue-400"
                >
                  <AndroidIcon />
                  Android
                </a>

                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-500 px-6 py-4 text-base font-semibold text-white transition duration-200 hover:scale-[1.01] hover:bg-blue-400"
                >
                  <AppleIcon />
                  iOS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center fade-up delay-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Common questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className={`fade-up rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 p-6 text-white shadow-xl shadow-blue-700/20 ${
                  index === 0
                    ? 'delay-1'
                    : index === 1
                      ? 'delay-2'
                      : index === 2
                        ? 'delay-3'
                        : 'delay-4'
                }`}
              >
                <h3 className="text-lg font-bold text-white">{faq.q}</h3>
                <p className="mt-3 leading-7 text-blue-50">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="download" className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[36px] bg-gradient-to-r from-blue-800 to-blue-600 px-8 py-12 text-white shadow-2xl md:px-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div className="fade-up delay-1">
              <h2 className="text-3xl font-bold md:text-4xl">Start getting paid on time.</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-50">
                Download AIR on iOS or Android and start your 14-day free trial.
              </p>
            </div>

            <div className="fade-up delay-2 grid gap-3 sm:grid-cols-2 md:justify-self-end">
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-semibold text-blue-700 shadow-lg transition duration-200 hover:scale-[1.01] hover:shadow-xl md:w-auto"
              >
                <AndroidIcon />
                Android
              </a>

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-semibold text-blue-700 shadow-lg transition duration-200 hover:scale-[1.01] hover:shadow-xl md:w-auto"
              >
                <AppleIcon />
                iOS
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}