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
