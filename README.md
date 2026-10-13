# Levi-Tec — אתר עסקי (Vite + React + TypeScript)

אתר סטטי בעברית (RTL), בלי Next.js — קבצי HTML פשוטים + React קל.

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
- `src/style.css` — מכיל רק שורות `@import` מתוך `src/styles/` (`tokens`, `base`, `header`, `sections`, `cards`, `hero`, `forms`, `floats`, `a11y`, `footer`, `cta`)
- `src/site.ts` — מייל, WhatsApp, ניווט
- `src/content.ts` — שירותים, פרויקטים, תהליך (re-exported from `src/texts/`)
- `src/texts/` — כל הטקסטים בעברית כאובייקטים: `common.ts`, `home.ts`, `servicesPage.ts`, `projectsPage.ts`, `aboutPage.ts`, `processPage.ts`, `contactPage.ts`, `legal.ts`, `notFound.ts`, `index.ts`
- `src/main.tsx` — נקודת כניסה יחידה לכל העמודים (קורא `data-page` מ־`#root`, מרנדר `Header` + עמוד + `Footer` + `Floats`)
- `src/ui/` — `components.tsx` (רכיבי `Badge`/`IconBadge`/`CheckList`/`StackList`/`SectionHead`/`Card`/`LinkCard`), `Header.tsx`, `Footer.tsx`, `Floats.tsx`, `useA11y.ts` (הוק נגישות עם localStorage)
- `src/pages/` — רכיב לכל עמוד (`Home`, `Services`, `Projects`, `About`, `Process`, `Contact`, `Accessibility`, `Privacy`, `NotFound`; מרכיבים `ui/components` + `texts`, בלי עברית inline)
- `public/` — `robots.txt`, `sitemap.xml`

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

- דומיין ייצור, לוגו סופי, פרויקטים אמיתיים נוספים (כרגע פרויקט חי אחד — אתר תדמית למשרד עו״ד לדיני מס: https://sle-law-site.menilevi0533011599.workers.dev/ ; פרויקטי הדמו נמחקו)
- העתקת תוכן מסמכי ה־Word ב־`_incoming` לעמודי הנגישות/פרטיות
