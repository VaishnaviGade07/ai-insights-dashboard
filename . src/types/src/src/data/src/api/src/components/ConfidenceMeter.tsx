interface ConfidenceMeterProps {
  value: number; // 0 to 1
}

function confidenceTier(value: number): "low" | "medium" | "high" {
  if (value < 0.5) return "low";
  if (value < 0.8) return "medium";
  return "high";
}

export default function ConfidenceMeter({ value }: ConfidenceMeterProps) {
  const percent = Math.round(value * 100);
  const tier = confidenceTier(value);

  return (
    <div
      className="confidence-meter"
      role="meter"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Confidence ${percent}%`}
    >
      <div className="confidence-track">
        <div className={`confidence-fill ${tier}`} style={{ width: `${percent}%` }} />
      </div>
      <span className="confidence-value">{percent}%</span>
    </div>
  );
}
