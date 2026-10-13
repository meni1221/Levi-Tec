import { formMessages } from "./common";

export const contactPage = {
  head: {
    eyebrow: "צור קשר",
    title: "ספרו על הפרויקט",
    lead: "כמה משפטים על העסק והצורך יספיקו להתחלה. עונה בדרך כלל תוך יום עסקים אחד.",
  },
  quick: {
    icon: "ti-mail",
    title: "דרכים מהירות",
    emailLabel: "אימייל:",
    waCta: "שליחה ב־WhatsApp",
    waIcon: "ti-brand-whatsapp",
    phoneDisplay: "053-301-1599",
  },
  form: {
    aria: "טופס יצירת קשר",
    nameLabel: "שם מלא *",
    namePlaceholder: "לדוגמה: דני כהן",
    businessLabel: "שם העסק",
    businessPlaceholder: "אופציונלי",
    contactLabel: "אימייל או טלפון *",
    contactPlaceholder: "you@example.com / 050-0000000",
    serviceLabel: "תחום מבוקש",
    serviceOptions: ["אתר תדמית", "מערכת ניהול", "אוטומציה", "פתרון אחר"],
    messageLabel: "תיאור הפרויקט *",
    messagePlaceholder: "ספרו בכמה משפטים מה העסק עושה ומה הייתם רוצים לשפר...",
    privacyLabel: "אני מאשר/ת יצירת קשר בנוגע לפנייה. פרטי הקשר ישמשו למענה בלבד. *",
    submitIcon: "ti-send",
    submit: "שליחת הפנייה",
    note: "הטופס פותח WhatsApp או מייל עם ההודעה — אין שרת, אין הצלחה מזויפת.",
  },
  messages: formMessages,
};

export function buildWaText(name: string, business: string, service: string, message: string): string {
  const m = formMessages;
  return `${m.greetingPrefix}${name}${business ? `${m.businessPrefix}${business}` : ""}.\n${m.fieldPrefix}${service}\n${message}\n${m.waSignature}`;
}
