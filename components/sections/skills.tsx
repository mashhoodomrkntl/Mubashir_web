'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, Code, FileSpreadsheet, Database, TrendingUp, Shield } from 'lucide-react';

const skillCategories = [
  {
    id: 'accounting',
    label: 'Accounting & Finance',
    icon: BarChart3,
    skills: [
      { name: 'Internal Auditing', level: 95, color: 'from-blue-500 to-blue-600' },
      { name: 'Financial Analysis', level: 92, color: 'from-emerald-500 to-emerald-600' },
      { name: 'MIS Reporting', level: 90, color: 'from-cyan-500 to-cyan-600' },
      { name: 'GST & Taxation', level: 88, color: 'from-teal-500 to-teal-600' },
      { name: 'Bookkeeping', level: 95, color: 'from-blue-500 to-blue-600' },
      { name: 'Accounts Finalization', level: 93, color: 'from-emerald-500 to-emerald-600' },
    ],
  },
  {
    id: 'technical',
    label: 'Technical Tools',
    icon: Code,
    skills: [
      { name: 'MS Excel (Advanced)', level: 95, color: 'from-green-500 to-green-600' },
      { name: 'Power BI', level: 90, color: 'from-yellow-500 to-yellow-600' },
      { name: 'SAP FICO', level: 85, color: 'from-orange-500 to-orange-600' },
      { name: 'Tally ERP', level: 92, color: 'from-red-500 to-red-600' },
      { name: 'QuickBooks', level: 88, color: 'from-purple-500 to-purple-600' },
      { name: 'SQL Basics', level: 75, color: 'from-pink-500 to-pink-600' },
    ],
  },
  {
    id: 'standards',
    label: 'Standards & Frameworks',
    icon: Shield,
    skills: [
      { name: 'IFRS', level: 90, color: 'from-blue-500 to-blue-600' },
      { name: 'Indian Accounting Standards', level: 93, color: 'from-emerald-500 to-emerald-600' },
      { name: 'US GAAP', level: 85, color: 'from-cyan-500 to-cyan-600' },
      { name: 'Internal Control Systems', level: 92, color: 'from-teal-500 to-teal-600' },
      { name: 'Risk Management', level: 88, color: 'from-blue-500 to-blue-600' },
    ],
  },
];

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 md:py-32 relative bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
              Technical <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">Proficiency</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive expertise across accounting, technology, and financial standards
            </p>
          </div>

          <Tabs defaultValue="accounting" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-card/50 backdrop-blur-sm">
              {skillCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-emerald-500"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{category.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-4">
                <div className="grid gap-6">
                  {category.skills.map((skill, index) => (
                    <Card
                      key={index}
                      className="p-6 hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden relative group"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                        <div className="flex items-center gap-2">
                          <div className="text-2xl font-bold font-space-grotesk bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                            {skill.level}%
                          </div>
                        </div>
                      </div>

                      <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                          style={{
                            width: hoveredSkill === skill.name ? `${skill.level}%` : '0%',
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                        </div>
                      </div>

                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <Card className="mt-12 p-8 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border-blue-500/20">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold font-space-grotesk">Continuous Learning</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
              Staying ahead of the curve with relentless professional growth, mastering emerging financial trends, regulations, and technologies to drive transformative impact.
              </p>
            </div>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}
