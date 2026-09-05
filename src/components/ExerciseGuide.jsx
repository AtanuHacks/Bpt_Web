import ExerciseDetail from "./ExerciseDetail";
import "./ExerciseGuide.css";
import exercises from "../data/exercises";
import { useState } from "react";
import CompletionScreen from "./CompletionScreen";

function ExerciseGuide({ user, onBack }) {
  const recommendedExercises = exercises[user.pain] || [];
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [completed, setCompleted] = useState(false);
  if (completed) {
    return (
      <CompletionScreen
        user={user}
        onRestart={() => {
          setCompleted(false);
          setSelectedExercise(null);
        }}
        onBack={() => {
          setCompleted(false);
          setSelectedExercise(null);
        }}
      />
    );
  }

  if (selectedExercise !== null) {
    return (
      <ExerciseDetail
        exercise={recommendedExercises[selectedExercise]}
        index={selectedExercise}
        total={recommendedExercises.length}
        onBack={() => setSelectedExercise(null)}
        onPrevious={() =>
          setSelectedExercise((current) => current - 1)
        }
        onNext={() => {
          if (selectedExercise < recommendedExercises.length - 1) {
            setSelectedExercise((current) => current + 1);
          } else {
            setCompleted(true);
          }
        }}
      />
    );
  }
  return (
    <main className="exercise-page">
      <button className="exercise-back-button" onClick={onBack}>
        ← Back
      </button>
      <section className="exercise-card">

        <div className="progress">
          <div
            className="progress-fill"
            style={{ width: "100%" }}
          />
        </div>

        <div className="step">YOUR GUIDANCE</div>

        <div className="exercise-header">
          <h1>
            Let's get you
            <br />
            <span>moving better.</span>
          </h1>

          <p>
            Hi {user.name || "there"}! Here are some simple exercises
            based on your {user.pain || "selected"} pain area.
          </p>
        </div>

        <div className="exercise-list">

          <div className="exercise-list">
            {recommendedExercises.map((exercise, index) => (
              <article className="exercise-item" key={exercise.name}>
                <div className="exercise-image">
                  Exercise Image
                </div>

                <div className="exercise-info">
                  <span className="exercise-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2>{exercise.name}</h2>

                  <p>{exercise.description}</p>

                  <div className="exercise-details">
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

                  <button
                    className="start-button full-button"
                    onClick={() => setSelectedExercise(index)}
                  >
                    START EXERCISE →
                  </button>
                </div>
              </article>
            ))}
          </div>

        </div>

        <div className="exercise-note">
          <div className="exercise-note-icon">✓</div>

          <p>
            Start slowly and stop if you experience pain or
            discomfort. This guidance is educational and does not
            replace professional medical advice.
          </p>
        </div>

      </section>

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

export default ExerciseGuide;

