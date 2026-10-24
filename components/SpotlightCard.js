"use client";

// Glass card with a light that follows the cursor.
export default function SpotlightCard({ children, className = "" }) {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <div className={`glass spot ${className}`} onMouseMove={move}>
      {children}
    </div>
  );
}
