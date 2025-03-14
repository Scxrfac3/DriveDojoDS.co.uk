import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Calendar, BarChart } from "lucide-react";

interface StudentPortalPreviewProps {
  title?: string;
  description?: string;
  features?: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  ctaText?: string;
  ctaLink?: string;
  screenshotUrl?: string;
}

const StudentPortalPreview = ({
  title = "Track Your Progress with Our Student Portal",
  description = "Access learning materials, track your progress, and schedule lessons all in one place. Our student portal makes learning to drive easier than ever.",
  features = [
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Learning Resources",
      description: "Access theory test materials and driving guides anytime.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "Progress Tracking",
      description:
        "Monitor your skills development with detailed progress charts.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Lesson Scheduling",
      description: "Book and manage your driving lessons with ease.",
    },
  ],
  ctaText = "Log in or Register",
  ctaLink = "/student-login",
  screenshotUrl = "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&q=80",
}: StudentPortalPreviewProps) => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {title}
            </h2>
            <p className="text-lg text-slate-600 mb-8">{description}</p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-4 p-2 bg-primary/10 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="group">
              <a href="/booking">
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={screenshotUrl}
                alt="Student Portal Screenshot"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-lg shadow-lg">
              <p className="font-semibold">Easy to use on all devices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentPortalPreview;
