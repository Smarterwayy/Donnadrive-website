import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, ChevronRight } from "lucide-react";
import Header from "../components/Header";
import { Button } from "@/components/ui/button";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms of Service | Donna Drive</title>
        <meta name="description" content="Donna Drive Terms of Service — the rules governing your access to and use of the Donna Drive platform, website, mobile apps, and related services." />
        <link rel="canonical" href="https://donnadrive.co.uk/terms-of-service" />
      </Helmet>

      <Header />

      <div className="container mx-auto px-4 py-10 lg:py-16 max-w-3xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">Terms of Service</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">Donna Drive – Terms of Service</h1>
          <p className="text-sm text-muted-foreground">Last updated: 13th November 2025</p>
        </div>

        <div className="border-t border-border mb-8" />

        {/* Content */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">1. Introduction</h2>
            <p className="text-muted-foreground mb-3">Welcome to Donna Drive.</p>
            <p className="text-muted-foreground mb-3">
              These Terms of Service ("Terms") govern your access to and use of the Donna Drive platform, website, mobile apps, and related services (collectively, the "Services").
            </p>
            <p className="text-muted-foreground mb-3">
              By creating an account, using our platform, or otherwise accessing the Services, you agree to be bound by these Terms, our Privacy Policy, and (where applicable) our Data Processing Agreement (DPA).
            </p>
            <p className="text-muted-foreground">If you do not agree, please do not use our Services.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">2. Who We Are</h2>
            <p className="text-muted-foreground mb-2"><strong className="text-foreground">Donna Drive Ltd</strong></p>
            <p className="text-muted-foreground mb-2">Registered Address: 8 Orford Road Endon</p>
            <p className="text-muted-foreground mb-2">Email: info@smarterwayy.co.uk</p>
            <p className="text-muted-foreground mb-3">Company Number: 07361858100</p>
            <p className="text-muted-foreground">
              Donna Drive provides digital tools for driving instructors and learners, including scheduling, business management, and communication features.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">3. Definitions</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Instructor</strong> – A professional driving instructor using Donna Drive to manage clients, schedules, and business operations.</li>
              <li><strong className="text-foreground">Learner</strong> – A person booking or managing lessons via Donna Drive.</li>
              <li><strong className="text-foreground">User</strong> – Any individual or entity accessing the Services.</li>
              <li><strong className="text-foreground">Account</strong> – A registered user profile required to access certain features.</li>
              <li><strong className="text-foreground">Content</strong> – Any text, images, data, or other information submitted through the Services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">4. Eligibility</h2>
            <p className="text-muted-foreground mb-2">You must:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-muted-foreground">
              <li>Be at least 16 years old (or the minimum legal age in your country), and</li>
              <li>Have the legal authority to enter into this agreement.</li>
            </ul>
            <p className="text-muted-foreground">If you are using the Services on behalf of a business, you confirm you have authority to bind that entity to these Terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">5. Account Registration</h2>
            <p className="text-muted-foreground mb-3">To use most features, you must create an account and provide accurate, complete information.</p>
            <p className="text-muted-foreground mb-2">You are responsible for:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-muted-foreground">
              <li>Maintaining the confidentiality of your login credentials,</li>
              <li>Ensuring all data entered is truthful and current,</li>
              <li>All activity that occurs under your account.</li>
            </ul>
            <p className="text-muted-foreground">We may suspend or terminate accounts that violate these Terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">6. Services Overview</h2>
            <p className="text-muted-foreground mb-2">Donna Drive enables:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-muted-foreground">
              <li>Driving instructors to manage schedules, learners, and payments,</li>
              <li>Learners to book and manage lessons,</li>
              <li>Integration with Google Calendar and WhatsApp for communication and reminders,</li>
              <li>Secure data management in compliance with GDPR and CCPA.</li>
            </ul>
            <p className="text-muted-foreground">Some services may be subject to fees (see Section 8).</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">7. Acceptable Use</h2>
            <p className="text-muted-foreground mb-2">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-muted-foreground">
              <li>Use the Services for unlawful or fraudulent purposes;</li>
              <li>Impersonate another person or misrepresent your identity;</li>
              <li>Transmit malware or attempt unauthorized access;</li>
              <li>Scrape, copy, or resell content without permission;</li>
              <li>Circumvent or disable security features;</li>
              <li>Violate the rights of others (e.g., privacy, IP, or contractual rights).</li>
            </ul>
            <p className="text-muted-foreground">We reserve the right to suspend or terminate any account for violations.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">8. Fees and Payments</h2>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-muted-foreground">
              <li>Instructors may subscribe to paid plans or services.</li>
              <li>Fees, billing cycles, and renewal terms will be displayed at the point of purchase.</li>
              <li>Payments are processed securely through third-party providers (e.g., Stripe, PayPal).</li>
              <li>We do not store full payment card details.</li>
              <li>Refunds are handled in accordance with our Refund Policy (if applicable).</li>
            </ul>
            <p className="text-muted-foreground">You authorise recurring billing where subscriptions apply, unless cancelled before renewal.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">9. Data Protection & Privacy</h2>
            <p className="text-muted-foreground mb-3">
              Your privacy is important to us. Our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> explains how we collect, use, and protect your personal data.
            </p>
            <p className="text-muted-foreground mb-3">
              When Donna Drive processes personal data on behalf of instructors (e.g., learner data), our Data Processing Agreement (DPA) applies.
            </p>
            <p className="text-muted-foreground mb-2"><strong className="text-foreground">Key principles:</strong></p>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-muted-foreground">
              <li>All data is stored securely and processed lawfully under GDPR (EU/UK) and CCPA (California).</li>
              <li>Users can request access, correction, or deletion of their data.</li>
              <li>We comply with Google OAuth and WhatsApp Business policies for integrations.</li>
            </ul>
            <p className="text-muted-foreground">By using the Services, you consent to our privacy practices.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">10. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>All intellectual property rights in Donna Drive, including software, design, databases, trademarks, and branding, belong to Donna Drive Ltd or our licensors.</li>
              <li>You may use the Services only as permitted by these Terms.</li>
              <li>You retain ownership of content you upload but grant us a limited, non-exclusive, royalty-free licence to use, store, and display that content solely to provide the Services.</li>
              <li>You may not copy, reverse-engineer, or exploit our platform or content without prior written consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">11. Third-Party Services</h2>
            <p className="text-muted-foreground mb-3">
              Our Services may integrate with or link to third parties (e.g., Google Calendar, WhatsApp, Stripe, Twilio).
            </p>
            <p className="text-muted-foreground mb-2">You agree to:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Comply with the terms of those third parties,</li>
              <li>Authorise Donna Drive to share necessary data with them to enable functionality,</li>
              <li>Understand that we are not responsible for third-party content, reliability, or data handling once you authorise access.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">12. Suspension and Termination</h2>
            <p className="text-muted-foreground mb-2">We may suspend or terminate access if:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-muted-foreground">
              <li>You breach these Terms,</li>
              <li>Your activities cause harm or risk to other users or the platform, or</li>
              <li>We are required to do so by law or regulation.</li>
            </ul>
            <p className="text-muted-foreground mb-2"><strong className="text-foreground">Upon termination:</strong></p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Your right to use the Services ends immediately.</li>
              <li>Your account and data may be deleted per our Privacy Policy and DPA.</li>
              <li>Certain legal obligations (e.g., payment, confidentiality) continue after termination.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">13. Warranties and Disclaimers</h2>
            <p className="text-muted-foreground mb-3">
              We provide the Services "as is" and "as available" without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            <p className="text-muted-foreground mb-2">We do not guarantee:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-muted-foreground">
              <li>Continuous, error-free operation of the Services, or</li>
              <li>That results obtained will meet your expectations.</li>
            </ul>
            <p className="text-muted-foreground">However, we maintain commercially reasonable efforts to ensure uptime, data security, and support.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">14. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-2">To the maximum extent permitted by law:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-muted-foreground">
              <li>Donna Drive Ltd and its affiliates shall not be liable for any indirect, incidental, consequential, or punitive damages, including loss of data, revenue, or goodwill.</li>
              <li>Our total liability for any claim related to these Services shall not exceed the amount paid by you in the preceding 12 months.</li>
            </ul>
            <p className="text-muted-foreground">Nothing in these Terms excludes liability for death or personal injury caused by negligence, fraud, or other liability that cannot be excluded by law.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">15. Indemnification</h2>
            <p className="text-muted-foreground mb-2">You agree to indemnify and hold harmless Donna Drive Ltd, its officers, employees, and affiliates from any claims, damages, or expenses arising from:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Your breach of these Terms,</li>
              <li>Your misuse of the Services, or</li>
              <li>Any violation of laws or third-party rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">16. Communications</h2>
            <p className="text-muted-foreground mb-2">By using Donna Drive, you agree that we may contact you via:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-muted-foreground">
              <li>Email, SMS, or WhatsApp (for transactional purposes),</li>
              <li>Optional marketing communications (if you opt in).</li>
            </ul>
            <p className="text-muted-foreground">You can withdraw marketing consent at any time via account settings or by contacting us.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">17. Changes to These Terms</h2>
            <p className="text-muted-foreground mb-2">We may modify these Terms from time to time.</p>
            <p className="text-muted-foreground mb-2">Significant changes will be notified via email or the platform.</p>
            <p className="text-muted-foreground">Continued use after the effective date constitutes acceptance of the new Terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">18. Governing Law and Jurisdiction</h2>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-muted-foreground">
              <li><strong className="text-foreground">For UK clients:</strong> governed by the laws of England and Wales.</li>
              <li><strong className="text-foreground">For EU clients:</strong> governed by the laws of the Member State where the user resides.</li>
              <li><strong className="text-foreground">For US clients:</strong> governed by the laws of the State of California.</li>
            </ul>
            <p className="text-muted-foreground">Disputes will be resolved through the exclusive jurisdiction of the relevant courts.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">19. Miscellaneous</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Entire Agreement:</strong> These Terms, the Privacy Policy, and the DPA form the entire agreement between you and Donna Drive.</li>
              <li><strong className="text-foreground">Severability:</strong> If any provision is invalid, the remainder remains enforceable.</li>
              <li><strong className="text-foreground">Assignment:</strong> You may not assign your rights without our consent; we may assign to affiliates or successors.</li>
              <li><strong className="text-foreground">Force Majeure:</strong> We are not liable for delays caused by circumstances beyond our reasonable control.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">20. Contact Information</h2>
            <p className="text-muted-foreground mb-1"><strong className="text-foreground">Donna Drive Ltd</strong></p>
            <p className="text-muted-foreground mb-1">Email: info@smarterwayy.co.uk</p>
            <p className="text-muted-foreground">Address: 8 Orford Road Endon</p>
          </section>
        </div>

        <div className="mt-10 pt-8 border-t border-border flex flex-wrap gap-4 items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Button>
          </Link>
          <Link to="/privacy-policy" className="text-sm text-primary hover:underline">
            View Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
