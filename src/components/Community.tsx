import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const Community = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            The Donna Drive Community Is Growing Fast 🚗💬
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-3 leading-relaxed">
            Instructors across the UK are already signing up, streamlining their lessons, and enjoying the free trial. Join the growing community of instructors saving hours every week with Donna Drive.
          </p>
          
          <p className="text-xs sm:text-sm text-muted-foreground/80 mb-6 sm:mb-8">
            Limited slots available for our Early Access Free Trial
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              size="lg"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-sm sm:text-base px-6 sm:px-8"
            >
              Join the Community
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
