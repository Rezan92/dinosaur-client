import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './style/home.css'

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <ul className="header">
          <li><button className="home-btn"><Link to="/dinosaurs">dinosaurs</Link></button></li>
        </ul>
        <h2>Dinosaurs</h2>
        <p className="pag-info">Dinosaurs are a diverse group of reptiles of the clade Dinosauria.<br /> They first appeared during the Triassic period, between 243 and 233.23 million years ago, <br />although the exact origin and timing of the evolution of dinosaurs is the subject of active research.</p>
        <div className="img-back">
          <img className="din-img" src="https://static.miraheze.org/christipediawiki/e/e6/Dinosaurussen.jpg" alt="" />
        </div>
      </div>
    )
  }
}