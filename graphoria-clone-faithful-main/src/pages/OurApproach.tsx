import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Research",
    description: "We dive deep into understanding your brand, audience, and goals. Through stakeholder interviews, market analysis, and competitive research, we uncover insights that shape our strategic direction."
  },
  {
    number: "02",
    title: "Strategy & Concept",
    description: "Based on our research, we develop a clear creative strategy and explore multiple concept directions. We refine these ideas through collaborative workshops to find the perfect visual identity that aligns with your vision."
  },
  {
    number: "03",
    title: "Design & Development",
    description: "Our team brings the chosen concept to life with meticulous attention to detail. From brand guidelines to digital experiences, we craft every element to ensure consistency and impact across all touchpoints."
  },
  {
    number: "04",
    title: "Refinement & Delivery",
    description: "We iterate based on your feedback, polishing every detail until perfection. After final approval, we deliver comprehensive brand assets and provide guidance for implementation across all channels."
  }
];

const OurApproach = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-green-glow">
                Approach
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our strategic design process transforms ideas into powerful brand experiences. 
              We combine creativity with strategy to deliver solutions that resonate, engage, and inspire.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="group relative flex gap-8 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Number & Line */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center text-2xl font-bold text-primary shrink-0 group-hover:border-primary/50 transition-colors">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-px h-24 bg-border mt-4" />
                  )}
                </div>

                {/* Mobile Number */}
                <div className="md:hidden">
                  <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-lg font-bold text-primary shrink-0">
                    {step.number}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-card rounded-2xl border border-border p-6 md:p-8 hover:border-primary/50 transition-all duration-500">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 md:px-12 py-16 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Strategic Thinking",
                description: "Every design decision is backed by research and strategy"
              },
              {
                title: "Collaborative Process",
                description: "We work closely with you at every step of the journey"
              },
              {
                title: "Results-Driven",
                description: "Designs that deliver measurable business impact"
              }
            ].map((item, index) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurApproach;
