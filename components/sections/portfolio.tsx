'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileSpreadsheet, FileText, BarChart3, Calculator, TrendingUp, BookOpen } from 'lucide-react';

const categories = ['All', 'Bookkeeping', 'MIS Reports', 'Project Reports', 'Auditing', 'GST & Tax'];

const projects = [
  {
    title: 'Manufacturing Company - Complete Bookkeeping',
    category: 'Bookkeeping',
    description: 'Full-service bookkeeping implementation for a manufacturing unit with 50+ employees',
    icon: BookOpen,
    highlights: ['Daily transactions', 'Inventory management', 'Payroll processing', 'Financial statements'],
  },
  {
    title: 'Retail Chain - MIS Dashboard Development',
    category: 'MIS Reports',
    description: 'Created comprehensive MIS reporting system for multi-location retail operations',
    icon: BarChart3,
    highlights: ['Sales analytics', 'Inventory tracking', 'Profitability analysis', 'Power BI dashboard'],
  },
  {
    title: 'Startup - Business Plan & Loan Documentation',
    category: 'Project Reports',
    description: 'Prepared detailed project report for securing bank loan of Rs 1 Crore',
    icon: FileText,
    highlights: ['Market analysis', 'Financial projections', 'Break-even analysis', 'Loan documentation'],
  },
  {
    title: 'Trading Company - Internal Audit Implementation',
    category: 'Auditing',
    description: 'Established internal audit framework and conducted quarterly audits',
    icon: TrendingUp,
    highlights: ['Control systems', 'Risk assessment', 'Audit reports', 'Compliance monitoring'],
  },
  {
    title: 'E-commerce Business - GST Compliance',
    category: 'GST & Tax',
    description: 'Complete GST registration, filing, and compliance management',
    icon: Calculator,
    highlights: ['GST registration', 'Monthly returns', 'Input credit optimization', 'Tax planning'],
  },
  {
    title: 'Service Industry - Accounts Finalization',
    category: 'Bookkeeping',
    description: 'Year-end accounts finalization and statutory compliance for service company',
    icon: FileSpreadsheet,
    highlights: ['Trial balance', 'Final accounts', 'Tax computation', 'Statutory filing'],
  },
  {
    title: 'Hotel - Revenue Management System',
    category: 'MIS Reports',
    description: 'Developed revenue management and operational MIS for hospitality business',
    icon: BarChart3,
    highlights: ['RevPAR analysis', 'Cost control', 'Department-wise P&L', 'Forecasting models'],
  },
  {
    title: 'Real Estate - Project Feasibility Study',
    category: 'Project Reports',
    description: 'Comprehensive feasibility report for residential project development',
    icon: FileText,
    highlights: ['Market research', 'Cost estimation', 'ROI analysis', 'Risk assessment'],
  },
  {
    title: 'Export Business - Internal Controls Audit',
    category: 'Auditing',
    description: 'Evaluated and strengthened internal controls for export-import operations',
    icon: TrendingUp,
    highlights: ['Process audit', 'Foreign exchange management', 'Documentation review', 'Recommendations'],
  },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
              Work <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real-world projects delivered across various industries
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600'
                    : ''
                }
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 relative overflow-hidden group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />

                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-blue-500" />
                      </div>
                      <span className="text-xs bg-secondary px-2 py-1 rounded-full text-muted-foreground">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="space-y-1.5">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs">
                          <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mt-1.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
