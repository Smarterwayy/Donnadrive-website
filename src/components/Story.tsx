import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const Story = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-14 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full mb-3 sm:mb-4">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Why We Built Donna Drive
            </h2>
          </div>
          
          <div className="bg-card rounded-2xl p-4 sm:p-5 lg:p-7 shadow-card">
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base leading-relaxed text-card-foreground">
              <p>
                After talking to dozens of driving instructors, we realised how much time they lose managing messages, cancellations, and schedules. Every evening spent texting learners is time away from family, hobbies, or simply relaxing after a long day on the road.
              </p>
              <p>
                We heard the same frustrations over and over: <span className="font-semibold text-primary">"I love teaching, but I hate the admin."</span> Instructors were spending hours each week just trying to keep their diary full and their learners organised.
              </p>
              <p>
                <span className="font-bold">Donna Drive was created to give that time back.</span> We wanted to build something that feels like having a dedicated assistant — someone who never forgets a booking, never misses a message, and always keeps your schedule running smoothly.
              </p>
              <p className="text-muted-foreground italic">
                Because you shouldn't have to choose between running a successful business and having time for yourself. You should be able to do both.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
