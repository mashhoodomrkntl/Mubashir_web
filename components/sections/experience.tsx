'use client';

import { GraduationCap, Award, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';

const education = [
  {
    degree: 'Bachelor of Commerce (BCom)',
    institution: 'University',
    year: '2010-2013',
    description: 'Graduated with honors, specializing in Financial Accounting and Business Management',
  },
];

const certifications = [
  {
    title: 'Certified Management Accountant (CMA)',
    issuer: 'Institute of Management Accountants (IMA), USA',
    year: '2018',
    description: 'Advanced certification in management accounting and financial management',
  },
  {
    title: 'IFRS Certification',
    issuer: 'International Financial Reporting Standards Foundation',
    year: '2019',
    description: 'Comprehensive understanding of international accounting standards',
  },
  {
    title: 'SAP FICO Certification',
    issuer: 'SAP',
    year: '2020',
    description: 'Financial Accounting and Controlling in SAP ERP system',
  },
  {
    title: 'Power BI Data Analytics',
    issuer: 'Microsoft',
    year: '2021',
    description: 'Advanced data visualization and business intelligence',
  },
];

const experience = [
  {
    role: 'Senior Internal Auditor',
    company: 'Various Consulting Projects',
    period: '2018 - Present',
    responsibilities: [
      'Conducting comprehensive internal audits for multiple organizations',
      'Developing and implementing internal control systems',
      'Preparing detailed audit reports and recommendations',
      'Risk assessment and compliance monitoring',
    ],
  },
  {
    role: 'Finance Consultant',
    company: 'Independent Practice',
    period: '2015 - Present',
    responsibilities: [
      'Providing bookkeeping and accounts finalization services',
      'GST filing and tax compliance management',
      'MIS report preparation and financial analysis',
      'Training corporate teams on Excel and financial tools',
    ],
  },
  {
    role: 'Accounts Manager',
    company: 'Corporate Sector',
    period: '2013 - 2015',
    responsibilities: [
      'Managing day-to-day accounting operations',
      'Financial reporting and budget preparation',
      'Team coordination and vendor management',
      'Implementation of accounting software systems',
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
              Experience & <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">Qualifications</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A track record of excellence in finance and accounting
            </p>
          </div>

          <div className="space-y-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-3xl font-bold font-space-grotesk">Professional Experience</h3>
              </div>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                    <div className="relative">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold mb-1">{job.role}</h4>
                          <p className="text-blue-500 font-medium">{job.company}</p>
                        </div>
                        <div className="text-sm text-muted-foreground mt-2 md:mt-0 bg-secondary px-3 py-1 rounded-full w-fit">
                          {job.period}
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mt-2" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-3xl font-bold font-space-grotesk">Certifications</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-emerald-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{cert.title}</h4>
                        <p className="text-sm text-blue-500 mb-2">{cert.issuer}</p>
                        <p className="text-xs text-muted-foreground mb-2">{cert.year}</p>
                        <p className="text-sm text-muted-foreground">{cert.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-3xl font-bold font-space-grotesk">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                        <p className="text-blue-500 font-medium mb-2">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground mb-2">{edu.year}</p>
                        <p className="text-muted-foreground">{edu.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
