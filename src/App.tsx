import { useState, useEffect } from 'react'
import './App.css'
import Webcam from "react-webcam";
import {Holistic} from '@mediapipe/holistic';

function App() {
  useEffect(() => {
    const holistic = new Holistic({
      locateFile: (file: string) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`;
      }
    });
    }, [])
    holistic.setOptions({
      selfieMode: true,
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: true,
      smoothSegmentation: true,
      refineFaceLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });
 return (
  <div className="App">
    <Webcam
      style={{
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        textAlign: "center",
        zIndex: 9,
        width: 1200,
        height: 800,
      }}
    />
  </div>
 )
}

export default App
