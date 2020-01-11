import React, { Component } from "react";
import "../assets/css/graphicStyle.css";
class Graphic extends Component {
  render() {
    return (
      <div class="row">
        <div class="borderedDiv">
          <select id="yearReport" class="selectpicker">
            <option value="2019">Año 2019</option>
            <option value="2018">Año 2018</option>
            <option value="2017">Año 2017</option>
            <option value="2016">Año 2016</option>
            <option value="2015">Año 2015</option>
          </select>
          <div id="chartContainer"></div>
        </div>
      </div>
    );
  }
}

export default Graphic;
