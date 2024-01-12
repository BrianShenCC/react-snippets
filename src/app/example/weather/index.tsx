"use client";
import "./index.css";

export const Sunny = () => {
  return (
    <div className="weather-container weather-sunny animate-duration-1800">
      <div className="animate__animated ">
        <div className="sun" />
        <div className="sunx" />
      </div>
    </div>
  );
};

export const Rainy = () => {
  return (
    <div className="weather-container weather-rainy animate-duration-1800">
      <div className="rainy animate__animated ">
        <ul>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
        <span className="rainy-cloud" />
      </div>
    </div>
  );
};

export const Snowy = () => {
  return (
    <div className="weather-container weather-snowy animate-duration-1800">
      <div className="snowy animate__animated ">
        <ul>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
        <span className="snowe" />
        <span className="snowex" />
        <span className="stick" />
        <span className="stick2" />
      </div>
    </div>
  );
};

export const Cloudy = () => {
  return (
    <div className="weather-container weather-cloudy animate-duration-1800">
      <div className="animate__animated ">
        <div className="cloud" />
        <div className="cloudx" />
      </div>
    </div>
  );
};

export const Nighty = () => {
  return (
    <div className="weather-container weather-nighty animate-duration-1800">
      <div className="animate__animated ">
        <div className="night">
          <span className="moon" />
          <span className="spot1" />
          <span className="spot2" />
          <ul>
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
      </div>
    </div>
  );
};
