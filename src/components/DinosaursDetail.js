import React, { Component } from 'react'
import { connect } from "react-redux";
import { getOneDinosaur } from "../action";
import './style/dinosaursDetail.css'

class DinosaursDetail extends Component {
  componentDidMount() {
    this.props.getOneDinosaur(this.props.match.params.id)
  }
  render() {
    const dinosaur = this.props.dinosaur ? this.props.dinosaur : 'loading...'
    return (
      <div className="container">
        <h1 className="title-name">{dinosaur.name}</h1>
        <div className="dino-img"><img className="detail-img" src={dinosaur.image} alt="" /></div> 
        <div className="info-ditail">
        <p className="more-info">{dinosaur.more_info}</p>
        <dt><strong>Type of dinosaur:</strong>{ dinosaur.type_of_dinosaur}</dt>
        <dt><strong>Length:</strong>{` ${dinosaur.lenght}m`}</dt>
        <dt><strong>Diet:</strong>{` ${dinosaur.diet}`}</dt>
        <dt><strong>When it lived:</strong>{` ${dinosaur.when_it_lived}`}</dt>
        <dt><strong>Found in:</strong>{` ${dinosaur.found_in}`}</dt>
        <dt><strong>Named by:</strong>{` ${dinosaur.named_by}`}</dt>
        <dt><strong>Taxonomy:</strong>{` ${dinosaur.taxonomy}`}</dt>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dinosaur: state.dinosaur.oneDinosaur
  }
}

export default connect(mapStateToProps, { getOneDinosaur })(DinosaursDetail);