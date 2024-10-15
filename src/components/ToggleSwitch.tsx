import React, { Component } from "react";

const ToggleSwitch = (props: any) => {
    return (
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name="toggleSwitch"
          id="toggleSwitch"
          checked={props.checked}
          onChange={e => props.onChange(e.target.checked)}
        />
        <label className="toggle-switch-label" htmlFor="toggleSwitch">
          <span className="toggle-switch-inner" />
          <span className="toggle-switch-switch" />
        </label>
      </div>
    );
  }

export default ToggleSwitch;