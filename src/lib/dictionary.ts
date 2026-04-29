// src/lib/dictionary.ts

export type Locale = "en" | "hi";

export type Dictionary = typeof dictionaries.en;

const dictionaries = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      impact: "Impact",
      blog: "Resources",
      contact: "Contact",
      donate: "Donate",
      volunteer: "Volunteer",
    },
    hero: {
      title: "Building Rural Futures, Together.",
      subtitle: "NextBuildX is a student-led initiative empowering rural communities through sustainable infrastructure.",
      impact: "Join our journey to impact 1,000 lives this year.",
      cta_donate: "Support Us",
      cta_volunteer: "Join the Team",
      cta_report: "Suggest a Project",
    },
    about: {
      title: "Our Story",
      mission: "To bridge the gap between urban resources and rural potential through student-led development initiatives.",
      vision: "A world where every village has access to sustainable infrastructure and education.",
      values: "Integrity, Community-First, Sustainability",
      team_title: "The Founders",
      partners_title: "Strategic Partners",
    },
    projects: {
      title: "Upcoming Projects",
      status_ongoing: "Planning",
      status_completed: "Proposed",
      view_details: "View Goals",
    },
    impact: {
      title: "Impact Stories",
      before: "Before",
      after: "After",
    },
    contact: {
      title: "Get in Touch",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
    },
    volunteer: {
      title: "Volunteer with Us",
      skills: "Preferred Skills",
      phone: "Phone Number",
      submit: "Sign Up",
    },
    footer: {
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      newsletter: "Subscribe to our newsletter",
    },
  },
  hi: {
    nav: {
      home: "होम",
      about: "हमारे बारे में",
      projects: "परियोजनाएं",
      impact: "प्रभाव",
      blog: "संसाधन",
      contact: "संपर्क करें",
      donate: "दान करें",
      volunteer: "स्वयंसेवक बनें",
    },
    hero: {
      title: "ग्रामीण भविष्य का निर्माण, एक साथ।",
      subtitle: "NextBuildX एक छात्र-नेतृत्व वाली पहल है जो टिकाऊ बुनियादी ढांचे के माध्यम से ग्रामीण समुदायों को सशक्त बनाती है।",
      impact: "इस वर्ष 1,000 जीवन को प्रभावित करने की हमारी यात्रा में शामिल हों।",
      cta_donate: "हमारा समर्थन करें",
      cta_volunteer: "टीम में शामिल हों",
      cta_report: "परियोजना का सुझाव दें",
    },
    about: {
      title: "हमारी कहानी",
      mission: "छात्र-नेतृत्व वाली विकास पहलों के माध्यम से शहरी संसाधनों और ग्रामीण क्षमता के बीच की खाई को पाटना।",
      vision: "एक ऐसी दुनिया जहां हर गांव में टिकाऊ बुनियादी ढांचे और शिक्षा तक पहुंच हो।",
      values: "ईमानदारी, समुदाय-पहले, स्थिरता",
      team_title: "संस्थापक",
      partners_title: "रणनीतिक सहयोगी",
    },
    projects: {
      title: "आगामी परियोजनाएं",
      status_ongoing: "योजना",
      status_completed: "प्रस्तावित",
      view_details: "लक्ष्य देखें",
    },
    impact: {
      title: "प्रभाव की कहानियां",
      before: "पहले",
      after: "बाद में",
    },
    contact: {
      title: "संपर्क में रहें",
      name: "नाम",
      email: "ईमेल",
      message: "संदेश",
      send: "संदेश भेजें",
    },
    volunteer: {
      title: "हमारे साथ स्वयंसेवा करें",
      skills: "कौशल",
      phone: "फ़ोन नंबर",
      submit: "साइन अप करें",
    },
    footer: {
      rights: "सर्वाधिकार सुरक्षित।",
      privacy: "गोपनीयता नीति",
      newsletter: "हमारे न्यूज़लेटर की सदस्यता लें",
    },
  },
};

export const getDictionary = (lang: Locale): Dictionary => dictionaries[lang] || dictionaries.en;
