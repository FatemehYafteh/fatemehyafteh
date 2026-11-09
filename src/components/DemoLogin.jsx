export default function DemoLogin({ login, className = "" }) {
  if (!login) return null;

  return (
    <p className={`text-secondary text-sm leading-7 ${className}`}>
      Demo login:{" "}
      <code className="rounded bg-background px-1.5 py-0.5 text-accent">{login.email}</code>
      {" / "}
      <code className="rounded bg-background px-1.5 py-0.5 text-accent">{login.password}</code>
    </p>
  );
}
