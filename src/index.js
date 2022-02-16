import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoFeed from './app/pages/video_feed';
import VideoDetail from './app/pages/video_detail';
import { ProviderCDS } from './app/context/provider';

const rootElement = document.getElementById("root");

ReactDOM.render(
    <React.StrictMode>
      <ProviderCDS>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<VideoFeed />}/>
              <Route path="/video_detail/:id" element={<VideoDetail />} />
          </Routes>
        </BrowserRouter>
      </ProviderCDS>
    </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
