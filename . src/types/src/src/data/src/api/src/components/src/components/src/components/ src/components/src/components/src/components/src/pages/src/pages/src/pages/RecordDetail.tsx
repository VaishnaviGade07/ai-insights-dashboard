import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchRecordById } from "../api/annotationsApi";
import type { AnnotationRecord } from "../types";
import ConfidenceMeter from "../components/ConfidenceMeter";
import StatusPill from "../components/StatusPill";

export default function RecordDetail() {
  const { id } = useParams<{ id: string }>();
  const [record, setRecord] = useState<AnnotationRecord | null | undefined>(null);

  useEffect(() => {
    let cancelled = false;
    setRecord(null);

    if (id) {
      fetchRecordById(id).then((data) => {
        if (!cancelled) setRecord(data ?? undefined);
      });
    }

    return () => {
      cancelled = true;
    };
  }, [id]);

  return (
    <main className="main">
      <Link to="/records" className="back-link">
        ← Back to records
      </Link>

      {record === null && <div className="state-message">Loading record…</div>}

      {record === undefined && (
        <div className="state-message">No record found with ID “{id}”.</div>
      )}

      {record && (
        <>
          <div className="topbar">
            <div>
              <h1 className="page-title">{record.id}</h1>
              <p className="page-subtitle">
                {record.datasetName} · {record.sampleType} sample
              </p>
            </div>
            <StatusPill status={record.status} />
          </div>

          <div className="detail-grid">
            <div className="detail-card">
              <div className="detail-row">
                <span className="label">Predicted label</span>
                <span className="value">{record.label}</span>
              </div>
              <div className="detail-row">
                <span className="label">Confidence</span>
                <span className="value">
                  <ConfidenceMeter value={record.confidence} />
                </span>
              </div>
              <div className="detail-row">
                <span className="label">Sample type</span>
                <span className="value">{record.sampleType}</span>
              </div>
              <div className="detail-row">
                <span className="label">Dataset</span>
                <span className="value">{record.datasetName}</span>
              </div>
              <div className="detail-row">
                <span className="label">Annotator</span>
                <span className="value">{record.annotator}</span>
              </div>
              <div className="detail-row">
                <span className="label">Last updated</span>
                <span className="value">{record.updatedAt}</span>
              </div>
            </div>

            <div className="detail-card">
              <div className="detail-row" style={{ border: "none" }}>
                <span className="label">Review guidance</span>
              </div>
              <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.6 }}>
                {record.confidence < 0.5
                  ? "Low model confidence. Route to a senior annotator before this label is used for training."
                  : record.confidence < 0.8
                  ? "Moderate confidence. A quick second pass is recommended before validating."
                  : "High confidence. Safe to validate unless the label looks visibly wrong."}
              </p>
            </div>
          </div>
        </>
      )}
    </main>
  );
}import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchRecordById } from "../api/annotationsApi";
import type { AnnotationRecord } from "../types";
import ConfidenceMeter from "../components/ConfidenceMeter";
import StatusPill from "../components/StatusPill";

export default function RecordDetail() {
  const { id } = useParams<{ id: string }>();
  const [record, setRecord] = useState<AnnotationRecord | null | undefined>(null);

  useEffect(() => {
    let cancelled = false;
    setRecord(null);

    if (id) {
      fetchRecordById(id).then((data) => {
        if (!cancelled) setRecord(data ?? undefined);
      });
    }

    return () => {
      cancelled = true;
    };
  }, [id]);

  return (
    <main className="main">
      <Link to="/records" className="back-link">
        ← Back to records
      </Link>

      {record === null && <div className="state-message">Loading record…</div>}

      {record === undefined && (
        <div className="state-message">No record found with ID “{id}”.</div>
      )}

      {record && (
        <>
          <div className="topbar">
            <div>
              <h1 className="page-title">{record.id}</h1>
              <p className="page-subtitle">
                {record.datasetName} · {record.sampleType} sample
              </p>
            </div>
            <StatusPill status={record.status} />
          </div>

          <div className="detail-grid">
            <div className="detail-card">
              <div className="detail-row">
                <span className="label">Predicted label</span>
                <span className="value">{record.label}</span>
              </div>
              <div className="detail-row">
                <span className="label">Confidence</span>
                <span className="value">
                  <ConfidenceMeter value={record.confidence} />
                </span>
              </div>
              <div className="detail-row">
                <span className="label">Sample type</span>
                <span className="value">{record.sampleType}</span>
              </div>
              <div className="detail-row">
                <span className="label">Dataset</span>
                <span className="value">{record.datasetName}</span>
              </div>
              <div className="detail-row">
                <span className="label">Annotator</span>
                <span className="value">{record.annotator}</span>
              </div>
              <div className="detail-row">
                <span className="label">Last updated</span>
                <span className="value">{record.updatedAt}</span>
              </div>
            </div>

            <div className="detail-card">
              <div className="detail-row" style={{ border: "none" }}>
                <span className="label">Review guidance</span>
              </div>
              <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.6 }}>
                {record.confidence < 0.5
                  ? "Low model confidence. Route to a senior annotator before this label is used for training."
                  : record.confidence < 0.8
                  ? "Moderate confidence. A quick second pass is recommended before validating."
                  : "High confidence. Safe to validate unless the label looks visibly wrong."}
              </p>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
