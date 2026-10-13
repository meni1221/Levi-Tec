export const siteConfig = {
  name: "Levi-Tec",
  tagline: "טכנולוגיה שעובדת בשביל העסק שלך.",
  headline: "העסק שלך. השלב הבא שלו.",
  supportCopy:
    "אתרים, מערכות ואוטומציות בהתאמה אישית — כדי לעבוד חכם יותר, לחסוך זמן וליצור חוויית משתמש טובה יותר.",
  email: "menilevi0533011599@gmail.com",
  // מספר WhatsApp בפורמט בינלאומי ללא + (0533011599 -> 972533011599)
  whatsappNumber: "972533011599",
  linkedin: "",
  github: "",
  contactPrefill: "שלום, הגעתי לאתר Levi-Tec ואשמח לדבר על פרויקט.",
  nav: [
    { href: "/", match: "index", label: "בית" },
    { href: "/services/", match: "services", label: "שירותים" },
    { href: "/projects/", match: "projects", label: "פרויקטים" },
    { href: "/about/", match: "about", label: "אודות" },
    { href: "/process/", match: "process", label: "תהליך עבודה" },
    { href: "/contact/", match: "contact", label: "צור קשר" },
  ],
};

export function whatsappLink(message?: string): string | null {
  if (!siteConfig.whatsappNumber) return null;
  const text = encodeURIComponent(message ?? siteConfig.contactPrefill);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
