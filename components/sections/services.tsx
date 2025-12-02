"use client";

import {
  BookOpen,
  Shield,
  FileText,
  Calculator,
  PresentationIcon,
  CheckSquare,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: BookOpen,
    title: "Bookkeeping Services",
    description:
      "Comprehensive bookkeeping solutions including daily transaction recording, accounts reconciliation, and financial record maintenance.",
    features: [
      "Daily transaction recording",
      "Bank reconciliation",
      "Accounts payable/receivable",
      "Financial statements preparation",
    ],
  },
  {
    icon: Shield,
    title: "Internal Auditing & MIS",
    description:
      "Thorough internal audits and Management Information Systems reporting to ensure compliance and operational efficiency.",
    features: [
      "Internal control evaluation",
      "Risk assessment",
      "MIS report preparation",
      "Compliance auditing",
    ],
  },
  {
    icon: Calculator,
    title: "GST Filing & Taxation",
    description:
      "Expert GST filing services and tax compliance management to keep your business compliant with all regulations.",
    features: [
      "GST return filing",
      "Tax planning",
      "Compliance management",
      "Advisory services",
    ],
  },
  {
    icon: PresentationIcon,
    title: "Excel Training",
    description:
      "Professional Excel training programs for individuals and corporate teams to enhance productivity and analytical capabilities.",
    features: [
      "Advanced Excel formulas",
      "Data analysis techniques",
      "Dashboard creation",
      "Automation with macros",
    ],
  },
  {
    icon: FileText,
    title: "Project Reports",
    description:
      "Detailed project report preparation for loans, business plans, and feasibility studies with comprehensive financial projections.",
    features: [
      "Business plan preparation",
      "Financial projections",
      "Feasibility studies",
      "Loan documentation",
    ],
  },
  {
    icon: CheckSquare,
    title: "Accounts Finalization",
    description:
      "Year-end accounts finalization services including preparation of final accounts and statutory compliance.",
    features: [
      "Trial balance preparation",
      "Final accounts",
      "Statutory compliance",
      "Annual reporting",
    ],
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 md:py-32 relative bg-gradient-to-b from-accent/5 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
              Professional{" "}
              <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />

                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-blue-500" />
                    </div>

                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mt-1.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-emerald-500 group-hover:text-white transition-all duration-300"
                    >
                      Learn More
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="mt-16 p-8 md:p-12 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border-blue-500/20 text-center">
            <h3 className="text-2xl md:text-3xl font-bold font-space-grotesk mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every business is unique. Let's discuss how I can create a
              tailored financial solution for your specific needs.
            </p>
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600"
            >
              <a
                href="https://wa.me/919539673437"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Consultation
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
