export default function DemoLogin({ login, className = "" }) {
  if (!login) return null;

  const code = "rounded bg-background px-1.5 py-0.5 text-accent";

  return (
    <p className={`text-secondary text-sm leading-7 ${className}`}>
      <span className="block sm:inline">Demo login:</span>{" "}
      <span className="block sm:inline">
        <span className="sm:hidden">Email: </span>
        <code className={code}>{login.email}</code>
      </span>
      <span aria-hidden="true" className="hidden sm:inline">
        {" "}
        /{" "}
      </span>
      <span className="block sm:inline">
        <span className="sm:hidden">Password: </span>
        <code className={code}>{login.password}</code>
      </span>
    </p>
  );
}
