import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="logo">
      <span className="logo-main">HABITA</span>
      <span className="logo-sub">Find your place, feel at home</span>
    </Link>
  );
}
