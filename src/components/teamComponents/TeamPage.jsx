import "./team.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router";
import Logan from "./Logan";
import Spencer from "./Spencer";

function TeamPage() {
  const [logan, setLogan] = useState(true);
  const [spencer, setSpencer] = useState(false);

  const switchPeople = () => {
    setLogan(!logan);
    setSpencer(!spencer);
  };

  return (
    <div className="page-wrapper">
      <h1>Meet the Team</h1>
      <div className="link-container-hz">
        <Link
          to="/team/logan"
          class={logan ? "active-link" : null}
          onClick={!logan ? switchPeople : null}
        >
          Logan
        </Link>
        <Link
          to="/team/spencer"
          class={spencer ? "active-link" : null}
          onClick={!spencer ? switchPeople : null}
        >
          Spencer
        </Link>
      </div>
      <Routes>
        <Route path="/logan" element={<Logan />} />
        <Route path="/spencer" element={<Spencer />} />
      </Routes>
    </div>
  );
}

export default TeamPage;
