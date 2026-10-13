export interface A11yOption {
  kind: "font" | "mode" | "reset";
  key?: string;
  dir?: 1 | -1;
  icon: string;
  label: string;
}

export const common = {
  skipLink: "דלג לתוכן",
  logoAria: "Levi-Tec בית",
  navAria: "ניווט ראשי",
  mobileNavAria: "ניווט נייד",
  footerNavAria: "ניווט תחתון",
  headerCta: "בוא נדבר על הפרויקט",
  menuOpen: "פתיחת תפריט",
  menuClose: "סגירת תפריט",
  footerAbout: "אתרים, מערכות ואוטומציות בהתאמה אישית לעסקים קטנים ובינוניים.",
  footerNavTitle: "ניווט",
  footerLegal: [
    { href: "/accessibility/", label: "הצהרת נגישות" },
    { href: "/privacy/", label: "מדיניות פרטיות" },
  ],
  footerContactTitle: "יצירת קשר",
  footerEmailLabel: "אימייל:",
  footerWa: "שליחה ב־WhatsApp",
  footerContactForm: "טופס יצירת קשר",
  footerRights: (year: number): string => `© ${year} Levi-Tec. כל הזכויות שמורות.`,
  footerBuilt: "נבנה בקפידה, בעברית, עם קוד נקי ותחזוקתי.",
  floats: {
    a11yButton: "תפריט נגישות",
    waButton: "שליחה בוואטסאפ",
    contactButton: "מעבר לטופס יצירת קשר",
    panelLabel: "אפשרויות נגישות",
    panelTitle: "נגישות",
  },
  a11yOptions: [
    { kind: "font", dir: 1, icon: "ti-plus", label: "הגדלת טקסט" },
    { kind: "font", dir: -1, icon: "ti-minus", label: "הקטנת טקסט" },
    { kind: "mode", key: "contrast", icon: "ti-contrast", label: "ניגודיות גבוהה" },
    { kind: "mode", key: "grayscale", icon: "ti-eye", label: "גווני אפור" },
    { kind: "mode", key: "links", icon: "ti-link", label: "הדגשת קישורים" },
    { kind: "mode", key: "readable", icon: "ti-keyboard", label: "גופן קריא" },
    { kind: "mode", key: "noanim", icon: "ti-player-pause", label: "עצירת אנימציות" },
    { kind: "reset", icon: "ti-refresh", label: "איפוס הגדרות" },
  ] as A11yOption[],
};

export const formMessages = {
  nameRequired: "נא להזין שם מלא.",
  contactInvalid: "נא להזין אימייל או טלפון תקין.",
  messageShort: "נא לתאר את הפרויקט בכמה משפטים (10 תווים לפחות).",
  privacyRequired: "נדרש אישור יצירת קשר.",
  successWa: "נפתח חלון WhatsApp עם ההודעה — רק ללחוץ שליחה. תודה!",
  successMail: "נפתח חלון מייל עם הפרטים — רק ללחוץ שליחה. תודה!",
  mailSubjectPrefix: "פנייה חדשה מהאתר — ",
  contactLinePrefix: "טלפון/מייל: ",
  waSignature: "(נשלח מהאתר Levi-Tec)",
  fieldPrefix: "תחום: ",
  greetingPrefix: "שלום, אני ",
  businessPrefix: " מהעסק ",
};
