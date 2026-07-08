# AI Insights Dashboard

A React + TypeScript dashboard for reviewing AI/ML annotated datasets. Built to
demonstrate frontend fundamentals for a Frontend Developer role: component
architecture, client-side routing, state management, and REST API
integration patterns.

## What it does

Data annotators label samples (text or image) and an AI model attaches a
predicted label with a confidence score. This dashboard lets a reviewer:

- See aggregate stats across all datasets (Dashboard page)
- Search and filter every annotated record by status, dataset, ID, label,
  or annotator (Records page)
- Drill into a single record to see its full detail and review guidance
  (Record Detail page)

## Tech stack

- **React 18** with functional components and hooks (`useState`, `useEffect`, `useMemo`)
- **TypeScript** in strict mode
- **React Router v6** for client-side routing (`/`, `/records`, `/records/:id`)
- **Vite** as the build tool / dev server
- Hand-written CSS with design tokens (no UI framework), fully responsive
  down to mobile

## Project structure
src/
  api/               Service layer simulating REST calls (fetch + async/await)
  components/        Reusable UI pieces (table, filter bar, confidence meter, sidebar)
  data/              Mock dataset used by the API layer
  pages/             Route-level components (Dashboard, Records, RecordDetail)
  types/             Shared TypeScript types
  styles/index.css   Design tokens and all component styles
Getting started
npm install
npm run dev
Then open the URL Vite prints (usually http://localhost:5173).
Other scripts:
npm run build     # type-check and produce a production build in dist/
npm run preview   # preview the production build locally
npm run lint       # type-check only, no build output
Connecting a real backend
All data currently comes from src/api/annotationsApi.ts, which simulates
network latency and filters an in-memory dataset (src/data/mockRecords.ts).
Every function returns the same shape a real REST endpoint would, so wiring
up a live API means replacing the body of each function with a fetch call,
for example:
export async function fetchRecords(filters: RecordFilters = {}) {
  const params = new URLSearchParams(filters as Record<string, string>);
  const res = await fetch(`${API_BASE_URL}/records?${params}`);
  if (!res.ok) throw new Error("Failed to load records");
  return res.json() as Promise<AnnotationRecord[]>;
}
