import { Calendar, Route, Clock, Brain } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Reads Your Calendar",
      description: "Donna knows your availability, working hours, and time off. She only books when you're actually free."
    },
    {
      icon: Brain,
      title: "Learns Your Patterns",
      description: "She understands your working preferences — no unwanted bookings that end up getting rearranged."
    },
    {
      icon: Route,
      title: "Optimizes Your Routes",
      description: "Lessons are grouped by location. Less driving between bookings means more lessons and lower fuel costs."
    },
    {
      icon: Clock,
      title: "Gives You Back Your Evenings",
      description: "No more endless WhatsApp messages. Donna handles bookings so you can relax after work."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle" id="features">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            How Donna Fills Your Diary
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Donna is smart. She doesn't just book lessons — she books the <em>right</em> lessons.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-card rounded-xl p-3 sm:p-6 shadow-card text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                <feature.icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-xs sm:text-lg font-bold text-card-foreground mb-1 sm:mb-2">{feature.title}</h3>
              <p className="text-[10px] sm:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
