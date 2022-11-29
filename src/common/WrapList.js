import "./WrapList.css";
export default function WrapList({ className, children }) {
  return <div className={`wrap-list ${className}`}>{children}</div>;
}
