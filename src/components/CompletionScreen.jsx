import "./CompletionScreen.css";
function CompletionScreen({ user, onRestart, onBack }) {
  return (
    <main className="exercise-detail-page completion-page">
      <section className="completion-card">
        <div className="completion-icon">✓</div>

        <div className="exercise-detail-number">
          SESSION COMPLETE
        </div>

        <h1>
          Great work,{" "}
          <span>{user.name || "there"}.</span>
        </h1>

        <p>
          You've completed your guided exercises for your{" "}
          {user.pain || "selected"} area.
        </p>

        <div className="completion-message">
          <strong>Keep moving gently.</strong>
          <span>
            Consistency matters more than intensity. Listen to your
            body and progress at a comfortable pace.
          </span>
        </div>

        <button
          className="start-button full-button"
          onClick={onRestart}
        >
          START AGAIN →
        </button>
        <button
          className="secondary-exercise-button completion-back-button"
          onClick={onBack}
        >
          ← VIEW EXERCISES
        </button>

      </section>

      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer className="app-footer">
      <p>© 2026 Atanu Bose . All rights reserved .</p>

      <p>
        Contact:{" "}
        <a href="mailto:atanu6939@gmail.com">
          atanu6939@gmail.com
        </a>
      </p>
    </footer>
  );
}

export default CompletionScreen;

