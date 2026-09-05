
import "./ExerciseDetail.css";

function ExerciseDetail({ exercise, index, total, onBack, onNext, onPrevious }) {
  return (
    <main className="exercise-detail-page">
      <button className="exercise-back-button" onClick={onBack}>
        ← Back to exercises
      </button>

      <section className="exercise-detail-card">
        <div className="exercise-detail-image">
          <div className="exercise-image-text">
            Exercise Image
          </div>
        </div>

        <div className="exercise-detail-content">
          <div className="exercise-detail-number">
            EXERCISE {String(index + 1).padStart(2, "0")} OF{" "}
            {String(total).padStart(2, "0")}
          </div>

          <h1>{exercise.name}</h1>

          <p className="exercise-detail-description">
            {exercise.description}
          </p>

          <div className="exercise-detail-stats">
            <div>
              <strong>REPS</strong>
              <span>{exercise.reps}</span>
            </div>

            <div>
              <strong>SETS</strong>
              <span>{exercise.sets}</span>
            </div>

            <div>
              <strong>REST</strong>
              <span>{exercise.rest}</span>
            </div>
          </div>

          <div className="instructions">
            <h2>How to perform</h2>

            <ol>
              <li>Get into a comfortable starting position.</li>
              <li>
                Perform the movement slowly and without forcing the
                range of motion.
              </li>
              <li>
                Breathe normally throughout the exercise.
              </li>
              <li>
                Return to the starting position and repeat.
              </li>
            </ol>
          </div>

          <div className="exercise-detail-actions">
            <button
              className="secondary-exercise-button"
              onClick={onPrevious}
              disabled={index === 0}
            >
              ← Previous
            </button>

            <button
              className="start-button"
              onClick={onNext}
            >
              {index === total - 1
                ? "FINISH →"
                : "NEXT EXERCISE →"}
            </button>
          </div>
        </div>
      </section>

      <div className="exercise-safety">
        <strong>Important</strong>
        <p>
          Stop the exercise if it causes pain, dizziness, or unusual
          discomfort. This guidance is educational and does not
          replace professional medical advice.
        </p>
      </div>
      <div className="assessment-dots">
        <span />
        <span />
        <span className="active" />
      </div>

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

export default ExerciseDetail;

