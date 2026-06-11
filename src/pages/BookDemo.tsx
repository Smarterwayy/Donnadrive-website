import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BookDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-4 text-sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          {/* Hero Section */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2">
              Book a Demo with Donna Drive
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
              See how Donna Drive can transform your driving school. Book a quick demo — it only takes a minute.
            </p>
            <div className="mt-4 sm:mt-5 inline-flex items-center gap-2 text-sm sm:text-base text-primary font-semibold">
              <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Early access offer: Get 1 month free when you join before launch
            </div>
          </div>

          {/* Google Form Embed */}
          <div className="bg-card rounded-xl shadow-elegant p-3 sm:p-5 lg:p-7 mb-6 sm:mb-8">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf-IiJ6FEucsOdXukurltMSrLLqiLZ1MpAoGUhqNb3s1zvc7g/viewform?embedded=true"
              width="100%"
              height="1850"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full rounded-lg min-h-[1850px]"
              title="Book a Demo Form"
              scrolling="no"
            >
              Loading…
            </iframe>
          </div>

          {/* Trust Section with Testimonials */}
          <div className="bg-card rounded-xl shadow-card p-5 sm:p-6 lg:p-8 mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-foreground text-center mb-4 sm:mb-5">
              Already trusted by driving instructors across the UK
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="bg-primary/5 rounded-lg p-4 sm:p-5">
                <p className="text-sm sm:text-base text-foreground italic mb-2">
                  "Donna Drive feels like having a personal assistant — my schedule runs itself!"
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">— Sarah M., Driving Instructor</p>
              </div>
              <div className="bg-primary/5 rounded-lg p-4 sm:p-5">
                <p className="text-sm sm:text-base text-foreground italic mb-2">
                  "It's freed up hours every week — now I can focus purely on my learners."
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">— James T., Driving Instructor</p>
              </div>
            </div>
          </div>

          {/* Reassurance Note */}
          <div className="bg-primary/5 rounded-lg p-4 sm:p-5 lg:p-6 text-center">
            <p className="text-sm sm:text-base text-foreground mb-2">
              Once you've submitted your details, we'll contact you within 24 hours to schedule your live walkthrough.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              For any urgent questions, email us at{" "}
              <a 
                href="mailto:info@smarterwayy.co.uk" 
                className="text-primary hover:text-primary/80 transition-colors underline"
              >
                info@smarterwayy.co.uk
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
