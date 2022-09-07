import React, { Component } from 'react';
import { connect } from 'react-redux';
import img from "../../dog.png"
import {getAllDogs} from "../../redux/actions/index"

export class Dogs extends Component {

    componentDidMount() {
        this.props.getAllDogs();
    }

    render() {
        return (
            <div>
              <h1>Game of Thrones</h1>
              <img src={img} alt="main-img" />
              <h3>Houses</h3>
              {
                // this.props.houses?.map(h => (
                //     <HouseCard key={h.id}
                //      id={h.id}
                //      region={h.region}
                //      name={h.name}
                //      words={h.words} 
                //      characters={h.characters}/>
                // ))
              }
            </div>
        );
    };
}

export const mapDispatchToProps = dispatch => {
    return {
        getAllDogs: () => dispatch(getAllDogs())
    }
};

export default connect(mapDispatchToProps)(Dogs);