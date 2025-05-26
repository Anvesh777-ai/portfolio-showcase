export function Card({ children, className = "" }) {
    return <div className={`rounded-2xl shadow p-4 bg-white ${className}`}>{children}</div>;
  }
  
  export function CardContent({ children }) {
    return <div className="text-base text-gray-800">{children}</div>;
  }
  