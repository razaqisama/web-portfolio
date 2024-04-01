import "./loader.css";

interface LoadingProps {
  className?: string;
}

export default function Loader({ className }: LoadingProps) {
  return <div className={`loader w-8 ${className}`} />;
}
