import React, { useEffect, useState } from "react";
import { Star, Quote, Sparkles, Trophy, Zap } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
  emoji?: string;
  gradientClass?: string;
  animationDelay?: number;
}

const Testimonial = ({
  quote = "Drive Dojo completely transformed my driving experience. I went from nervous to confident in just a few lessons!",
  author = "Alex J.",
  role = "New Driver",
  rating = 5,
  emoji = "🚀",
  gradientClass = "from-blue-900 via-green-800 to-black",
  animationDelay = 0,
}: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      className={`h-full rounded-xl overflow-hidden shadow-lg bg-gradient-to-br ${gradientClass} border border-white/10 hover:border-white/30 transition-all`}
    >
      <div className="p-6 flex flex-col h-full relative">
        {/* Animated decorative elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            repeatType: "reverse",
          }}
          className="absolute top-0 right-0 w-24 h-24 rounded-full bg-yellow-500/10 blur-xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            repeatType: "reverse",
            delay: 1,
          }}
          className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-red-600/5 blur-xl"
        ></motion.div>

        <div className="mb-4 flex justify-between items-center relative z-10">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
              />
            ))}
          </div>
          <motion.span
            className="text-2xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: "loop",
              repeatDelay: 1,
            }}
          >
            {emoji}
          </motion.span>
        </div>
        <div className="flex-grow relative z-10">
          <Quote className="h-8 w-8 text-white/40 mb-2" />
          <p className="text-white italic mb-4 text-lg">{quote}</p>
        </div>
        <div className="flex items-center mt-4 relative z-10">
          <div className="mr-3 bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5 rounded-full">
            <div className="h-12 w-12 rounded-full flex items-center justify-center bg-gray-900 text-white text-xl font-bold">
              {author.split(" ")[0][0]}
              {author.split(" ")[1]?.[0] || ""}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white">{author}</h4>
            <p className="text-white/70">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  delay?: number;
}

const StatCard = ({
  value = "95%",
  label = "Pass Rate",
  icon = null,
  delay = 0,
}: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-gradient-to-br from-blue-900 via-green-900 to-black p-6 rounded-lg shadow-md border border-white/10 flex flex-col items-center text-center hover:border-white/30 transition-all"
    >
      {icon && <div className="mb-2 text-yellow-400">{icon}</div>}
      <motion.h3
        className="text-3xl font-bold text-white mb-1"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        {value}
      </motion.h3>
      <p className="text-white/70">{label}</p>
    </motion.div>
  );
};

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: TestimonialProps[];
  stats?: StatCardProps[];
  autoRotateInterval?: number;
}

const TestimonialsSection = ({
  title = "What Our Students Say",
  subtitle = "Join thousands of satisfied students who have successfully earned their license with Drive Dojo",
  autoRotateInterval = 5000,
  testimonials = [
    {
      quote:
        "After trying two different driving schools, I finally found Drive Dojo, and it was the best decision I made. The instructor was incredibly patient and explained everything clearly, focusing on the areas I needed most help with. Thanks to their guidance, I passed my test! 💯",
      author: "Alex W.",
      role: "Licensed Driver",
      rating: 5,
      emoji: "🚀",
      gradientClass: "from-blue-900 via-green-800 to-black",
    },
    {
      quote:
        "Despite my initial nerves, I passed my driving test with only 4 minor faults! The focus on safe and defensive driving didn't just prepare me for the test, but for a lifetime of safe driving. Best decision ever!",
      author: "Wumi A.",
      role: "Licensed Driver",
      rating: 5,
      emoji: "🔥",
      gradientClass: "from-blue-800 via-green-900 to-gray-900",
    },
    {
      quote:
        "I'm so glad that I chose this particular driving instructor; they made learning how to drive a breeze! Would recommend to anyone looking to learn quickly and effectively.",
      author: "Tani B.",
      role: "Student",
      rating: 5,
      emoji: "⭐",
      gradientClass: "from-blue-900 to-black",
    },
    {
      quote:
        "I just passed my driving test on the first try with only 1 minor fault, thanks to The Pass Master Course! My instructor taught me helpful techniques and was extremely patient throughout my lessons. They provided honest feedback.",
      author: "Jamie G.",
      role: "Licensed Driver",
      rating: 5,
      emoji: "🏆",
      gradientClass: "from-green-900 via-blue-900 to-black",
    },
    {
      quote:
        "Passed my test first time! The instructor is an excellent teacher - friendly, motivational and patient but also methodical. Explains things clearly and is very helpful. I learned so much even with previous experience. Highly recommend!",
      author: "Zaki M.",
      role: "Licensed Driver",
      rating: 5,
      emoji: "✨",
      gradientClass: "from-blue-900 via-green-800 to-black",
    },
    {
      quote:
        "Learning to drive with Drive Dojo was an outstanding experience from start to finish. Under their expert guidance and patient teaching, I developed my driving skills with confidence and ease. Passed first time and would definitely recommend!",
      author: "Ira A.",
      role: "Licensed Driver",
      rating: 5,
      emoji: "💫",
      gradientClass: "from-blue-800 via-green-900 to-gray-900",
    },
    {
      quote:
        "I struggled with driving for three years but couldn't pass the test. Some instructors promise step-by-step guidance but leave you wondering what to do next. Drive Dojo is different. By the end, I knew exactly what to do. Passed with only 3 minor faults!",
      author: "Tam Z.",
      role: "Licensed Driver",
      rating: 5,
      emoji: "🌟",
      gradientClass: "from-blue-900 to-black",
    },
    {
      quote:
        "Can't recommend Drive Dojo enough! Their patience and expert knowledge of the local driving routes helped me pass my test on the first try. I had lessons with other instructors, but none compared to this calm and encouraging teaching style.",
      author: "Jay P.",
      role: "Licensed Driver",
      rating: 5,
      emoji: "⚡",
      gradientClass: "from-green-900 via-blue-900 to-black",
    },
    {
      quote:
        "Drive Dojo made learning to drive an enjoyable experience. Always calm, reassuring, and very knowledgeable about the test routes. I passed first time, and I owe it all to their excellent instruction. Would recommend to anyone!",
      author: "Kell G.",
      role: "Licensed Driver",
      rating: 5,
      emoji: "🌈",
      gradientClass: "from-blue-900 via-green-800 to-black",
    },
    {
      quote:
        "Choosing this instructor was the best decision for my driving lessons. Their approach to teaching was perfect, and they gave me the confidence I needed to pass my test first time. They know the local test routes inside out!",
      author: "Nisa K.",
      role: "Licensed Driver",
      rating: 5,
      emoji: "💪",
      gradientClass: "from-blue-800 via-green-900 to-gray-900",
    },
  ],
  stats = [
    {
      value: "95%",
      label: "First-Time Pass Rate",
      icon: <Trophy className="h-6 w-6" />,
      delay: 0,
    },
    {
      value: "1,000+",
      label: "Students Taught",
      icon: <Sparkles className="h-6 w-6" />,
      delay: 0.2,
    },
    {
      value: "5.0/5",
      label: "Average Rating",
      icon: <Zap className="h-6 w-6" />,
      delay: 0.4,
    },
  ],
}: TestimonialsSectionProps) => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      const next = (current + 1) % testimonials.length;
      api.scrollTo(next);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [api, current, testimonials.length, autoRotateInterval]);

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              delay={stat.delay}
            />
          ))}
        </div>

        <div className="relative px-4 md:px-12">
          <Carousel className="w-full" setApi={setApi}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 p-2"
                >
                  <Testimonial
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                    rating={testimonial.rating}
                    emoji={testimonial.emoji}
                    gradientClass={testimonial.gradientClass}
                    animationDelay={index * 0.1}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-6 bg-white/10 hover:bg-white/20 text-white" />
            <CarouselNext className="-right-4 md:-right-6 bg-white/10 hover:bg-white/20 text-white" />
          </Carousel>

          {/* Carousel indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`h-2 rounded-full transition-all ${current === index ? "w-6 bg-white" : "w-2 bg-white/30"}`}
                onClick={() => api?.scrollTo(index)}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
