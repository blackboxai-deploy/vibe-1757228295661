export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
  overview: string;
  commonIssues: string[];
  procedures: string[];
  faqs: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export interface LegalResource {
  id: string;
  title: string;
  description: string;
  category: string;
  content: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    id: '1',
    title: 'Criminal Law',
    description: 'Defense against criminal charges, understanding rights, and navigating the criminal justice system.',
    icon: '⚖️',
    slug: 'criminal-law',
    overview: 'Criminal law involves the prosecution of individuals by the government for acts classified as crimes. Our criminal law section covers defense strategies, understanding charges, court procedures, and protecting your constitutional rights throughout the legal process.',
    commonIssues: [
      'DUI/DWI charges and consequences',
      'Drug possession and trafficking charges',
      'Theft, burglary, and property crimes',
      'Assault and battery charges',
      'White-collar crimes and fraud',
      'Traffic violations and license issues',
      'Juvenile criminal matters',
      'Expungement and record sealing'
    ],
    procedures: [
      'Initial arrest and booking process',
      'Arraignment and plea entry',
      'Pre-trial motions and discovery',
      'Plea negotiations with prosecution',
      'Trial preparation and representation',
      'Sentencing and appeals process',
      'Probation and parole matters',
      'Post-conviction relief options'
    ],
    faqs: [
      {
        question: 'What should I do if I\'m arrested?',
        answer: 'Remain calm and exercise your right to remain silent. Do not resist arrest. Ask for an attorney immediately and do not answer questions without legal representation present. Avoid discussing your case with anyone except your lawyer.',
        category: 'criminal-law'
      },
      {
        question: 'Can I represent myself in criminal court?',
        answer: 'While you have the constitutional right to represent yourself, it\'s strongly discouraged. Criminal law is complex, and the consequences of conviction can be severe. An experienced criminal defense attorney understands procedures, evidence rules, and negotiation strategies that can significantly impact your case outcome.',
        category: 'criminal-law'
      },
      {
        question: 'What\'s the difference between a misdemeanor and felony?',
        answer: 'Misdemeanors are less serious crimes typically punishable by fines, community service, or jail time of less than one year. Felonies are more serious crimes punishable by imprisonment for more than one year, hefty fines, and long-term consequences like loss of voting rights or difficulty finding employment.',
        category: 'criminal-law'
      }
    ]
  },
  {
    id: '2',
    title: 'Civil Law',
    description: 'Personal injury, contract disputes, property issues, and civil litigation matters.',
    icon: '📋',
    slug: 'civil-law',
    overview: 'Civil law governs disputes between individuals, organizations, or entities where one party seeks compensation or other remedies from another. Unlike criminal law, civil cases involve private rights and remedies, including personal injury claims, contract disputes, and property matters.',
    commonIssues: [
      'Personal injury and accident claims',
      'Contract breaches and disputes',
      'Property damage and disputes',
      'Negligence and liability issues',
      'Product liability claims',
      'Professional malpractice',
      'Debt collection and disputes',
      'Consumer protection issues'
    ],
    procedures: [
      'Initial consultation and case evaluation',
      'Investigation and evidence gathering',
      'Filing complaints and serving defendants',
      'Discovery process and depositions',
      'Mediation and settlement negotiations',
      'Trial preparation and litigation',
      'Judgment enforcement',
      'Appeals process if necessary'
    ],
    faqs: [
      {
        question: 'How long do I have to file a personal injury lawsuit?',
        answer: 'The statute of limitations for personal injury cases varies by state, typically ranging from 1-4 years from the date of injury or discovery of injury. It\'s crucial to consult with an attorney as soon as possible to ensure your rights are protected and deadlines are met.',
        category: 'civil-law'
      },
      {
        question: 'What damages can I recover in a civil lawsuit?',
        answer: 'Depending on your case, you may recover compensatory damages (medical expenses, lost wages, property damage), pain and suffering, emotional distress, and in some cases, punitive damages. The specific damages available depend on the nature of your case and applicable laws.',
        category: 'civil-law'
      },
      {
        question: 'Should I accept the first settlement offer?',
        answer: 'Generally, no. Initial settlement offers are often lower than fair compensation. It\'s important to have a complete understanding of your damages, including future medical expenses and long-term impacts, before accepting any settlement. Consult with an attorney to evaluate the fairness of any offer.',
        category: 'civil-law'
      }
    ]
  },
  {
    id: '3',
    title: 'Family Law',
    description: 'Divorce, child custody, adoption, domestic relations, and family legal matters.',
    icon: '👨‍👩‍👧‍👦',
    slug: 'family-law',
    overview: 'Family law addresses legal issues involving family relationships, including marriage, divorce, child custody, adoption, and domestic relations. These matters are often emotionally challenging and require sensitive, knowledgeable legal guidance to protect your interests and those of your children.',
    commonIssues: [
      'Divorce and legal separation',
      'Child custody and visitation rights',
      'Child and spousal support',
      'Property division and asset protection',
      'Prenuptial and postnuptial agreements',
      'Adoption and guardianship',
      'Domestic violence protection',
      'Paternity and parental rights'
    ],
    procedures: [
      'Initial consultation and strategy planning',
      'Filing divorce or family court petitions',
      'Temporary orders for support and custody',
      'Discovery and financial disclosures',
      'Mediation and collaborative law options',
      'Court hearings and trials',
      'Final decree and order entry',
      'Post-judgment modifications'
    ],
    faqs: [
      {
        question: 'How is child custody determined?',
        answer: 'Courts determine custody based on the "best interests of the child" standard, considering factors like parental fitness, stability of home environment, child\'s preferences (if age-appropriate), existing relationships, and each parent\'s ability to provide for the child\'s physical, emotional, and educational needs.',
        category: 'family-law'
      },
      {
        question: 'How is property divided in divorce?',
        answer: 'Property division depends on whether you\'re in a community property or equitable distribution state. Community property states generally split marital assets 50/50, while equitable distribution states divide property fairly but not necessarily equally, considering factors like length of marriage, each spouse\'s contributions, and future needs.',
        category: 'family-law'
      },
      {
        question: 'Can I modify child support payments?',
        answer: 'Yes, child support can be modified when there\'s a substantial change in circumstances, such as job loss, significant income change, changes in custody arrangements, or changes in the child\'s needs. You must petition the court for modification; you cannot simply stop paying or change the amount on your own.',
        category: 'family-law'
      }
    ]
  },
  {
    id: '4',
    title: 'Corporate Law',
    description: 'Business formation, contracts, compliance, mergers, and corporate legal matters.',
    icon: '🏢',
    slug: 'corporate-law',
    overview: 'Corporate law governs the formation, operation, and dissolution of corporations and other business entities. This area covers everything from business formation and contracts to mergers and acquisitions, helping businesses navigate complex legal requirements and protect their interests.',
    commonIssues: [
      'Business entity formation and structure',
      'Corporate governance and compliance',
      'Contract drafting and negotiation',
      'Mergers and acquisitions',
      'Securities and investment matters',
      'Employment law compliance',
      'Intellectual property protection',
      'Regulatory compliance and licensing'
    ],
    procedures: [
      'Business planning and entity selection',
      'Articles of incorporation filing',
      'Bylaws and operating agreement drafting',
      'Corporate record maintenance',
      'Board resolutions and meetings',
      'Due diligence for transactions',
      'Contract review and execution',
      'Ongoing compliance monitoring'
    ],
    faqs: [
      {
        question: 'What type of business entity should I choose?',
        answer: 'The choice depends on factors like liability protection needs, tax considerations, number of owners, and growth plans. Common options include LLC (flexibility and tax benefits), Corporation (liability protection and investment opportunities), and Partnership (shared ownership and management). Consult with an attorney to determine the best structure for your specific situation.',
        category: 'corporate-law'
      },
      {
        question: 'What should be included in a business contract?',
        answer: 'Essential elements include clear identification of parties, detailed description of goods/services, payment terms, delivery/performance deadlines, dispute resolution procedures, termination clauses, and applicable law. Contracts should be specific, comprehensive, and protect your business interests while being fair to all parties.',
        category: 'corporate-law'
      },
      {
        question: 'How can I protect my business from liability?',
        answer: 'Key strategies include choosing the right business entity (LLC or Corporation), maintaining proper corporate formalities, obtaining adequate insurance coverage, using well-drafted contracts, implementing compliance programs, and keeping personal and business finances separate. Regular legal reviews can help identify and address potential liability issues.',
        category: 'corporate-law'
      }
    ]
  },
  {
    id: '5',
    title: 'Real Estate Law',
    description: 'Property transactions, landlord-tenant issues, zoning, and real estate legal matters.',
    icon: '🏠',
    slug: 'real-estate',
    overview: 'Real estate law governs the buying, selling, and use of land and property. This includes residential and commercial transactions, landlord-tenant relationships, zoning issues, property development, and resolving disputes related to real property ownership and use.',
    commonIssues: [
      'Residential and commercial property sales',
      'Landlord and tenant disputes',
      'Property title and boundary issues',
      'Zoning and land use matters',
      'Construction and development law',
      'Property management and leasing',
      'Foreclosure defense and assistance',
      'Environmental compliance and liability'
    ],
    procedures: [
      'Property title search and examination',
      'Purchase agreement negotiation',
      'Due diligence and inspections',
      'Mortgage and financing coordination',
      'Closing preparation and attendance',
      'Deed preparation and recording',
      'Dispute resolution and litigation',
      'Ongoing compliance monitoring'
    ],
    faqs: [
      {
        question: 'Do I need an attorney for a real estate transaction?',
        answer: 'While not required in all states, having an attorney is highly recommended for real estate transactions. An attorney can review contracts, conduct title searches, identify potential issues, negotiate terms, and ensure proper document preparation and recording. This protection is valuable given the significant financial investment involved.',
        category: 'real-estate'
      },
      {
        question: 'What happens if there are title issues with my property?',
        answer: 'Title issues can include liens, boundary disputes, easements, or ownership questions. Solutions may involve negotiating with lienholders, obtaining title insurance, filing quiet title actions, or resolving boundary disputes through surveys and agreements. An attorney can help investigate the issue and recommend appropriate action.',
        category: 'real-estate'
      },
      {
        question: 'Can a landlord evict me without cause?',
        answer: 'Eviction laws vary by state and lease terms. Generally, landlords need "just cause" for eviction, such as non-payment of rent, lease violations, or property damage. Month-to-month tenants may be evicted with proper notice even without cause in many states. Tenants have rights and defenses that vary by jurisdiction, so consult local tenant rights organizations or attorneys.',
        category: 'real-estate'
      }
    ]
  },
  {
    id: '6',
    title: 'Employment Law',
    description: 'Workplace rights, discrimination, contracts, wages, and employment legal issues.',
    icon: '💼',
    slug: 'employment-law',
    overview: 'Employment law governs the relationship between employers and employees, including hiring practices, workplace conditions, wages, discrimination, harassment, and termination. This area protects worker rights while helping employers understand their legal obligations and maintain compliant workplaces.',
    commonIssues: [
      'Workplace discrimination and harassment',
      'Wrongful termination and retaliation',
      'Wage and hour disputes',
      'Employment contract negotiations',
      'Workplace safety and OSHA compliance',
      'Family and medical leave rights',
      'Unemployment and disability benefits',
      'Non-compete and confidentiality agreements'
    ],
    procedures: [
      'Initial case evaluation and documentation',
      'EEOC complaint filing and investigation',
      'Internal company grievance procedures',
      'Mediation and settlement negotiations',
      'Agency investigation cooperation',
      'Litigation preparation and filing',
      'Discovery and evidence gathering',
      'Trial or administrative hearing representation'
    ],
    faqs: [
      {
        question: 'What constitutes workplace discrimination?',
        answer: 'Workplace discrimination involves treating employees unfavorably based on protected characteristics like race, gender, age, religion, disability, national origin, or pregnancy. This includes hiring, firing, promotion, compensation, and workplace conditions decisions. Both intentional discrimination and policies with discriminatory effects can be illegal.',
        category: 'employment-law'
      },
      {
        question: 'Can I be fired without cause?',
        answer: 'Most employment in the U.S. is "at-will," meaning employers can terminate employees for any reason or no reason, as long as it\'s not illegal (like discrimination or retaliation). However, exceptions exist for union contracts, employment agreements, public policy violations, and implied contracts. Consult an attorney if you believe your termination was illegal.',
        category: 'employment-law'
      },
      {
        question: 'What should I do if I\'m experiencing workplace harassment?',
        answer: 'Document all incidents with dates, witnesses, and details. Report harassment through your company\'s internal procedures if available. If internal reporting doesn\'t resolve the issue or if retaliation occurs, you may file complaints with the EEOC or state agencies. Consider consulting with an employment attorney to understand your rights and options.',
        category: 'employment-law'
      }
    ]
  },
  {
    id: '7',
    title: 'Immigration Law',
    description: 'Visas, citizenship, deportation defense, and immigration legal matters.',
    icon: '🌍',
    slug: 'immigration-law',
    overview: 'Immigration law governs the entry, stay, and naturalization of foreign nationals in the United States. This complex area includes visa applications, green card processes, citizenship applications, deportation defense, and helping individuals and families navigate the immigration system.',
    commonIssues: [
      'Visa applications and renewals',
      'Green card and permanent residence',
      'Citizenship and naturalization',
      'Deportation and removal defense',
      'Family-based immigration petitions',
      'Employment-based immigration',
      'Asylum and refugee protection',
      'Immigration court proceedings'
    ],
    procedures: [
      'Case assessment and eligibility review',
      'Document preparation and gathering',
      'USCIS petition and application filing',
      'Biometrics and interview preparation',
      'Response to requests for evidence',
      'Immigration court representation',
      'Appeals and motions practice',
      'Status adjustment and naturalization'
    ],
    faqs: [
      {
        question: 'How long does it take to get a green card?',
        answer: 'Green card processing times vary significantly based on your category and country of birth. Family-based cases can take 1-3 years for immediate relatives, while other categories may take much longer. Employment-based cases typically take 1-3 years but can be longer for certain countries. Check current USCIS processing times for specific case types.',
        category: 'immigration-law'
      },
      {
        question: 'Can I work while my immigration case is pending?',
        answer: 'Work authorization depends on your specific immigration status and case type. Some applicants can apply for Employment Authorization Documents (EAD) while cases are pending, while others cannot work legally until their status is approved. Working without authorization can have serious consequences for your immigration case.',
        category: 'immigration-law'
      },
      {
        question: 'What should I do if I receive a deportation notice?',
        answer: 'Contact an immigration attorney immediately. You have the right to legal representation in immigration court. Do not ignore the notice or miss court dates, as this can result in removal in absentia. An attorney can help you understand your options, which may include cancellation of removal, asylum, adjustment of status, or other relief.',
        category: 'immigration-law'
      }
    ]
  },
  {
    id: '8',
    title: 'Constitutional Law',
    description: 'Civil rights, constitutional rights, government procedures, and civil liberties.',
    icon: '🗽',
    slug: 'constitutional-law',
    overview: 'Constitutional law involves the interpretation and application of the U.S. Constitution, including civil rights, civil liberties, separation of powers, and government authority. This area protects individual rights against government overreach and ensures proper governmental procedures are followed.',
    commonIssues: [
      'First Amendment rights and free speech',
      'Fourth Amendment and search/seizure',
      'Due process and equal protection',
      'Civil rights violations and Section 1983 claims',
      'Government transparency and FOIA',
      'Voting rights and election law',
      'Religious freedom and establishment',
      'Privacy rights and surveillance'
    ],
    procedures: [
      'Constitutional claim identification',
      'Civil rights lawsuit preparation',
      'Section 1983 and Bivens actions',
      'Injunctive relief and damages',
      'Federal court litigation',
      'Appeals to circuit courts',
      'Supreme Court petition preparation',
      'Settlement and consent decrees'
    ],
    faqs: [
      {
        question: 'What are my Fourth Amendment rights?',
        answer: 'The Fourth Amendment protects against unreasonable searches and seizures by government agents. Generally, police need a warrant based on probable cause to search your person, home, or belongings. Exceptions exist for consent, exigent circumstances, plain view, and searches incident to arrest. If your Fourth Amendment rights are violated, evidence obtained may be excluded from criminal proceedings.',
        category: 'constitutional-law'
      },
      {
        question: 'Can the government limit free speech?',
        answer: 'The First Amendment strongly protects free speech, but some limitations exist. The government cannot engage in content-based restrictions without compelling justification, but can impose reasonable time, place, and manner restrictions. Unprotected speech includes true threats, incitement to imminent lawless action, obscenity, and defamation.',
        category: 'constitutional-law'
      },
      {
        question: 'What is a civil rights violation?',
        answer: 'Civil rights violations occur when government officials or those acting under government authority deny individuals their constitutional rights. Common violations include excessive force by police, discrimination in government services, denial of due process, and First Amendment violations. Remedies may include monetary damages and injunctive relief under Section 1983 and other civil rights laws.',
        category: 'constitutional-law'
      }
    ]
  }
];

export const legalResources: LegalResource[] = [
  {
    id: '1',
    title: 'Understanding Your Legal Rights',
    description: 'Comprehensive guide to basic legal rights every citizen should know.',
    category: 'general',
    content: 'Every citizen has fundamental legal rights protected by law. These include the right to legal representation, the right to remain silent when questioned by law enforcement, the right to due process, and protection against discrimination. Understanding these rights is crucial for protecting yourself in various legal situations.'
  },
  {
    id: '2',
    title: 'How to Choose the Right Attorney',
    description: 'Essential factors to consider when selecting legal representation.',
    category: 'general',
    content: 'Selecting the right attorney is crucial for your legal success. Consider the attorney\'s experience in your specific legal area, their track record, communication style, fee structure, and availability. Schedule consultations with multiple attorneys, ask about their approach to your case, and ensure you feel comfortable with their representation.'
  },
  {
    id: '3',
    title: 'Legal Document Preparation Guide',
    description: 'Best practices for preparing and organizing legal documents.',
    category: 'procedures',
    content: 'Proper document preparation is essential for any legal matter. Organize all relevant documents chronologically, make copies of everything, keep originals in a safe place, and create a detailed timeline of events. Ensure all documents are legible, complete, and properly dated and signed where required.'
  },
  {
    id: '4',
    title: 'Court Procedures and Etiquette',
    description: 'What to expect and how to behave in court proceedings.',
    category: 'procedures',
    content: 'Court proceedings follow specific protocols and etiquette. Arrive early, dress professionally, turn off electronic devices, stand when the judge enters, address the court as "Your Honor," speak only when asked, and be respectful at all times. Follow your attorney\'s guidance and never interrupt or argue with the judge.'
  }
];

// Combined FAQ data for search functionality
export const allFAQs: FAQ[] = practiceAreas.reduce<FAQ[]>((acc, area) => [...acc, ...area.faqs], []);

// Search function for FAQs
export function searchFAQs(query: string, category?: string): FAQ[] {
  const searchTerm = query.toLowerCase();
  let faqs = category ? allFAQs.filter(faq => faq.category === category) : allFAQs;
  
  return faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm) || 
    faq.answer.toLowerCase().includes(searchTerm)
  );
}