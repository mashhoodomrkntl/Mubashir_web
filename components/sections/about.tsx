"use client";

import { Target, Award, Users, TrendingUp, PieChart, Shield, Coins } from "lucide-react";
import { Card } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Meticulous attention to detail in every financial analysis and audit",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering top-tier professional services",
  },
  {
    icon: Users,
    title: "Integrity",
    description: "Building trust through transparent and ethical practices",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Helping businesses achieve sustainable financial growth",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
              About{" "}
              <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Results-driven finance professional specializing in internal
              auditing, financial analysis, and strategic consulting for growing
              businesses.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] w-full flex items-center justify-center perspective-1000">
              {/* Animated background blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px] animate-pulse delay-700" />

              {/* Central Main Element */}
              <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-2xl border border-blue-500/20 backdrop-blur-xl flex items-center justify-center animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-2xl blur-lg -z-10" />
                <TrendingUp className="w-16 h-16 text-blue-500" />
              </div>

              {/* Orbiting Elements - Orbit 1 */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-24">
                  <div className="p-3 bg-background/80 backdrop-blur-md rounded-xl border border-emerald-500/30 shadow-lg shadow-emerald-500/20 animate-reverse-spin">
                    <PieChart className="w-8 h-8 text-emerald-500" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-24">
                  <div className="p-3 bg-background/80 backdrop-blur-md rounded-xl border border-blue-500/30 shadow-lg shadow-blue-500/20 animate-reverse-spin">
                    <Coins className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
              </div>

              {/* Orbiting Elements - Orbit 2 (Offset/Different Speed) */}
              <div className="absolute inset-0 animate-spin-slower-reverse">
                <div className="absolute top-1/2 left-0 -translate-x-24 -translate-y-1/2">
                  <div className="p-3 bg-background/80 backdrop-blur-md rounded-xl border border-purple-500/30 shadow-lg shadow-purple-500/20 animate-spin-slow">
                    <Shield className="w-8 h-8 text-purple-500" />
                  </div>
                </div>
                <div className="absolute top-1/2 right-0 translate-x-24 -translate-y-1/2">
                  <div className="p-3 bg-background/80 backdrop-blur-md rounded-xl border border-orange-500/30 shadow-lg shadow-orange-500/20 animate-spin-slow">
                    <Target className="w-8 h-8 text-orange-500" />
                  </div>
                </div>
              </div>

              {/* Connecting Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <circle cx="50%" cy="50%" r="100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-blue-500 animate-pulse" />
                <circle cx="50%" cy="50%" r="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-emerald-500 animate-pulse delay-100" />
              </svg>

              <style jsx>{`
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-20px); }
                }
                .animate-float {
                  animation: float 6s ease-in-out infinite;
                }
                .animate-spin-slow {
                  animation: spin 15s linear infinite;
                }
                .animate-spin-slower-reverse {
                  animation: spin 20s linear infinite reverse;
                }
                .animate-reverse-spin {
                  animation: spin 15s linear infinite reverse;
                }
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
              `}</style>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                As a{" "}
                <span className="font-semibold text-foreground">
                  Certified Management Accountant (CMA)
                </span>{" "}
                from the USA, I bring over a decade of proven expertise in
                internal auditing, financial analysis, and strategic business
                consulting.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I help businesses eliminate financial blind spots, strengthen
                internal controls, and accelerate growth through expert
                auditing, high-impact reporting, and data-driven planning.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Backed by{" "}
                <span className="font-semibold text-foreground">IFRS</span> and{" "}
                <span className="font-semibold text-foreground"> SAP FICO </span>
                certifications and advanced mastery of Power BI and Excel, I
                deliver precise, end-to-end financial solutions tailored to each
                client’s goals.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Blob Background */}
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/5 group-hover:border-blue-500/20">
                      <Icon className="w-7 h-7 text-blue-500 group-hover:text-emerald-500 transition-colors duration-500" />
                    </div>
                    
                    <h3 className="font-bold text-xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground group-hover:from-blue-500 group-hover:to-emerald-500 transition-all duration-300">
                      {value.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
