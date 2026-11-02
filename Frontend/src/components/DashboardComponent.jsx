import { useEffect } from "react";
import { useNavigate } from "react-router";
import logo from "../assets/PeopleNest-logo.png";

const DashboardComponent = () => {
  const navigate = useNavigate();
  let user = null;

  try {
    user = JSON.parse(localStorage.getItem("peopleNestUser") || "null");
  } catch {
    localStorage.removeItem("peopleNestUser");
  }

  useEffect(() => {
    if (!user) navigate("/signup", { replace: true });
  }, [navigate, user]);

  if (!user) return null;

  const logout = () => {
    localStorage.removeItem("peopleNestUser");
    navigate("/login", { replace: true });
  };

  return (
    <main className="pn-workspace">
      <header className="pn-workspace-header">
        <a href="/" className="pn-workspace-logo">
          <img src={logo} alt="PeopleNest logo" />
          PeopleNest
        </a>
        <nav className="pn-workspace-links" aria-label="Dashboard navigation">
          <button type="button" className="selected">Overview</button>
          <button type="button">Contacts</button>
          <button type="button">Favorites</button>
          <button type="button">Profile</button>
        </nav>
        <button type="button" className="pn-workspace-logout" onClick={logout}>
          Log out
        </button>
      </header>

      <section className="pn-workspace-body">
        <article className="pn-workspace-welcome">
          <div className="pn-workspace-avatar">{user.name?.charAt(0).toUpperCase()}</div>
          <h1>Welcome, {user.name}</h1>
          <p className="pn-workspace-copy">
            Keep the people who matter close and organized.
          </p>
          <button type="button" className="pn-workspace-primary">
            <span>+</span> Add a contact
          </button>
          <div className="pn-workspace-user-line">
            <span>{user.email}</span>
            <button type="button">Edit profile</button>
          </div>
        </article>

        <section className="pn-workspace-overview">
          <div className="pn-workspace-section-heading">
            <div>
              <p className="pn-workspace-kicker">Overview</p>
              <h2>Your contacts</h2>
            </div>
            <button type="button" className="pn-workspace-text-button">View all →</button>
          </div>

          <div className="pn-workspace-metrics">
            <div>
              <span>Total contacts</span>
              <strong>0</strong>
            </div>
            <div>
              <span>Favorites</span>
              <strong>0</strong>
            </div>
            <div>
              <span>Requests</span>
              <strong>0</strong>
            </div>
          </div>

          <div className="pn-workspace-empty">
            <div className="pn-workspace-empty-mark">+</div>
            <h3>No contacts yet</h3>
            <p>Add your first contact to start building your network.</p>
            <button type="button" className="pn-workspace-text-button">
              Add your first contact →
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default DashboardComponent;
