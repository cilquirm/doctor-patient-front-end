import React, { Fragment, Component } from "react";
import NavBar from "../components/NavBar";
import DoctorCard from "../components/DoctorCard";
import "../styles/Home.css";
import "../styles/Specialists.css";
import SearchBar from "../components/SearchBar"

class Specialists extends Component {

  state = {
    input : "",
    NYcheck : false,
    NJcheck: false,
    Farthercheck: false
  }

  filterBySpecialty = () => {
    if (this.props.specialty === "all") {
      return this.props.doctors;
    } else {
      return this.props.doctors.filter(doctor => {
        return this.props.specialty === doctor.attributes.specialty;
      });
    }
  }

  mapDoctors = (basket) => {
    return basket.map(doctor => {
      return <DoctorCard key={doctor.id} doctor={doctor} />;
    });
  }

  handleSearchBar = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleCheckInput = (e) => {
    if (e.target.name==='NY'){
      this.setState({
        NYcheck : !this.state.NYcheck
      })
    }
    if (e.target.name==='NJ'){
      this.setState({
        NJcheck : !this.state.NJcheck
      })
    }
    if (e.target.name==='Farther'){
      this.setState({
        Farthercheck : !this.state.Farthercheck
      })
    }
  }

  filterByNY = (basket) => {
    
    if (this.state.NYcheck === true) {
      return basket.filter(doctor=>{
        return doctor.attributes.state === 'New York'
      })
    }
    else return basket
  }
 filterByNJ = (basket) => {
    
    if (this.state.NJcheck === true) {
      return basket.filter(doctor=>{
        return doctor.attributes.state === 'New Jersey'
      })
    }
    else return basket
  }
 filterByOther = (basket) => {
    
    if (this.state.Farthercheck === true) {
      return basket.filter(doctor=>{
        return doctor.attributes.state !== 'New York' && doctor.attributes.state !== 'New Jersey'
      })
    }
    else return basket
  }

  filterByName = (basket) => {
    return basket.filter(doctor=>{
      return doctor.attributes.first_name.toLowerCase().includes(this.state.input.toLowerCase()) ||
      doctor.attributes.last_name.toLowerCase().includes(this.state.input.toLowerCase())
    })
  }

render(){
  // console.log(this.props.doctors)
  return (
    <Fragment>
      <NavBar />
      <SearchBar handleSearchBar={this.handleSearchBar} input={this.state.input}/>
      Locations: <br/>
      <input type="checkbox" name="NY" checked={this.state.NYcheck} onChange={(e)=>this.handleCheckInput(e)}/>New York<br/>
  <input type="checkbox" name="NJ" checked={this.state.NJcheck} onChange={this.handleCheckInput}/>New Jersey<br/>
  <input type="checkbox" name="Farther" checked={this.state.Farthercheck} onChange={this.handleCheckInput}/>Farther<br/><br/>


      <div className="specialists">{this.mapDoctors(this.filterByNY(this.filterByNJ(this.filterByOther(this.filterByName(this.filterBySpecialty())))))}


      </div>
    </Fragment>
  );
  }
};

export default Specialists;
