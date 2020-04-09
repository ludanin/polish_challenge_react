import React from "react";
import { useSelector } from "react-redux";

import { RPropsStore } from "reducers";

import styles from "./styles.module.css";

const Footer: React.FC = () => {
  const selectedPersonID = useSelector(
    (s: RPropsStore) => s.Store.selectedPersonID,
  );
  const people = useSelector(
    (s: RPropsStore) => s.Store.people,
  );

  const personIndex = people.findIndex((p) => p.id === selectedPersonID);
  const person = personIndex >= 0 ? people[personIndex] : null;

  if (person === null) return null;

  if (selectedPersonID) {
    return (
      <div className="FOOTER">
        <div className="">
          <i className="mdi mdi-avatar"/>
        </div>
        <div className={styles.name}>
          {person.name}
        </div>
        <div className={styles.coords}>
          <span>
            <b>LAT</b>: {person.coordinates.latitude.toFixed(5)}
          </span>
          <span>
            <b>LNG</b>: {person.coordinates.longitude.toFixed(5)}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="FOOTER">
      {/* TODO */}
      <div className={styles.something}/>
    </div>
  );
};

export default Footer;
