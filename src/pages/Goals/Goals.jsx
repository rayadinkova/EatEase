import "../Goals/Goals.css";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  doc,
} from "firebase/firestore";

{
  /* Firebase config info is stored in its own file where I made a connection between it and the collection I want to fetch,
in this case the collection is named 'goals'*/
}
import { db } from "../../firebase-config";

{
  /* Importing images */
}

import backarrow from "../Mood/vectors/backarrow.svg";

export const Goals = () => {
  const [goals, setGoals] = useState([]);
  const goalsCollectionRef = collection(db, "goals");

  //creating a goal
  const [newGoal, setNewGoal] = useState("");

  //creating a goal
  const createGoal = async () => {
    await addDoc(goalsCollectionRef, { description: newGoal });
  };

  //deleting a goal
  const deleteGoal = async (id) => {
    const goalDoc = doc(db, "goals", id);
    await deleteDoc(goalDoc);
  };

  useEffect(() => {
    const getGoals = async () => {
      const data = await getDocs(goalsCollectionRef);
      setGoals(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getGoals();
  }, []);

  return (
    <>
      {/* Accessibility ✨
- Using tab index to support keyboard navigation
- Using alt description for screen readers;
for bacground images I am using an empty alt tag
-Using proper input types */}

      <section tabIndex="1" className="goals-header">
        <header tabIndex="2" className="goals-header-content">
          <Link to="/home" tabIndex="3">
            <img
              src={backarrow}
              alt="arrow that takes you on home page"
              tabIndex="4"
              className="goals-arrow-img"
            />
          </Link>
          <h1 className="goals-h1" tabIndex="5">
            Goals
          </h1>

          <div></div>
        </header>
      </section>

      <section tabIndex="6" className="add-goal-desc">
        <h2 tabIndex="7" className="goals-h2">
          Goal setting helps you identify where you want to go and the steps
          needed to get there.
        </h2>
      </section>

      <section tabIndex="8" className="add-goal">
        <input
          type="text"
          placeholder="Goal description"
          tabIndex="9"
          onChange={(event) => {
            setNewGoal(event.target.value);
          }}
        />

        <button tabIndex="10" className="add-goal-btn" onClick={createGoal}>
          +Add New
        </button>
      </section>

      <div>
        {goals.map((goal) => {
          return (
            <section tabIndex="11" className="fetched">
              <h2 tabIndex="12" className="firebase-h2">
                Goal: {goal.description}
              </h2>
              <button
                tabIndex="13"
                className="firebase-delete"
                onClick={() => {
                  deleteGoal(goal.id);
                }}
              >
                Delete
              </button>
            </section>
          );
        })}
      </div>

      <section tabIndex="14" className="created-goals">
        <div className="goal">
          <h3 tabIndex="15" className="goals-h3">
            Goal 2: To not skip beakfast
          </h3>
          <h3 tabIndex="16" className="goals-h3">
            Edit
          </h3>
        </div>

        <div className="goal">
          <h3 tabIndex="17" className="goals-h3">
            Goal 3: To not skip beakfast
          </h3>
          <h3 tabIndex="18" className="goals-h3">
            Edit
          </h3>
        </div>

        <div className="goal-last">
          <h3 tabIndex="19" className="goals-h3">
            Goal 6: To limit social media
          </h3>
          <h3 tabIndex="20" className="goals-h3">
            Edit
          </h3>
        </div>
      </section>
      <Navbar tabIndex="21" />
    </>
  );
};
