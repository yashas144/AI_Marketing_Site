export const metadata = { title: "Features" };

const FEATURES = [
  { title: "AI receptionist", desc: "Answers, qualifies, routes, and follows up automatically." },
  { title: "Website + lead forms", desc: "Fast pages with forms that go straight into your pipeline." },
  { title: "Mini-CRM", desc: "Contacts, tags, notes, and statuses—simple and effective." },
  { title: "Payments-ready workflows", desc: "Send invoices and collect deposits (integrations ready)." },
  { title: "SMS campaigns", desc: "Broadcast offers, reminders, and review requests." },
  { title: "Analytics", desc: "Track response time, booked jobs, and campaign performance." },
];

export default function FeaturesPage() {
  return (
    <div className="container section">
      <h1>Features</h1>
      <p className="lead">Everything you need to capture leads and convert them—without extra tools.</p>

      <div className="grid3">
        {FEATURES.map((f) => (
          <div key={f.title} className="card">
            <h3>{f.title}</h3>
            <p className="muted">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
