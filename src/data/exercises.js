import neckStretch from "../assets/exercises/01-neck-stretch.png";
import chinTuck from "../assets/exercises/02-chin-tuck.png";
import shoulderRolls from "../assets/exercises/03-shoulder-rolls.png";
import pendulumExercise from "../assets/exercises/04-pendulum-exercise.png";
import upperBackStretch from "../assets/exercises/05-upper-back-stretch.png";
import shoulderBladeSqueeze from "../assets/exercises/06-shoulder-blade-squeeze.png";
import pelvicTilt from "../assets/exercises/07-pelvic-tilt.png";
import kneeToChest from "../assets/exercises/08-knee-to-chest.png";
import heelSlides from "../assets/exercises/09-heel-slides.png";
import straightLegRaise from "../assets/exercises/10-straight-leg-raise.png";
import ankleCircles from "../assets/exercises/11-ankle-circles.png";
import calfStretch from "../assets/exercises/12-calf-stretch.png";
const exercises = {
  Neck: [
    {
      name: "Neck Stretch",
      description:
        "Gently stretch your neck to improve mobility and reduce stiffness.",
      reps: "10",
      sets: "2",
      rest: "30 sec",
      image: neckStretch,
      instructions: [
        "Sit or stand comfortably with your shoulders relaxed.",
        "Slowly tilt your head toward one shoulder.",
        "Hold the comfortable stretch briefly without forcing it.",
        "Return to the starting position and repeat on the other side.",
      ],
    },
    {
      name: "Chin Tuck",
      description:
        "Gently draw your chin backward to encourage a comfortable neck position.",
      reps: "10",
      sets: "2",
      rest: "30 sec",
      image: chinTuck,
      instructions: [
        "Sit or stand upright with your shoulders relaxed.",
        "Look straight ahead and gently draw your chin backward.",
        "Keep your head level rather than looking up or down.",
        "Hold briefly, relax, and repeat the movement slowly.",
      ],
    },
  ],

  Shoulder: [
    {
      name: "Shoulder Rolls",
      description:
        "Slowly roll your shoulders to encourage gentle movement and reduce stiffness.",
      reps: "10",
      sets: "2",
      rest: "30 sec",
      image: shoulderRolls,
      instructions: [
        "Sit or stand comfortably with your arms relaxed.",
        "Slowly lift your shoulders toward your ears.",
        "Move them gently backward and then downward.",
        "Complete the circle slowly and repeat in a controlled manner.",
      ],
    },
    {
      name: "Pendulum Exercise",
      description:
        "Allow the arm to relax while using gentle body movement to encourage shoulder mobility.",
      reps: "10",
      sets: "2",
      rest: "30 sec",
      image: pendulumExercise,
      instructions: [
        "Support yourself with one hand on a stable surface.",
        "Let the affected arm hang relaxed toward the floor.",
        "Gently move the arm forward and backward.",
        "Keep the movement small, relaxed, and comfortable.",
      ],
    },
  ],

  "Upper Back": [
    {
      name: "Upper Back Stretch",
      description:
        "Use a gentle stretch to encourage movement through the upper back.",
      reps: "10",
      sets: "2",
      rest: "30 sec",
      image: upperBackStretch,
      instructions: [
        "Sit comfortably with your feet supported.",
        "Bring your arms forward and gently reach outward.",
        "Allow your upper back to round slightly.",
        "Hold the comfortable stretch briefly, then return slowly.",
      ],
    },
    {
      name: "Shoulder Blade Squeeze",
      description:
        "Gently bring your shoulder blades together to encourage upper-back movement.",
      reps: "10",
      sets: "2",
      rest: "30 sec",
      image: shoulderBladeSqueeze,
      instructions: [
        "Sit or stand upright with your shoulders relaxed.",
        "Gently draw your shoulder blades backward.",
        "Avoid shrugging your shoulders toward your ears.",
        "Hold briefly, relax, and repeat.",
      ],
    },
  ],

  "Lower Back": [
    {
      name: "Pelvic Tilt",
      description:
        "Gently tilt your pelvis while lying down to encourage comfortable lower-back movement.",
      reps: "10",
      sets: "2",
      rest: "30 sec",
      image: pelvicTilt,
      instructions: [
        "Lie comfortably on your back with your knees bent.",
        "Keep your feet supported on the floor.",
        "Gently tighten your abdominal muscles and flatten your lower back toward the floor.",
        "Relax slowly and repeat the movement.",
      ],
    },
    {
      name: "Knee to Chest",
      description:
        "Gently bring one knee toward your chest to encourage lower-back mobility.",
      reps: "8",
      sets: "2",
      rest: "30 sec",
      image: kneeToChest,
      instructions: [
        "Lie comfortably on your back with both knees bent.",
        "Slowly bring one knee toward your chest.",
        "Use your hands to support the leg if comfortable.",
        "Return the leg slowly and repeat on the other side.",
      ],
    },
  ],

  Knee: [
    {
      name: "Heel Slides",
      description:
        "Gently slide your heel toward you to encourage comfortable knee movement.",
      reps: "10",
      sets: "2",
      rest: "30 sec",
      image: heelSlides,
      instructions: [
        "Lie comfortably on your back with your legs relaxed.",
        "Slowly slide one heel toward your body.",
        "Bring the knee only as far as feels comfortable.",
        "Slowly slide the heel back to the starting position.",
      ],
    },
    {
      name: "Straight Leg Raise",
      description:
        "Lift the leg gently while keeping the knee comfortable and controlled.",
      reps: "8",
      sets: "2",
      rest: "30 sec",
      image: straightLegRaise,
      instructions: [
        "Lie comfortably on your back with one knee bent.",
        "Keep the other leg straight and relaxed.",
        "Gently tighten the thigh of the straight leg.",
        "Slowly lift the leg, then lower it in a controlled manner.",
      ],
    },
  ],

  Ankle: [
    {
      name: "Ankle Circles",
      description:
        "Slowly move your ankle through a comfortable circular range of motion.",
      reps: "10",
      sets: "2",
      rest: "30 sec",
      image: ankleCircles,
      instructions: [
        "Sit comfortably with your foot slightly lifted.",
        "Slowly move your ankle in a circular direction.",
        "Keep the movement controlled and within a comfortable range.",
        "Repeat in the opposite direction.",
      ],
    },
    {
      name: "Calf Stretch",
      description:
        "Gently stretch the calf to encourage ankle mobility.",
      reps: "10",
      sets: "2",
      rest: "30 sec",
      image: calfStretch,
      instructions: [
        "Stand facing a stable surface for support.",
        "Place the affected leg slightly behind you.",
        "Keep the heel gently grounded as you lean forward.",
        "Hold the comfortable stretch briefly and return slowly.",
      ],
    },
  ],
};

export default exercises;

