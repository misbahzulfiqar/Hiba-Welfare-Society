# Hiba Welfare

Monorepo with **React + Tailwind** apps under `src`: **admin**, **api**, and **web**.  
Only the **web** app uses **shadcn/ui** components.

## Structure

```
src/
  admin/   → React + Tailwind
  api/     → React + Tailwind
  web/     → React + Tailwind + shadcn/ui
```

## Setup

From the project root:

```bash
npm install
```

## Run apps

- **All apps** (each in its own terminal or use separate commands):
  ```bash
  npm run dev:admin   # admin app
  npm run dev:api     # api app
  npm run dev:web     # web app (with shadcn)
  ```

- Or run one at a time, e.g.:
  ```bash
  npm run dev:web
  ```
  Then open the URL shown (e.g. http://localhost:5173).

## Build

```bash
npm run build        # all apps
npm run build:admin
npm run build:api
npm run build:web
```

## Web app – shadcn/ui

The **web** app includes shadcn/ui. Components live in:

- `src/web/src/components/ui/`

Available components include: accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, card, checkbox, collapsible, dialog, dropdown-menu, hover-card, input, label, popover, progress, radio-group, scroll-area, select, separator, sheet, skeleton, slider, sonner (toast), switch, table, tabs, textarea, toggle, toggle-group, tooltip.

To add more shadcn components from the web app directory:

```bash
cd src/web
npx shadcn@latest add <component-name>
```

Example: `npx shadcn@latest add calendar`
