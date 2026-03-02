// src/lib/dictionary.ts

export type Locale = "en" | "hi";

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
      subtitle: "NextBuildX empowers communities through sustainable infrastructure and education.",
      impact: "Over 50+ projects delivered in 3 years.",
      cta_donate: "Donate Now",
      cta_volunteer: "Join Us",
      cta_report: "Report a Project",
    },
    about: {
      title: "Our Mission",
      mission: "To bridge the gap between urban resources and rural potential through student-led development initiatives.",
      vision: "A world where every village has access to sustainable infrastructure and education.",
      values: "Integrity, Community-First, Sustainability",
      team_title: "Meet the Team",
      partners_title: "Our Partners",
    },
    projects: {
      title: "Our Projects",
      status_ongoing: "Ongoing",
      status_completed: "Completed",
      view_details: "View Details",
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
      subtitle: "NextBuildX टिकाऊ बुनियादी ढांचे और शिक्षा के माध्यम से समुदायों को सशक्त बनाता है।",
      impact: "3 वर्षों में 50+ से अधिक परियोजनाएं पूरी की गईं।",
      cta_donate: "अभी दान करें",
      cta_volunteer: "जुड़ें",
      cta_report: "परियोजना रिपोर्ट करें",
    },
    about: {
      title: "हमारा मिशन",
      mission: "छात्र-नेतृत्व वाली विकास पहलों के माध्यम से शहरी संसाधनों और ग्रामीण क्षमता के बीच की खाई को पाटना।",
      vision: "एक ऐसी दुनिया जहां हर गांव में टिकाऊ बुनियादी ढांचे और शिक्षा तक पहुंच हो।",
      values: "ईमानदारी, समुदाय-पहले, स्थिरता",
      team_title: "हमारी टीम",
      partners_title: "हमारे सहयोगी",
    },
    projects: {
      title: "हमारी परियोजनाएं",
      status_ongoing: "चल रहा है",
      status_completed: "पूरा हुआ",
      view_details: "विवरण देखें",
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

export const getDictionary = (lang: Locale) => dictionaries[lang];
