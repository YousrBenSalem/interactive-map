import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

function WorldMap1() {
  const [showMountains, setShowMountains] = useState(false);

  // Fonction pour déterminer si une géographie est une montagne
  const isMountain = (geo) => {
    // Vous devrez adapter cette logique selon votre fichier features.json
    // Par exemple, vérifier une propriété comme geo.properties.elevation
    // ou geo.properties.featureClass === "mountain"
    // Ceci est un exemple basique
    return Math.random() < 0.1; // Exemple: 10% des zones sont considérées comme montagnes
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{
          scale: 150,
          rotate: [0, 0, 0],
          center: [0, 0],
        }}
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "#c9e7fa",
        }}
      >
        <Geographies geography="/features.json">
          {({ geographies }) =>
            geographies.map((geo) => {
              const isMountainArea = isMountain(geo);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={
                    showMountains && isMountainArea
                      ? "#93441A" // Couleur des montagnes
                      : "#f6f4c5" // Couleur normale
                  }
                  stroke="#c9e7fa"
                  strokeWidth={0.7}
                  style={{
                    default: { outline: "none" },
                    hover: {
                      fill: showMountains && isMountainArea ? "#83441A" : "#e8e5b5",
                      stroke: "#a8d5fa",
                      strokeWidth: 1,
                      outline: "none",
                    },
                    pressed: {
                      fill: showMountains && isMountainArea ? "#73441A" : "#d8d5a5",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "10px",
        }}
      >
        <button
          onClick={() => setShowMountains(!showMountains)}
          style={{
            color: "black",
            padding: "10px 20px",
            cursor: "pointer",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: showMountains ? "#e0e0e0" : "transparent",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <span>الجبال</span>
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#93441A",
              border: "1px solid black",
            }}
          ></div>
        </button>
      </div>
    </div>
  );
}

export default WorldMap1;