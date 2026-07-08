import type { AnnotationRecord, DatasetSummary, ReviewStatus } from "../types";
import { mockRecords } from "../data/mockRecords";

const SIMULATED_LATENCY_MS = 350;

function delay<T>(value: T, ms = SIMULATED_LATENCY_MS): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export interface RecordFilters {
  search?: string;
  status?: ReviewStatus | "all";
  datasetName?: string | "all";
}

/**
 * GET /api/records
 *
 * This function stands in for a real REST call. Swapping in a live backend
 * is a one-line change at the call site:
 *
 *   const res = await fetch(`${API_BASE_URL}/records`);
 *   const data: AnnotationRecord[] = await res.json();
 *
 * Everything downstream (components, filtering, sorting) already consumes
 * this function's return type, so no other code needs to change.
 */
export async function fetchRecords(filters: RecordFilters = {}): Promise<AnnotationRecord[]> {
  const { search = "", status = "all", datasetName = "all" } = filters;

  const filtered = mockRecords.filter((record) => {
    const matchesSearch =
      search.trim().length === 0 ||
      record.id.toLowerCase().includes(search.toLowerCase()) ||
      record.label.toLowerCase().includes(search.toLowerCase()) ||
      record.annotator.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = status === "all" || record.status === status;
    const matchesDataset = datasetName === "all" || record.datasetName === datasetName;

    return matchesSearch && matchesStatus && matchesDataset;
  });

  return delay(filtered);
}

/** GET /api/records/:id */
export async function fetchRecordById(id: string): Promise<AnnotationRecord | undefined> {
  return delay(mockRecords.find((record) => record.id === id));
}

/** GET /api/datasets — aggregate stats per dataset for the dashboard cards */
export async function fetchDatasetSummaries(): Promise<DatasetSummary[]> {
  const byDataset = new Map<string, AnnotationRecord[]>();

  for (const record of mockRecords) {
    const bucket = byDataset.get(record.datasetName) ?? [];
    bucket.push(record);
    byDataset.set(record.datasetName, bucket);
  }

  const summaries: DatasetSummary[] = Array.from(byDataset.entries()).map(([name, records], index) => {
    const validated = records.filter((r) => r.status === "validated").length;
    const needsReview = records.filter((r) => r.status === "needs-review").length;
    const rejected = records.filter((r) => r.status === "rejected").length;
    const averageConfidence =
      records.reduce((sum, r) => sum + r.confidence, 0) / records.length;

    return {
      id: `DS-${index + 1}`,
      name,
      totalRecords: records.length,
      validated,
      needsReview,
      rejected,
      averageConfidence,
    };
  });

  return delay(summaries);
}
