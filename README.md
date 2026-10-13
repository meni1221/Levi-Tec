# Levi-Tec — אתר עסקי (Vite + Vanilla TS)

אתר סטטי בעברית (RTL), בלי Next.js — קבצי HTML פשוטים + TypeScript קל.

## הרצה מקומית

```bash
npm install
npm run dev
```

## בנייה

```bash
npm run build
npm run preview
```

הקבצים המוכנים נוצרים ב־`dist/` — אפשר להעלות לכל אחסון סטטי.

## מבנה

- `index.html`, תיקיות `services/`, `projects/`, `about/`, `process/`, `contact/`, `accessibility/`, `privacy/` (כל אחת עם `index.html` — כתובות נקיות), `404.html` — מעטפת רזה, כל הטקסט מרונדר מ־`src/texts/`
- `src/style.css` — только `@import` из `src/styles/` (`tokens`, `base`, `header`, `sections`, `cards`, `hero`, `forms`, `floats`, `a11y`, `footer`, `cta`)
- `src/site.ts` — מייל, WhatsApp, ניווט
- `src/content.ts` — שירותים, פרויקטים, תהליך (re-exported from `src/texts/`)
- `src/texts/` — כל הטקסטים בעברית כאובייקטים: `common.ts`, `home.ts`, `servicesPage.ts`, `projectsPage.ts`, `aboutPage.ts`, `processPage.ts`, `contactPage.ts`, `legal.ts`, `notFound.ts`, `index.ts`
- `src/ui/` — `components.ts` (בנאי `badge`/`iconBadge`/`checkList`/`stackList`/`sectionHead`/`card`), `header.ts`, `footer.ts`, `floats.ts`, `a11y.ts`
- `src/shared.ts` — מעטפת `initPage` בלבד
- `src/pages/` — לוגיקה לכל עמוד (מרכיבה `ui/components` + `texts`, בלי עברית inline)
- `public/robots.txt`

## פרטי קשר (מעודכנים)

- מייל: `menilevi0533011599@gmail.com`
- טלפון/WhatsApp: `053-301-1599` (`972533011599`)
- הודעת WhatsApp מוגדרת מראש בעברית, עם טקסט הטופס

## אייקונים

Tabler Icons דרך CDN רשמי (`@tabler/icons-webfont`), בשימוש: whatsapp, נגישות, תפריט, טפסים, שירותים.

## נגישות

תפריט צף: הגדלת/הקטנת טקסט, ניגודיות, גווני אפור, הדגשת קישורים, גופן קריא, עצירת אנימציות, איפוס. נשמר ב־localStorage. עמוד הצהרת נגישות + קישור בפוטר.

## טקסטים לא ניתנים להעתקה

`user-select: none` על התוכן; שדות טופס נשארים ניתנים לכתיבה. בלי חסימת תפריט קליק ימני (פוגע בנגישות).

## טופס

סטטי — פותח WhatsApp (או מייל כגיבוי) עם תוכן הפנייה. אין שרת ואין הצלחה מזויפת.

## פתוח

- דומיין ייצור, לוגו סופי, פרויקטים אמיתיים (כרגע 3 דמו מסומנים)
- העתקת תוכן מסמכי ה־Word ב־`_incoming` לעמודי הנגישות/פרטיות
