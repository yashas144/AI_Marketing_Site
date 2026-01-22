export const metadata = { title: "Pricing" };

const TIERS = [
  { name: "Starter", price: "$29", note: "For solopreneurs", items: ["AI intake (basic)", "Lead inbox", "1 phone/SMS line"] },
  { name: "Pro", price: "$79", note: "For growing teams", items: ["Advanced qualification", "Tags + notes", "Campaigns", "Analytics"] },
  { name: "Business", price: "Talk to us", note: "Custom setup", items: ["Integrations", "Custom routing", "Priority support"] },
];

export default function PricingPage() {
  return (
    <div className="container section">
      <h1>Pricing</h1>
      <p className="lead">Simple plans that scale with your workload.</p>

      <div className="grid3">
        {TIERS.map((t) => (
          <div key={t.name} className="card">
            <div className="tierTop">
              <h3>{t.name}</h3>
              <div className="price">{t.price}<span className="muted">/mo</span></div>
              <p className="muted">{t.note}</p>
            </div>
            <ul className="list">
              {t.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
            <a className="btnPrimary block" href="/contact">Get started</a>
          </div>
        ))}
      </div>
    </div>
  );
}
