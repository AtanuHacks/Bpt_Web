import { useState } from "react";
import "./App.css";
import physioWoman from "./assets/physio-woman2.png";
import ExerciseGuide from "./components/ExerciseGuide";

function App() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(1);

  const [user, setUser] = useState({
    name: "",
    age: "",
    pain: "",
  });

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      setStarted(false);
    }
  };

  if (started) {
    if (step === 4) {
      return <ExerciseGuide user={user} onBack={() => setStep(3)} />;
    }
    return (
      <main className="assessment-page">
        <button className="back-button" onClick={previousStep}>
          ← Back
        </button>

        <section className="assessment-card">

          <div className="progress">
            <div
              className="progress-fill"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

          <div className="step">
            STEP {step} OF 3
          </div>

          {step === 1 && (
            <>
              <h1>
                What should we
                <br />
                <span>call you?</span>
              </h1>

              <p>
                Let's start with your name so we can make
                your experience feel a little more personal.
              </p>

              <label>Your name</label>

              <input
                type="text"
                placeholder="Enter your name"
                value={user.name}
                onChange={(e) =>
                  setUser({ ...user, name: e.target.value })
                }
                autoFocus
              />

              <button
                className="start-button full-button"
                onClick={nextStep}
                disabled={!user.name.trim()}
              >
                CONTINUE →
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h1>
                How old
                <br />
                <span>are you?</span>
              </h1>

              <p>
                This helps us provide more appropriate
                general exercise guidance.
              </p>

              <label>Your age</label>

              <input
                type="number"
                min="1"
                max="120"
                placeholder="Enter your age"
                value={user.age}
                onChange={(e) =>
                  setUser({ ...user, age: e.target.value })
                }
                autoFocus
              />

              <button
                className="start-button full-button"
                onClick={nextStep}
                disabled={!user.age}
              >
                CONTINUE →
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <h1>
                Where are you
                <br />
                <span>feeling pain?</span>
              </h1>

              <p>
                Choose the area that best describes where
                you're experiencing discomfort.
              </p>

              <div className="pain-options">

                {[
                  "Neck",
                  "Shoulder",
                  "Upper Back",
                  "Lower Back",
                  "Knee",
                  "Ankle",
                ].map((area) => (
                  <button
                    key={area}
                    className={
                      user.pain === area
                        ? "pain-option selected"
                        : "pain-option"
                    }
                    onClick={() =>
                      setUser({ ...user, pain: area })
                    }
                  >
                    {area}
                  </button>
                ))}

              </div>

              <button
                className="start-button full-button"
                disabled={!user.pain}
                onClick={() => {
                  setStep(4);
                }}
              >
                SHOW MY EXERCISES →
              </button>
            </>
          )}

        </section>

        <div className="assessment-dots">
          <span className={step >= 1 ? "active" : ""} />
          <span className={step >= 2 ? "active" : ""} />
          <span className={step >= 3 ? "active" : ""} />
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="app">

      <nav className="navbar">
        <div className="brand">
          <div className="brand-icon">✚</div>
          <div>
            <div className="brand-name">
              Physio<span>Guide</span>
            </div>

            <div className="tagline">
              MOVE BETTER. FEEL BETTER.
            </div>
          </div>
        </div>
      </nav>

      <section className="hero">

        <div className="hero-text">

          <div className="badge">
            ♥ &nbsp; Personalized Exercise Guidance
          </div>

          <h1>
            Relieve Pain.
            <br />
            Improve Movement.
            <br />
            <span>Live Better.</span>
          </h1>

          <p>
            Tell us where you're experiencing discomfort and
            get simple exercise guidance designed around you.
          </p>

          <button
            className="start-button"
            onClick={() => setStarted(true)}
          >
            GET STARTED
            <span>→</span>
          </button>

          <div className="trust">
            <div className="avatars">
              <span>👩🏻</span>
              <span>👨🏻</span>
              <span>👩🏽</span>
              <span>👨🏾</span>
            </div>

            <p>
              Simple guidance for
              <br />
              everyday movement
            </p>
          </div>

        </div>

        <div className="hero-art">
          <div className="art-bg"></div>

          <img
            src={physioWoman}
            alt="Woman demonstrating physiotherapy movement"
            className="hero-person-image"
          />

          <div className="pain neck-pain">
            <b></b>
            Neck discomfort
          </div>

          <div className="pain back-pain">
            <b></b>
            Lower back
            <br />
            discomfort
          </div>

          <div className="pain-dot neck-dot"></div>
          <div className="pain-dot back-dot"></div>
        </div>

      </section>

      <section className="features">

        <Feature
          icon="♥"
          title="Personalized"
          text="Guidance based on your discomfort"
        />

        <Feature
          icon="✓"
          title="Safe & Simple"
          text="Easy-to-follow exercise instructions"
        />

        <Feature
          icon="✦"
          title="No Equipment"
          text="Exercises you can do anywhere"
        />

        <Feature
          icon="↗"
          title="Progressive"
          text="Build mobility step by step"
        />

      </section>

      <section className="important">

        <div className="warning-icon">✓</div>

        <div>
          <h3>Important</h3>

          <p>
            This website provides educational exercise guidance
            and does not replace professional medical advice,
            diagnosis, or treatment.
          </p>
        </div>

        <div className="doctor">👩🏻‍⚕️</div>

      </section>

      <div className="dots">
        <span className="active"></span>
        <span></span>
        <span></span>
      </div>
      <Footer />
    </main>
  );
}

function Feature({ icon, title, text }) {
  return (
    <article className="feature">
      <div className="feature-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{text}</p>
    </article>
  );
}

function Footer() {
  return (
    <footer className="app-footer">
      <p>© 2026 Atanu Bose . All rights reserved .</p>
      <p>
        &nbsp; Contact:{" "}
        <a href="mailto:atanu6939@gmail.com">
          atanu6939@gmail.com
        </a>
      </p>
    </footer>
  );
}


export default App;