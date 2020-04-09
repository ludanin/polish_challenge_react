import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { connect } from "react-redux";

import * as actions from "actions";
import { initialCoordinates } from "models/coordinates";
import { Person } from "models/person";
import { RPropsComplete } from "reducers";

import styles from "./styles.module.css";

const Map: React.FC<RPropsComplete> = ({ Store, FETCH_DATA, SELECT_PERSON }) => {
  const { fetching, people, selectedPersonID } = Store;

  // Fetch for data if not yet done it
  useEffect(
   () => {
      if (fetching === undefined) {
        FETCH_DATA();
      }
    },
    [FETCH_DATA, fetching],
  );

  // Since we've sized the map based on our VW and VH we need to get these
  // values here with javascript
  const vw = Math.max(
    document.documentElement.clientWidth, window.innerWidth || 0,
  );
  const vh = Math.max(
    document.documentElement.clientHeight, window.innerHeight || 0,
  );

  // Position the map
  const [viewport, setViewport] = useState({
    ...initialCoordinates,
    width: vw * 0.95,
    height: vh * (0.975 - 0.15),
    zoom: 12,
  });

  // Render markers
  if ((people?.length ?? 0) === 0) {
    return null;
  }

  // Takes a Person as argument and transforms it into a <Marker/>
  const makeMarker = (person: Person) => {
    const selected = person.id === selectedPersonID ? styles.selected : "";

    return (
      <Marker
        latitude={person.coordinates.latitude}
        longitude={person.coordinates.longitude}
        key={person.id}
      >
        <i
          className={
            `${styles.marker} ${selected} mdi mdi-map-marker`
          }
          // tslint:disable-next-line: jsx-no-lambda
          onClick={() => {
            SELECT_PERSON(person.id);
          }}
        />
      </Marker>
    );
  };

  // Maps all current people in our Store to Markers
  const mapMarkers = () => {
    const markers: React.ReactNode[] = [];
    for (const p of people) {
      markers.push(makeMarker(p));
    }
    return markers;
  };

  return (
    <div className="MAP">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoibHVkYW5pbiIsImEiOiJjazhzYTl1YXMwNHduM2RtdHlybWs1bnNmIn0.Q6MscVoZor30eeVqRi84xQ"
        onViewportChange={setViewport}
        mapStyle={"mapbox://styles/ludanin/ck8sae6321zd61ijyx565o8ll"}
      >
        {mapMarkers()}
      </ReactMapGL>
      <div className={styles.something}/>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  Store: state.Store,
});

export default connect(mapStateToProps, actions)(Map);
