import React from "react";
import './style/dinosaurs.css'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getDinosaur } from "../action";

class Dinosaurs extends React.Component {

  componentDidMount() {
    this.props.getDinosaur()
  }

  render() {
    const dinosaur = this.props.dinosaur
    const dinoImages = dinosaur ? dinosaur.map(dinosaur => <div className="column" key={dinosaur.id}>
      <img className="dinosaur-img" src={dinosaur.image} width="400px" alt="" />
      <Link className="link-name" to={`/dinosaurs/${dinosaur.id}`}><p>{dinosaur.name}</p></Link>
    </div>) : 'loading...'

    return <div className="gallery">
      <h1 className="title">Dinosaurs</h1>
      <div className="row">{dinoImages}</div>
    </div>
  }

}
const mapStateToProps = (state) => {
  return {
    dinosaur: state.dinosaur.allDinosaur
  }
}

export default connect(mapStateToProps, { getDinosaur })(Dinosaurs);