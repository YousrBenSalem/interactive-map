import React, { useState, useEffect } from "react";
import DeckGL from "@deck.gl/react";
import { _WMSLayer as WMSLayer } from "@deck.gl/geo-layers";

// Default view state
const INITIAL_VIEW_STATE = {
  longitude: 10,
  latitude: 20,
  zoom: 3,
  pitch: 0,
  bearing: 0,
};

const CONTROLLER = {
  dragRotate: false,
  touchRotate: false,
  maxPitch: 85,
  minZoom: 1,
  maxZoom: 20,
};

const SAMPLE_SERVICE = {
  serviceUrl: "https://ows.terrestris.de/osm/service",
  layers: ["TOPO-WMS"], // WMS layer
};

const MapComponent = () => {
  const [viewState, setViewState] = useState(INITIAL_VIEW_STATE);

  // Create WMS Layer
  const wmsLayer = new WMSLayer({
    data: SAMPLE_SERVICE.serviceUrl,
    serviceType: "wms",
    layers: SAMPLE_SERVICE.layers,
    pickable: false, // No interactivity
  });

  // Handle view state changes
  const onViewStateChange = ({ viewState }) => {
    setViewState(viewState);
  };

  // Cleanup WebGL Context
  useEffect(() => {
    return () => {
      console.log("Cleaning up WebGL context...");
    };
  }, []);

  return (
    <DeckGL
      style={{ width: "100vw", height: "100vh" }}
      layers={[wmsLayer]}
      initialViewState={viewState}
      controller={CONTROLLER}
      onViewStateChange={onViewStateChange}
      onWebGLInitialized={(gl) => console.log("WebGL initialized:", gl)}
    />
  );
};

export default MapComponent;
