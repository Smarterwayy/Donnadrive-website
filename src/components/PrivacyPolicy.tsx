import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const PrivacyPolicy = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="underline hover:text-primary-foreground transition-colors text-xs sm:text-sm">
          Privacy Policy
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[85vh] p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <DialogTitle className="text-xl sm:text-2xl font-bold">
            Donna Drive Privacy Policy
          </DialogTitle>
          <p className="text-sm text-muted-foreground">Last updated: 13th November 2025</p>
        </DialogHeader>
        <ScrollArea className="h-[60vh] px-6 py-4">
          <div className="space-y-6 text-sm sm:text-base leading-relaxed">
            {/* Section 1 */}
            <section>
              <h2 className="text-lg font-bold mb-3">1. Introduction</h2>
              <p className="mb-3">
                Donna Drive respects your privacy and is committed to protecting your personal data.
                This Privacy Policy explains how we collect, use, store, and protect your information when you use:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>The Donna Drive website and web application,</li>
                <li>Our mobile apps,</li>
                <li>Connected services (e.g., Google Calendar, WhatsApp notifications),</li>
                <li>And any related communications.</li>
              </ul>
              <p className="mb-3">We comply with:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>The UK Data Protection Act 2018 and the UK GDPR,</li>
                <li>The EU General Data Protection Regulation (GDPR) (Regulation (EU) 2016/679),</li>
                <li>The California Consumer Privacy Act (CCPA) (as amended by the CPRA), and</li>
                <li>Other applicable data protection laws.</li>
              </ul>
              <p>
                If you are located in California, the European Union, or the United Kingdom, you have specific rights under these laws — see Section 10.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-lg font-bold mb-3">2. Who We Are</h2>
              <p className="mb-2"><strong>Donna Drive Ltd</strong></p>
              <p className="mb-2">Registered Address: 8 Orford Road Endon</p>
              <p className="mb-2">Email: Info@smarterwayy.co.uk</p>
              <p className="mb-3">Data Protection Officer (DPO): Josh Yarwood</p>
              <p>
                Donna Drive provides scheduling, communication, and business management tools for driving instructors and learners.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-lg font-bold mb-3">3. What Data We Collect</h2>
              <p className="mb-3">We may collect and process the following categories of personal data:</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border text-sm mb-3">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-2 text-left">Category</th>
                      <th className="border border-border p-2 text-left">Examples</th>
                      <th className="border border-border p-2 text-left">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-2">Account Data</td>
                      <td className="border border-border p-2">Name, email address, phone number, password</td>
                      <td className="border border-border p-2">Account creation, authentication</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">Profile & Business Data</td>
                      <td className="border border-border p-2">Instructor name, business name, address, pricing, schedules</td>
                      <td className="border border-border p-2">Displaying business listings, managing bookings</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">Learner Data</td>
                      <td className="border border-border p-2">Name, contact info, booking history, driving test schedule</td>
                      <td className="border border-border p-2">Booking and communication management</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">Calendar Data</td>
                      <td className="border border-border p-2">Appointment details (date, time, location)</td>
                      <td className="border border-border p-2">Integration with Google Calendar and scheduling</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">Payment Data</td>
                      <td className="border border-border p-2">Payment method, transaction IDs (via payment processor)</td>
                      <td className="border border-border p-2">Processing payments and refunds</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">Technical Data</td>
                      <td className="border border-border p-2">IP address, device type, browser info, usage logs</td>
                      <td className="border border-border p-2">Improving performance and security</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">Communications Data</td>
                      <td className="border border-border p-2">Messages, emails, WhatsApp notifications</td>
                      <td className="border border-border p-2">Customer support and transactional updates</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                We do not collect sensitive personal data (e.g., health, religion, biometric data) unless required and explicitly consented to.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-lg font-bold mb-3">4. How We Collect Data</h2>
              <p className="mb-2">We collect data:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Directly from you (when you register, book lessons, or contact us),</li>
                <li>Automatically through cookies and analytics tools,</li>
                <li>From third parties, e.g. Google (Calendar data), payment providers, or WhatsApp API providers.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-lg font-bold mb-3">5. Legal Basis for Processing (GDPR / UK GDPR)</h2>
              <p className="mb-2">We process your data under one or more of the following lawful bases:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li><strong>Contract:</strong> to provide the services you request.</li>
                <li><strong>Consent:</strong> when you opt into specific features (e.g., marketing emails).</li>
                <li><strong>Legitimate Interest:</strong> to improve our platform, prevent fraud, and ensure security.</li>
                <li><strong>Legal Obligation:</strong> to comply with applicable laws (e.g., accounting or tax).</li>
              </ul>
              <p>You may withdraw your consent at any time (see Section 10).</p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-lg font-bold mb-3">6. How We Use Your Data</h2>
              <p className="mb-2">We use your data to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Provide and manage bookings and communication between instructors and learners.</li>
                <li>Sync schedules with Google Calendar (with your explicit authorisation).</li>
                <li>Send notifications and reminders (via email, SMS, or WhatsApp).</li>
                <li>Manage payments and refunds securely.</li>
                <li>Improve our website, apps, and customer experience.</li>
                <li>Enforce our Terms of Service and prevent misuse or fraud.</li>
              </ul>
              <p className="font-semibold">We do not sell or rent your personal data to third parties.</p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-lg font-bold mb-3">7. Data Sharing and Processors</h2>
              <p className="mb-3">We share data only with trusted partners and service providers necessary to deliver the service:</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border text-sm mb-3">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-2 text-left">Partner</th>
                      <th className="border border-border p-2 text-left">Purpose</th>
                      <th className="border border-border p-2 text-left">Location / Safeguard</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-2">Google LLC</td>
                      <td className="border border-border p-2">Calendar sync & OAuth authentication</td>
                      <td className="border border-border p-2">US – Data protected under EU–US Data Privacy Framework</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">Twilio / 360Dialog / Meta</td>
                      <td className="border border-border p-2">WhatsApp Business API notifications</td>
                      <td className="border border-border p-2">US / EU – contractual SCCs applied</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">Payment Processor (e.g., Stripe)</td>
                      <td className="border border-border p-2">Secure payment processing</td>
                      <td className="border border-border p-2">Global – PCI-DSS compliant</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">Hosting Provider (e.g., AWS, Azure)</td>
                      <td className="border border-border p-2">Secure data storage and backups</td>
                      <td className="border border-border p-2">Data centers in [Region]</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">Analytics Tools (e.g., Google Analytics)</td>
                      <td className="border border-border p-2">Service usage and performance analysis</td>
                      <td className="border border-border p-2">Anonymized / aggregated data</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>All third-party processors are bound by Data Processing Agreements (DPAs) to ensure compliance with GDPR and CCPA.</p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-lg font-bold mb-3">8. Data Retention</h2>
              <p className="mb-2">We retain personal data only as long as necessary to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Provide our services,</li>
                <li>Comply with legal and accounting obligations, or</li>
                <li>Resolve disputes.</li>
              </ul>
              <p className="mb-2">When no longer needed, data is securely deleted or anonymized.</p>
              <p className="mb-2"><strong>Retention examples:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Account data: until you close your account or request deletion.</li>
                <li>Transaction records: 6 years (for tax and accounting compliance).</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-lg font-bold mb-3">9. Data Security</h2>
              <p className="mb-2">We take robust technical and organisational measures to protect your data:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>HTTPS and SSL/TLS encryption for all communications.</li>
                <li>Encrypted databases and secure backups.</li>
                <li>OAuth 2.0 authentication for API access (Google, WhatsApp).</li>
                <li>Regular security audits and access controls.</li>
                <li>Staff confidentiality and data protection training.</li>
              </ul>
              <p>If a data breach occurs, affected users and regulators will be notified as required by law.</p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-lg font-bold mb-3">10. Your Rights</h2>
              <p className="mb-2">Depending on your jurisdiction, you have the following rights:</p>
              
              <h3 className="font-semibold mt-4 mb-2">Under GDPR / UK GDPR</h3>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Access your personal data.</li>
                <li>Request correction or deletion.</li>
                <li>Request data portability.</li>
                <li>Object to or restrict processing.</li>
                <li>Withdraw consent at any time.</li>
              </ul>

              <h3 className="font-semibold mt-4 mb-2">Under CCPA (California)</h3>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Know what personal data is collected, used, or shared.</li>
                <li>Request deletion of your data.</li>
                <li>Opt out of data "sale" or sharing (we do not sell data).</li>
                <li>Non-discrimination for exercising privacy rights.</li>
              </ul>

              <p className="mb-2">To exercise any of these rights, contact us at:</p>
              <p className="mb-2">📧 info@smarterwayy.co.uk</p>
              <p>We will respond within 30 days (or 45 days for CCPA requests).</p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-lg font-bold mb-3">11. International Data Transfers</h2>
              <p className="mb-2">If your data is transferred outside the UK/EU, we ensure adequate safeguards:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Countries with an adequacy decision, or</li>
                <li>Standard Contractual Clauses (SCCs) approved by the European Commission.</li>
              </ul>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-lg font-bold mb-3">12. Use of Cookies</h2>
              <p className="mb-2">We use cookies and similar technologies for:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Site functionality,</li>
                <li>Analytics,</li>
                <li>Remembering user preferences.</li>
              </ul>
              <p>You can manage or disable cookies via your browser settings. See our separate Cookie Policy for more details.</p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-lg font-bold mb-3">13. Google & WhatsApp Data Use</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>We access Google Calendar data only with your explicit consent through Google OAuth 2.0.</li>
                <li>We comply with Google's API Services User Data Policy, including the Limited Use Policy.</li>
                <li>WhatsApp communication complies with Meta's WhatsApp Business Platform Terms — messages are sent only to users who opt in.</li>
              </ul>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-lg font-bold mb-3">14. Children's Privacy</h2>
              <p className="mb-2">Donna Drive is not intended for users under 16 years of age.</p>
              <p className="mb-2">We do not knowingly collect personal data from minors.</p>
              <p>If you believe we have done so, contact us to remove it immediately.</p>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="text-lg font-bold mb-3">15. Changes to This Policy</h2>
              <p className="mb-2">We may update this Privacy Policy periodically.</p>
              <p>If significant changes are made, we'll notify users via email or on our platform.</p>
            </section>

            {/* Section 16 */}
            <section>
              <h2 className="text-lg font-bold mb-3">16. Contact Us</h2>
              <p className="mb-2">For any privacy questions or data requests:</p>
              <p className="mb-1"><strong>Donna Drive Ltd</strong></p>
              <p className="mb-1">Email: info@smarterwayy.co.uk</p>
              <p className="mb-1">Address: 8 Orford Road Endon</p>
              <p>Data Protection Officer: Josh Yarwood</p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicy;
