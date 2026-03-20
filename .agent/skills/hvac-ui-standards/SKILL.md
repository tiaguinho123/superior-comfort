---
name: HVAC Site UI Standards
description: Standard UI components and patterns for all HVAC client sites — scrolling Marquee trust badges, navbar hamburger fix, cn() utility, and mobile-first responsiveness rules.
---

# HVAC Site UI Standards Skill

This skill defines the standard patterns to apply to **every** HVAC client site cloned from the `hvac-template`. Apply all steps below whenever starting or updating an HVAC site.

---

## 📦 Files to Copy

Copy all files from `resources/` into the client project:

| Source | Destination |
|---|---|
| `resources/lib/utils.ts` | `src/lib/utils.ts` |
| `resources/components/ui/marquee.tsx` | `src/components/ui/marquee.tsx` |
| `resources/components/TrustBadges.tsx` | `src/components/TrustBadges.tsx` |

---

## 🛠️ Implementation Steps

### Step 1 — Copy utility and Marquee component

Copy `resources/lib/utils.ts` → `src/lib/utils.ts`  
Copy `resources/components/ui/marquee.tsx` → `src/components/ui/marquee.tsx`

No npm installs needed — these have zero external dependencies beyond React.

---

### Step 2 — Replace TrustBadges with the scrolling version

Copy `resources/components/TrustBadges.tsx` → `src/components/TrustBadges.tsx`

This replaces the static grid with a horizontally-scrolling Marquee. The badges auto-scroll and pause on hover.

Customize the badge data via `SiteConfigContext` → `trustBadges` array. Each badge needs:
```ts
{ label: string; sub: string; icon: string }
// icon must be one of: Award | ShieldCheck | Star | CheckCircle | Wrench | Clock
```

---

### Step 3 — Fix Navbar hamburger (hide on desktop)

In `src/components/Navbar.tsx`, find the mobile toggle button and ensure:

1. It has class `hamburger-btn` + `md:hidden`:
```tsx
<button className="hamburger-btn md:hidden p-2 text-slate-700" ...>
```

2. The mobile menu container also uses `md:hidden`:
```tsx
<div className="md:hidden bg-white border-t ...">
```

3. The desktop call button uses `hidden md:inline-flex` (not `hidden lg:inline-flex`):
```tsx
<a className="hidden md:inline-flex items-center ...">
```

> ⚠️ **Common mistake**: Desktop nav uses `hidden md:flex` — hamburger must also use `md:hidden` (not `lg:hidden`) to avoid both showing at the same time between 768px–1024px.

---

### Step 4 — Add hamburger CSS safety rule to `src/index.css`

Append this to the bottom of `src/index.css` as a guaranteed fallback (in case Tailwind v4 doesn't process the `md:hidden` class correctly):

```css
/* Hamburger: hide on md+ screens (safety rule for Tailwind v4) */
@media (min-width: 768px) {
  .hamburger-btn { display: none !important; }
}
```

---

### Step 5 — Mobile review size (reviews section)

In `src/components/GoogleReviews.tsx`, all review cards should have `text-sm` on mobile. Star rating icons should be `w-3 h-3 sm:w-4 sm:h-4`. Review card padding should be `p-4 sm:p-6`.

---

## 📐 Breakpoint Standards

| Breakpoint | Width | Rule |
|---|---|---|
| Mobile | `< 768px` | Hamburger visible, single column layouts |
| Tablet / Desktop | `≥ 768px` (`md:`) | Hamburger hidden, desktop nav visible |
| Large Desktop | `≥ 1024px` (`lg:`) | Max-width containers, wider padding |

> Always align the hamburger breakpoint with the desktop nav breakpoint. If desktop nav is `hidden md:flex`, hamburger MUST be `md:hidden`.

---

## 🔁 Marquee Configuration

The Marquee component (`src/components/ui/marquee.tsx`) accepts these props:

| Prop | Default | Description |
|---|---|---|
| `duration` | `30` | Scroll speed in seconds (lower = faster) |
| `pauseOnHover` | `true` | Pauses animation on mouse hover |
| `direction` | `"left"` | `"left"` \| `"right"` \| `"up"` \| `"down"` |
| `fade` | `true` | Fades edges with mask gradient |
| `fadeAmount` | `8` | Percentage fade on each side (0–50) |

**Recommended usage for trust badges:**
```tsx
<Marquee duration={28} pauseOnHover fade fadeAmount={8}>
  {badges.map((b, i) => <BadgeCard key={i} {...b} />)}
</Marquee>
```

---

## ✅ Checklist (apply to every site)

- [ ] `src/lib/utils.ts` exists with `cn()` helper
- [ ] `src/components/ui/marquee.tsx` exists
- [ ] `TrustBadges` uses scrolling `<Marquee>` (not static grid)
- [ ] Hamburger button has class `hamburger-btn md:hidden`
- [ ] Desktop nav uses `hidden md:flex` (aligned with hamburger)
- [ ] `index.css` has `@media (min-width: 768px) .hamburger-btn { display: none }` rule
- [ ] Google review cards have responsive text sizes
- [ ] No images from `unsplash.com` (use original site CDN images)
- [ ] All images verified with HTTP HEAD check before use
- [ ] Hero CTA buttons use `whitespace-nowrap` to prevent text wrapping
- [ ] Phone number button always `whitespace-nowrap`

---

## 🚨 Common Mistakes to Avoid

1. **Wrong breakpoint on hamburger** — using `lg:hidden` when desktop nav is `md:flex` creates a gap where both show.
2. **Unsplash random IDs** — Unsplash photo IDs can return wrong content. Always visually verify in browser, or use original site CDN images.
3. **Hotlink-blocked images** — always do a HEAD request check against the source CDN to confirm 200 OK before using.
4. **Long hero CTA text** — keep primary CTA ≤ 3 words if possible. Always add `whitespace-nowrap`.
5. **Garbled special characters** — em dashes and bullets from copy-paste can show as `?` — use `&mdash;` and `&middot;` HTML entities instead.
