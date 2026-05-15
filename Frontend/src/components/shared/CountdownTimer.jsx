import { useState, useEffect } from "react";

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function CountdownTimer({ targetDate }) {
  const getTimeLeft = () => {
    const diff = new Date(targetDate) - new Date();
    if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      mins: Math.floor((diff % 3600000) / 60000),
      secs: Math.floor((diff % 60000) / 1000),
    };
  };

  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const t = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Mins", value: time.mins },
    { label: "Secs", value: time.secs },
  ];

  return (
    <div className="flex items-center gap-2">
      {units.map(({ label, value }, i) => (
        <div key={label} className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            <div className="bg-dark text-white rounded-lg w-12 h-12 flex items-center justify-center text-lg font-black tabular-nums">
              {pad(value)}
            </div>
            <span className="text-[10px] text-gray-400 mt-1 uppercase tracking-wide">{label}</span>
          </div>
          {i < 3 && (
            <span className="text-dark font-black text-xl mb-4 leading-none">:</span>
          )}
        </div>
      ))}
    </div>
  );
}