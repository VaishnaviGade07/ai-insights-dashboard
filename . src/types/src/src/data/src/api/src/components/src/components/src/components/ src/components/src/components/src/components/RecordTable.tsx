import { useNavigate } from "react-router-dom";
import type { AnnotationRecord } from "../types";
import ConfidenceMeter from "./ConfidenceMeter";
import StatusPill from "./StatusPill";

export default function RecordTable({ records }: { records: AnnotationRecord[] }) {
  const navigate = useNavigate();

  if (records.length === 0) {
    return <div className="state-message">No records match your filters.</div>;
  }

  return (
    <div className="table-wrapper">
      <table className="records-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Dataset</th>
            <th>Type</th>
            <th>Label</th>
            <th>Confidence</th>
            <th>Status</th>
            <th>Annotator</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id} onClick={() => navigate(`/records/${record.id}`)}>
              <td className="record-id">{record.id}</td>
              <td>{record.datasetName}</td>
              <td>
                <span className="sample-type-badge">{record.sampleType}</span>
              </td>
              <td>{record.label}</td>
              <td>
                <ConfidenceMeter value={record.confidence} />
              </td>
              <td>
                <StatusPill status={record.status} />
              </td>
              <td>{record.annotator}</td>
              <td>{record.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
