import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, ChevronRight } from "lucide-react";
import Header from "../components/Header";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy | Donna Drive</title>
        <meta name="description" content="Donna Drive Privacy Policy — how we collect, use, store, and protect your personal data in compliance with UK GDPR, EU GDPR, and CCPA." />
        <link rel="canonical" href="https://donnadrive.co.uk/privacy-policy" />
      </Helmet>

      <Header />

      <div className="container mx-auto px-4 py-10 lg:py-16 max-w-3xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">Privacy Policy</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">Donna Drive Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">Last updated: 13th November 2025</p>
        </div>

        <div className="border-t border-border mb-8" />

        {/* Content */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">1. Introduction</h2>
            <p className="text-muted-foreground mb-3">
              Donna Drive respects your privacy and is committed to protecting your personal data.
              This Privacy Policy explains how we collect, use, store, and protect your information when you use:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-muted-foreground">
              <li>The Donna Drive website and web application,</li>
              <li>Our mobile apps,</li>
              <li>Connected services (e.g., Google Calendar, WhatsApp notifications),</li>
              <li>And any related communications.</li>
            </ul>
            <p className="text-muted-foreground mb-3">We comply with:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-muted-foreground">
              <li>The UK Data Protection Act 2018 and the UK GDPR,</li>
              <li>The EU General Data Protection Regulation (GDPR) (Regulation (EU) 2016/679),</li>
              <li>The California Consumer Privacy Act (CCPA) (as amended by the CPRA), and</li>
              <li>Other applicable data protection laws.</li>
            </ul>
            <p className="text-muted-foreground">
              If you are located in California, the European Union, or the United Kingdom, you have specific rights under these laws — see Section 10.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">2. Who We Are</h2>
            <p className="text-muted-foreground mb-2"><strong className="text-foreground">Donna Drive Ltd</strong></p>
            <p className="text-muted-foreground mb-2">Registered Address: 8 Orford Road Endon</p>
            <p className="text-muted-foreground mb-2">Email: info@smarterwayy.co.uk</p>
            <p className="text-muted-foreground mb-3">Data Protection Officer (DPO): Josh Yarwood</p>
            <p className="text-muted-foreground">
              Donna Drive provides scheduling, communication, and business management tools for driving instructors and learners.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">3. What Data We Collect</h2>
            <p className="text-muted-foreground mb-4">We may collect and process the following categories of personal data:</p>
            <div className="overflow-x-auto rounded-lg border border-border mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border-b border-border p-3 text-left text-foreground font-semibold">Category</th>
                    <th className="border-b border-border p-3 text-left text-foreground font-semibold">Examples</th>
                    <th className="border-b border-border p-3 text-left text-foreground font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ['Account Data', 'Name, email address, phone number, password', 'Account creation, authentication'],
                    ['Profile & Business Data', 'Instructor name, business name, address, pricing, schedules', 'Displaying business listings, managing bookings'],
                    ['Learner Data', 'Name, contact info, booking history, driving test schedule', 'Booking and communication management'],
                    ['Calendar Data', 'Appointment details (date, time, location)', 'Integration with Google Calendar and scheduling'],
                    ['Payment Data', 'Payment method, transaction IDs (via payment processor)', 'Processing payments and refunds'],
                    ['Technical Data', 'IP address, device type, browser info, usage logs', 'Improving performance and security'],
                    ['Communications Data', 'Messages, emails, WhatsApp notifications', 'Customer support and transactional updates'],
                  ].map(([cat, ex, purpose]) => (
                    <tr key={cat} className="border-b border-border last:border-0">
                      <td className="p-3 font-medium text-foreground">{cat}</td>
                      <td className="p-3">{ex}</td>
                      <td className="p-3">{purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground">We do not collect sensitive personal data (e.g., health, religion, biometric data) unless required and explicitly consented to.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">4. How We Collect Data</h2>
            <p className="text-muted-foreground mb-2">We collect data:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Directly from you (when you register, book lessons, or contact us),</li>
              <li>Automatically through cookies and analytics tools,</li>
              <li>From third parties, e.g. Google (Calendar data), payment providers, or WhatsApp API providers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">5. Legal Basis for Processing (GDPR / UK GDPR)</h2>
            <p className="text-muted-foreground mb-2">We process your data under one or more of the following lawful bases:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-muted-foreground">
              <li><strong className="text-foreground">Contract:</strong> to provide the services you request.</li>
              <li><strong className="text-foreground">Consent:</strong> when you opt into specific features (e.g., marketing emails).</li>
              <li><strong className="text-foreground">Legitimate Interest:</strong> to improve our platform, prevent fraud, and ensure security.</li>
              <li><strong className="text-foreground">Legal Obligation:</strong> to comply with applicable laws (e.g., accounting or tax).</li>
            </ul>
            <p className="text-muted-foreground">You may withdraw your consent at any time (see Section 10).</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">6. How We Use Your Data</h2>
            <p className="text-muted-foreground mb-2">We use your data to:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-muted-foreground">
              <li>Provide and manage bookings and communication between instructors and learners.</li>
              <li>Sync schedules with Google Calendar (with your explicit authorisation).</li>
              <li>Send notifications and reminders (via email, SMS, or WhatsApp).</li>
              <li>Manage payments and refunds securely.</li>
              <li>Improve our website, apps, and customer experience.</li>
              <li>Enforce our Terms of Service and prevent misuse or fraud.</li>
            </ul>
            <p className="font-semibold text-foreground">We do not sell or rent your personal data to third parties.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">7. Data Sharing and Processors</h2>
            <p className="text-muted-foreground mb-4">We share data only with trusted partners and service providers necessary to deliver the service:</p>
            <div className="overflow-x-auto rounded-lg border border-border mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border-b border-border p-3 text-left text-foreground font-semibold">Partner</th>
                    <th className="border-b border-border p-3 text-left text-foreground font-semibold">Purpose</th>
                    <th className="border-b border-border p-3 text-left text-foreground font-semibold">Location / Safeguard</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ['Google LLC', 'Calendar sync & OAuth authentication', 'US – Data protected under EU–US Data Privacy Framework'],
                    ['Twilio / 360Dialog / Meta', 'WhatsApp Business API notifications', 'US / EU – contractual SCCs applied'],
                    ['Payment Processor (e.g., Stripe)', 'Secure payment processing', 'Global – PCI-DSS compliant'],
                    ['Hosting Provider (e.g., AWS, Azure)', 'Secure data storage and backups', 'Data centers in [Region]'],
                    ['Analytics Tools (e.g., Google Analytics)', 'Service usage and performance analysis', 'Anonymized / aggregated data'],
                  ].map(([partner, purpose, location]) => (
                    <tr key={partner} className="border-b border-border last:border-0">
                      <td className="p-3 font-medium text-foreground">{partner}</td>
                      <td className="p-3">{purpose}</td>
                      <td className="p-3">{location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground">All third-party processors are bound by Data Processing Agreements (DPAs) to ensure compliance with GDPR and CCPA.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">8. Data Retention</h2>
            <p className="text-muted-foreground mb-2">We retain personal data only as long as necessary to:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-muted-foreground">
              <li>Provide our services,</li>
              <li>Comply with legal and accounting obligations, or</li>
              <li>Resolve disputes.</li>
            </ul>
            <p className="text-muted-foreground mb-2">When no longer needed, data is securely deleted or anonymized.</p>
            <p className="text-muted-foreground mb-2"><strong className="text-foreground">Retention examples:</strong></p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Account data: until you close your account or request deletion.</li>
              <li>Transaction records: 6 years (for tax and accounting compliance).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">9. Data Security</h2>
            <p className="text-muted-foreground mb-2">We take robust technical and organisational measures to protect your data:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-muted-foreground">
              <li>HTTPS and SSL/TLS encryption for all communications.</li>
              <li>Encrypted databases and secure backups.</li>
              <li>OAuth 2.0 authentication for API access (Google, WhatsApp).</li>
              <li>Regular security audits and access controls.</li>
              <li>Staff confidentiality and data protection training.</li>
            </ul>
            <p className="text-muted-foreground">If a data breach occurs, affected users and regulators will be notified as required by law.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">10. Your Rights</h2>
            <p className="text-muted-foreground mb-4">Depending on your jurisdiction, you have the following rights:</p>
            <h3 className="font-semibold text-foreground mt-4 mb-2">Under GDPR / UK GDPR</h3>
            <ul className="list-disc pl-6 space-y-1 mb-4 text-muted-foreground">
              <li>Access your personal data.</li>
              <li>Request correction or deletion.</li>
              <li>Request data portability.</li>
              <li>Object to or restrict processing.</li>
              <li>Withdraw consent at any time.</li>
            </ul>
            <h3 className="font-semibold text-foreground mt-4 mb-2">Under CCPA (California)</h3>
            <ul className="list-disc pl-6 space-y-1 mb-4 text-muted-foreground">
              <li>Know what personal data is collected, used, or shared.</li>
              <li>Request deletion of your data.</li>
              <li>Opt out of data "sale" or sharing (we do not sell data).</li>
              <li>Non-discrimination for exercising privacy rights.</li>
            </ul>
            <p className="text-muted-foreground mb-1">To exercise any of these rights, contact us at:</p>
            <p className="text-primary font-medium mb-1">info@smarterwayy.co.uk</p>
            <p className="text-muted-foreground">We will respond within 30 days (or 45 days for CCPA requests).</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">11. International Data Transfers</h2>
            <p className="text-muted-foreground mb-2">If your data is transferred outside the UK/EU, we ensure adequate safeguards:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Countries with an adequacy decision, or</li>
              <li>Standard Contractual Clauses (SCCs) approved by the European Commission.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">12. Use of Cookies</h2>
            <p className="text-muted-foreground mb-2">We use cookies and similar technologies for:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-muted-foreground">
              <li>Site functionality,</li>
              <li>Analytics,</li>
              <li>Remembering user preferences.</li>
            </ul>
            <p className="text-muted-foreground">You can manage or disable cookies via your browser settings.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">13. Google & WhatsApp Data Use</h2>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>We access Google Calendar data only with your explicit consent through Google OAuth 2.0.</li>
              <li>We comply with Google's API Services User Data Policy, including the Limited Use Policy.</li>
              <li>WhatsApp communication complies with Meta's WhatsApp Business Platform Terms — messages are sent only to users who opt in.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">14. Children's Privacy</h2>
            <p className="text-muted-foreground mb-2">Donna Drive is not intended for users under 16 years of age.</p>
            <p className="text-muted-foreground mb-2">We do not knowingly collect personal data from minors.</p>
            <p className="text-muted-foreground">If you believe we have done so, contact us to remove it immediately.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">15. Changes to This Policy</h2>
            <p className="text-muted-foreground mb-2">We may update this Privacy Policy periodically.</p>
            <p className="text-muted-foreground">If significant changes are made, we'll notify users via email or on our platform.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">16. Contact Us</h2>
            <p className="text-muted-foreground mb-1"><strong className="text-foreground">Donna Drive Ltd</strong></p>
            <p className="text-muted-foreground mb-1">Email: info@smarterwayy.co.uk</p>
            <p className="text-muted-foreground mb-1">Address: 8 Orford Road Endon</p>
            <p className="text-muted-foreground">Data Protection Officer: Josh Yarwood</p>
          </section>
        </div>

        <div className="mt-10 pt-8 border-t border-border flex flex-wrap gap-4 items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Button>
          </Link>
          <Link to="/terms-of-service" className="text-sm text-primary hover:underline">
            View Terms of Service →
          </Link>
        </div>
      </div>
    </div>
  );
}
