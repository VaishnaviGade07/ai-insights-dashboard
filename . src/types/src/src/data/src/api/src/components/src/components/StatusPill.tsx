import type { ReviewStatus } from "../types";

const LABELS: Record<ReviewStatus, string> = {
  validated: "Validated",
  "needs-review": "Needs review",
  rejected: "Rejected",
};

export default function StatusPill({ status }: { status: ReviewStatus }) {
  return <span className={`status-pill ${status}`}>{LABELS[status]}</span>;
}
