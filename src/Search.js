import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="bottomRow">
      <form id="form">
        <input
          type="text"
          placeholder="Enter City Here"
          id="search-form"
          autoComplete="off"
        />
        <input type="submit" value="Search" id="change-city" />
      </form>
      <div className="quickLookup">
        ex.
        <span className="cities">
          <ul>
            <li id="current-location">Current Location</li>
            <li id="paris">Paris</li>
            <li id="tokyo">Tokyo</li>
            <li id="sydney">Sydney</li>
          </ul>
        </span>
      </div>
    </div>
  );
}
