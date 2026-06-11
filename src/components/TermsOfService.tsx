import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const TermsOfService = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="underline hover:text-primary-foreground transition-colors text-xs sm:text-sm">
          Terms of Service
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[85vh] p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <DialogTitle className="text-xl sm:text-2xl font-bold">
            Donna Drive – Terms of Service
          </DialogTitle>
          <p className="text-sm text-muted-foreground">Last updated: 13th November 2025</p>
        </DialogHeader>
        <ScrollArea className="h-[60vh] px-6 py-4">
          <div className="space-y-6 text-sm sm:text-base leading-relaxed">
            {/* Section 1 */}
            <section>
              <h2 className="text-lg font-bold mb-3">1. Introduction</h2>
              <p className="mb-3">Welcome to Donna Drive.</p>
              <p className="mb-3">
                These Terms of Service ("Terms") govern your access to and use of the Donna Drive platform, website, mobile apps, and related services (collectively, the "Services").
              </p>
              <p className="mb-3">
                By creating an account, using our platform, or otherwise accessing the Services, you agree to be bound by these Terms, our Privacy Policy, and (where applicable) our Data Processing Agreement (DPA).
              </p>
              <p>If you do not agree, please do not use our Services.</p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-lg font-bold mb-3">2. Who We Are</h2>
              <p className="mb-2"><strong>Donna Drive Ltd</strong></p>
              <p className="mb-2">Registered Address: 8 Orford Road Endon</p>
              <p className="mb-2">Email: Info@smarterwayy.co.uk</p>
              <p className="mb-3">Company Number: 07361858100</p>
              <p>
                Donna Drive provides digital tools for driving instructors and learners, including scheduling, business management, and communication features.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-lg font-bold mb-3">3. Definitions</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Instructor</strong> – A professional driving instructor using Donna Drive to manage clients, schedules, and business operations.</li>
                <li><strong>Learner</strong> – A person booking or managing lessons via Donna Drive.</li>
                <li><strong>User</strong> – Any individual or entity accessing the Services.</li>
                <li><strong>Account</strong> – A registered user profile required to access certain features.</li>
                <li><strong>Content</strong> – Any text, images, data, or other information submitted through the Services.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-lg font-bold mb-3">4. Eligibility</h2>
              <p className="mb-2">You must:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Be at least 16 years old (or the minimum legal age in your country), and</li>
                <li>Have the legal authority to enter into this agreement.</li>
              </ul>
              <p>If you are using the Services on behalf of a business, you confirm you have authority to bind that entity to these Terms.</p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-lg font-bold mb-3">5. Account Registration</h2>
              <p className="mb-3">To use most features, you must create an account and provide accurate, complete information.</p>
              <p className="mb-2">You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Maintaining the confidentiality of your login credentials,</li>
                <li>Ensuring all data entered is truthful and current,</li>
                <li>All activity that occurs under your account.</li>
              </ul>
              <p>We may suspend or terminate accounts that violate these Terms.</p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-lg font-bold mb-3">6. Services Overview</h2>
              <p className="mb-2">Donna Drive enables:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Driving instructors to manage schedules, learners, and payments,</li>
                <li>Learners to book and manage lessons,</li>
                <li>Integration with Google Calendar and WhatsApp for communication and reminders,</li>
                <li>Secure data management in compliance with GDPR and CCPA.</li>
              </ul>
              <p>Some services may be subject to fees (see Section 8).</p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-lg font-bold mb-3">7. Acceptable Use</h2>
              <p className="mb-2">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Use the Services for unlawful or fraudulent purposes;</li>
                <li>Impersonate another person or misrepresent your identity;</li>
                <li>Transmit malware or attempt unauthorized access;</li>
                <li>Scrape, copy, or resell content without permission;</li>
                <li>Circumvent or disable security features;</li>
                <li>Violate the rights of others (e.g., privacy, IP, or contractual rights).</li>
              </ul>
              <p>We reserve the right to suspend or terminate any account for violations.</p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-lg font-bold mb-3">8. Fees and Payments</h2>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Instructors may subscribe to paid plans or services.</li>
                <li>Fees, billing cycles, and renewal terms will be displayed at the point of purchase.</li>
                <li>Payments are processed securely through third-party providers (e.g., Stripe, PayPal).</li>
                <li>We do not store full payment card details.</li>
                <li>Refunds are handled in accordance with our Refund Policy (if applicable).</li>
              </ul>
              <p>You authorize recurring billing where subscriptions apply, unless cancelled before renewal.</p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-lg font-bold mb-3">9. Data Protection & Privacy</h2>
              <p className="mb-3">
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal data.
              </p>
              <p className="mb-3">
                When Donna Drive processes personal data on behalf of instructors (e.g., learner data), our Data Processing Agreement (DPA) applies.
              </p>
              <p className="mb-2"><strong>Key principles:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>All data is stored securely and processed lawfully under GDPR (EU/UK) and CCPA (California).</li>
                <li>Users can request access, correction, or deletion of their data.</li>
                <li>We comply with Google OAuth and WhatsApp Business policies for integrations.</li>
              </ul>
              <p>By using the Services, you consent to our privacy practices.</p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-lg font-bold mb-3">10. Intellectual Property</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All intellectual property rights in Donna Drive, including software, design, databases, trademarks, and branding, belong to Donna Drive Ltd or our licensors.</li>
                <li>You may use the Services only as permitted by these Terms.</li>
                <li>You retain ownership of content you upload but grant us a limited, non-exclusive, royalty-free license to use, store, and display that content solely to provide the Services.</li>
                <li>You may not copy, reverse-engineer, or exploit our platform or content without prior written consent.</li>
              </ul>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-lg font-bold mb-3">11. Third-Party Services</h2>
              <p className="mb-3">
                Our Services may integrate with or link to third parties (e.g., Google Calendar, WhatsApp, Stripe, Twilio).
              </p>
              <p className="mb-2">You agree to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Comply with the terms of those third parties,</li>
                <li>Authorize Donna Drive to share necessary data with them to enable functionality,</li>
                <li>Understand that we are not responsible for third-party content, reliability, or data handling once you authorize access.</li>
              </ul>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-lg font-bold mb-3">12. Suspension and Termination</h2>
              <p className="mb-2">We may suspend or terminate access if:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>You breach these Terms,</li>
                <li>Your activities cause harm or risk to other users or the platform, or</li>
                <li>We are required to do so by law or regulation.</li>
              </ul>
              <p className="mb-2"><strong>Upon termination:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your right to use the Services ends immediately.</li>
                <li>Your account and data may be deleted per our Privacy Policy and DPA.</li>
                <li>Certain legal obligations (e.g., payment, confidentiality) continue after termination.</li>
              </ul>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-lg font-bold mb-3">13. Warranties and Disclaimers</h2>
              <p className="mb-3">
                We provide the Services "as is" and "as available" without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, or non-infringement.
              </p>
              <p className="mb-2">We do not guarantee:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Continuous, error-free operation of the Services, or</li>
                <li>That results obtained will meet your expectations.</li>
              </ul>
              <p>However, we maintain commercially reasonable efforts to ensure uptime, data security, and support.</p>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-lg font-bold mb-3">14. Limitation of Liability</h2>
              <p className="mb-2">To the maximum extent permitted by law:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Donna Drive Ltd and its affiliates shall not be liable for any indirect, incidental, consequential, or punitive damages, including loss of data, revenue, or goodwill.</li>
                <li>Our total liability for any claim related to these Services shall not exceed the amount paid by you in the preceding 12 months.</li>
              </ul>
              <p>Nothing in these Terms excludes liability for death or personal injury caused by negligence, fraud, or other liability that cannot be excluded by law.</p>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="text-lg font-bold mb-3">15. Indemnification</h2>
              <p className="mb-2">You agree to indemnify and hold harmless Donna Drive Ltd, its officers, employees, and affiliates from any claims, damages, or expenses arising from:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your breach of these Terms,</li>
                <li>Your misuse of the Services, or</li>
                <li>Any violation of laws or third-party rights.</li>
              </ul>
            </section>

            {/* Section 16 */}
            <section>
              <h2 className="text-lg font-bold mb-3">16. Communications</h2>
              <p className="mb-2">By using Donna Drive, you agree that we may contact you via:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Email, SMS, or WhatsApp (for transactional purposes),</li>
                <li>Optional marketing communications (if you opt in).</li>
              </ul>
              <p>You can withdraw marketing consent at any time via account settings or by contacting us.</p>
            </section>

            {/* Section 17 */}
            <section>
              <h2 className="text-lg font-bold mb-3">17. Changes to These Terms</h2>
              <p className="mb-2">We may modify these Terms from time to time.</p>
              <p className="mb-2">Significant changes will be notified via email or the platform.</p>
              <p>Continued use after the effective date constitutes acceptance of the new Terms.</p>
            </section>

            {/* Section 18 */}
            <section>
              <h2 className="text-lg font-bold mb-3">18. Governing Law and Jurisdiction</h2>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li><strong>For UK clients:</strong> governed by the laws of England and Wales.</li>
                <li><strong>For EU clients:</strong> governed by the laws of the Member State where the user resides.</li>
                <li><strong>For US clients:</strong> governed by the laws of the State of California.</li>
              </ul>
              <p>Disputes will be resolved through the exclusive jurisdiction of the relevant courts.</p>
            </section>

            {/* Section 19 */}
            <section>
              <h2 className="text-lg font-bold mb-3">19. Miscellaneous</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Entire Agreement:</strong> These Terms, the Privacy Policy, and the DPA form the entire agreement between you and Donna Drive.</li>
                <li><strong>Severability:</strong> If any provision is invalid, the remainder remains enforceable.</li>
                <li><strong>Assignment:</strong> You may not assign your rights without our consent; we may assign to affiliates or successors.</li>
                <li><strong>Force Majeure:</strong> We are not liable for delays caused by circumstances beyond our reasonable control.</li>
              </ul>
            </section>

            {/* Section 20 */}
            <section>
              <h2 className="text-lg font-bold mb-3">20. Contact Information</h2>
              <p className="mb-1"><strong>Donna Drive Ltd</strong></p>
              <p className="mb-1">Email: info@smarterwayy.co.uk</p>
              <p>Address: 8 Orford Road Endon</p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TermsOfService;
