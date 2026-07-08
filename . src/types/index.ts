export type ReviewStatus = "validated" | "needs-review" | "rejected";

export interface AnnotationRecord {
  id: string;
  datasetName: string;
  sampleType: "text" | "image";
  label: string;
  confidence: number; // 0 to 1
  status: ReviewStatus;
  annotator: string;
  updatedAt: string; // ISO date
}

export interface DatasetSummary {
  id: string;
  name: string;
  totalRecords: number;
  validated: number;
  needsReview: number;
  rejected: number;
  averageConfidence: number;
}
