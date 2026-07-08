import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchRecords } from "../api/annotationsApi";
import { mockRecords } from "../data/mockRecords";
import type { AnnotationRecord, ReviewStatus } from "../types";
import FilterBar from "../components/FilterBar";
import RecordTable from "../components/RecordTable";

export default function Records() {
  const [searchParams] = useSearchParams();
  const [records, setRecords] = useState<AnnotationRecord[] | null>(null);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<ReviewStatus | "all">("all");
  const [datasetName, setDatasetName] = useState<string>(searchParams.get("dataset") ?? "all");

  const datasetOptions = useMemo(
    () => Array.from(new Set(mockRecords.map((r) => r.datasetName))),
    []
  );

  useEffect(() => {
    let cancelled = false;
    setRecords(null);

    fetchRecords({ search, status, datasetName }).then((data) => {
      if (!cancelled) setRecords(data);
    });

    return () => {
      cancelled = true;
    };
  }, [search, status, datasetName]);

  return (
    <main className="main">
      <div className="topbar">
        <div>
          <h1 className="page-title">Records</h1>
          <p className="page-subtitle">
            Search and filter annotated samples across all datasets, then open a record to see
            its full review detail.
          </p>
        </div>
      </div>

      <div className="panel">
        <FilterBar
          search={search}
          onSearchChange={setSearch}
          status={status}
          onStatusChange={setStatus}
          datasetName={datasetName}
          onDatasetChange={setDatasetName}
          datasetOptions={datasetOptions}
        />

        {records === null ? (
          <div className="state-message">Loading records…</div>
        ) : (
          <RecordTable records={records} />
        )}
      </div>
    </main>
  );
}
