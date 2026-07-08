import type { AnnotationRecord } from "../types";

// In a production build this data would come from a real backend
// (e.g. GET /api/records). See src/api/annotationsApi.ts for the
// service layer that simulates that network boundary.
export const mockRecords: AnnotationRecord[] = [
  { id: "REC-1001", datasetName: "Facial Emotion Set", sampleType: "image", label: "happy", confidence: 0.94, status: "validated", annotator: "R. Iyer", updatedAt: "2026-06-02" },
  { id: "REC-1002", datasetName: "Facial Emotion Set", sampleType: "image", label: "neutral", confidence: 0.61, status: "needs-review", annotator: "R. Iyer", updatedAt: "2026-06-02" },
  { id: "REC-1003", datasetName: "Facial Emotion Set", sampleType: "image", label: "sad", confidence: 0.88, status: "validated", annotator: "P. Deshmukh", updatedAt: "2026-06-03" },
  { id: "REC-1004", datasetName: "Facial Emotion Set", sampleType: "image", label: "angry", confidence: 0.42, status: "rejected", annotator: "P. Deshmukh", updatedAt: "2026-06-03" },
  { id: "REC-1005", datasetName: "Facial Emotion Set", sampleType: "image", label: "surprised", confidence: 0.77, status: "validated", annotator: "R. Iyer", updatedAt: "2026-06-04" },
  { id: "REC-1006", datasetName: "Facial Emotion Set", sampleType: "image", label: "happy", confidence: 0.55, status: "needs-review", annotator: "S. Kulkarni", updatedAt: "2026-06-04" },
  { id: "REC-2001", datasetName: "Customer Review Sentiment", sampleType: "text", label: "positive", confidence: 0.91, status: "validated", annotator: "S. Kulkarni", updatedAt: "2026-06-05" },
  { id: "REC-2002", datasetName: "Customer Review Sentiment", sampleType: "text", label: "negative", confidence: 0.83, status: "validated", annotator: "S. Kulkarni", updatedAt: "2026-06-05" },
  { id: "REC-2003", datasetName: "Customer Review Sentiment", sampleType: "text", label: "neutral", confidence: 0.58, status: "needs-review", annotator: "A. Bhosale", updatedAt: "2026-06-06" },
  { id: "REC-2004", datasetName: "Customer Review Sentiment", sampleType: "text", label: "positive", confidence: 0.35, status: "rejected", annotator: "A. Bhosale", updatedAt: "2026-06-06" },
  { id: "REC-2005", datasetName: "Customer Review Sentiment", sampleType: "text", label: "negative", confidence: 0.72, status: "validated", annotator: "A. Bhosale", updatedAt: "2026-06-07" },
  { id: "REC-2006", datasetName: "Customer Review Sentiment", sampleType: "text", label: "positive", confidence: 0.66, status: "needs-review", annotator: "R. Iyer", updatedAt: "2026-06-07" },
  { id: "REC-3001", datasetName: "Support Ticket Triage", sampleType: "text", label: "billing", confidence: 0.89, status: "validated", annotator: "P. Deshmukh", updatedAt: "2026-06-08" },
  { id: "REC-3002", datasetName: "Support Ticket Triage", sampleType: "text", label: "technical", confidence: 0.95, status: "validated", annotator: "P. Deshmukh", updatedAt: "2026-06-08" },
  { id: "REC-3003", datasetName: "Support Ticket Triage", sampleType: "text", label: "account", confidence: 0.47, status: "rejected", annotator: "S. Kulkarni", updatedAt: "2026-06-09" },
  { id: "REC-3004", datasetName: "Support Ticket Triage", sampleType: "text", label: "billing", confidence: 0.6, status: "needs-review", annotator: "S. Kulkarni", updatedAt: "2026-06-09" },
  { id: "REC-3005", datasetName: "Support Ticket Triage", sampleType: "text", label: "technical", confidence: 0.81, status: "validated", annotator: "A. Bhosale", updatedAt: "2026-06-10" },
  { id: "REC-3006", datasetName: "Support Ticket Triage", sampleType: "text", label: "account", confidence: 0.69, status: "needs-review", annotator: "A. Bhosale", updatedAt: "2026-06-10" },
];
