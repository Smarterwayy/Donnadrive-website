import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need to install anything?",
      answer: "No — Donna works directly through WhatsApp and Google Calendar. There's no software to download or install. Just connect your existing accounts and you're ready to go."
    },
    {
      question: "Can I customize lesson lengths and working hours?",
      answer: "Yes. Everything is fully customizable to fit your schedule. Set your preferred lesson durations, working hours, break times, and travel preferences. Donna adapts to your unique teaching style."
    },
    {
      question: "What if I take time off?",
      answer: "Just block it out on your calendar — Donna won't book over it. The AI respects all your calendar events, holidays, and personal time automatically."
    },
    {
      question: "How does the route optimization work?",
      answer: "Donna analyzes the locations of your bookings and suggests scheduling lessons geographically close to each other. This minimizes driving time and fuel costs while maximizing your earning potential.",
      link: "/route-optimization"
    },
    {
      question: "What happens if a learner needs to cancel last minute?",
      answer: "Donna handles cancellations automatically, updates your calendar, and can even offer the newly available slot to other learners who might be looking for a lesson."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use bank-level encryption and never store sensitive personal data. Donna only accesses the minimum information needed to manage your bookings effectively."
    }
  ];

  return (
    <section className="py-8 sm:py-10 lg:py-14 bg-gradient-subtle" id="faq">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-6 sm:mb-8 lg:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 text-primary font-semibold mb-2 text-xs sm:text-sm">
            ❓ FAQ
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 px-2">
            Frequently Asked Questions
          </h2>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Accordion type="single" collapsible className="space-y-2 sm:space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg border border-border px-3 sm:px-4 lg:px-5">
                <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-primary text-xs sm:text-sm py-3">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-3 sm:pb-4 text-xs sm:text-sm">
                  {faq.answer}
                  {faq.link && (
                    <Link to={faq.link} className="block mt-2 text-primary hover:underline font-semibold">
                      Learn more about route optimization →
                    </Link>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;