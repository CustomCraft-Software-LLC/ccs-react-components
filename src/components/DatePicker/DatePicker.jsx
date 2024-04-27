import * as React from 'react';
import './DatePicker.css';
import PropTypes from 'prop-types';

export default function DatePicker({...props}) {
  return (
    <div>
      <label for="date">Select a date:</label>
      <div className="date-input-container">
        <input type="date" id="date" name="date" value =""/>
        <span className="date-input-arrow">&#x25BC;</span>
      </div>
    </div>
  );
};

DatePicker.propTypes = {
    
}

DatePicker.defaultProps = {

}