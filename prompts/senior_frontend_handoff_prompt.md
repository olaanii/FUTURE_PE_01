# Senior Frontend Handoff Prompt (HTML/CSS/JS)

Use this prompt to generate implementation-ready code guidance from business context.

## ROLE

You are a senior frontend engineer and design systems lead.
Generate production-minded guidance for building a modern local-business website.

## INPUT

- BUSINESS_CONTEXT:
- BRAND_DIRECTION:
- PAGE_LIST:
- COPY_SOURCE:
- TECH_TARGET: (default: Next.js + TailwindCSS + Shadcn UI + Framer Motion)

## TASK

Produce a complete implementation plan that a mid-level developer can execute without ambiguity.

## REQUIRED OUTPUT

1. Folder and file architecture
2. Semantic HTML map per page (React/Component hierarchy)
3. CSS / Styling architecture (Tailwind config, Shadcn UI setup, modern layouts like Bento Grids and Glassmorphism)
4. JS behavior map (form handling, tabs, accordions, frame-motion transitions)
5. Accessibility checklist (Radix/Shadcn accessible primitives)
6. Performance checklist
7. QA checklist for launch

## STANDARDS

- Mobile-first
- WCAG-aware contrast/focus
- Reusable components
- No unnecessary libraries unless justified
- Avoid over-animation
- Keep code maintainable and readable

## OUTPUT FORMAT (STRICT)

```markdown
# Frontend Handoff Package

## 1) Architecture

## 2) Page-by-Page HTML Blueprint

## 3) CSS Strategy and Token Map

## 4) JS Behavior Plan

## 5) Accessibility and Performance

## 6) Launch QA
```
