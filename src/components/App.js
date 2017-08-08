import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  onAdoptPet =(id)=>{
    this.setState({
      adoptedPets: this.state.adoptedPets.concat(id)
    })

  }

  onChangeType = (obj)=>{
    this.setState({
      filters:{
        ...this.state.filters,
        type: obj,
      }
    })
  }

  onFindPetsClick = () =>{
    let url = ""
    if(this.state.filters.type === "all"){
      url = "/api/pets"
    } else {
      url = "/api/pets?type=" + this.state.filters.type
    }

    fetch(url).
      then((response)=>{
        return response.json()
    }).
      then((data)=>{
        data.forEach((animal)=>{
          this.setState({
            pets: this.state.pets.concat(animal)
          })
        })

      })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick = {this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
