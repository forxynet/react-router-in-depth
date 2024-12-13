import { Outlet, NavLink } from "react-router-dom";
import Breadcrumps from "../components/Breadcrumps";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Dynamicq Router</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
          <NavLink to="chapters">Chapters</NavLink>
        </nav>
      </header>
      <Breadcrumps />
      <main>
        <Outlet />
      </main>
    </div>
  )
}