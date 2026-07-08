import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard", end: true },
  { to: "/records", label: "Records" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">AI</div>
        <div className="brand-title">Insights Dashboard</div>
        <div className="brand-subtitle">Annotation review console</div>
      </div>

      <nav className="nav">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
          >
            <span className="nav-dot" />
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        Connected to mock REST endpoint.
        <br />
        Swap in a live API in annotationsApi.ts.
      </div>
    </aside>
  );
}
