import React from 'react';

import Pet from './Pet';



class PetBrowser extends React.Component {

  checkAdopted = (pet)=>{

     return this.props.adoptedPets.includes(pet.id) ? true : false
  }



  renderPets = () =>{
    return this.props.pets.map((pet,i)=><Pet key={i} pet={pet} isAdopted={this.checkAdopted(pet)} onAdoptPet={this.props.onAdoptPet}/>)
  }

  render() {
    return (
      <div className="ui cards">
        {this.renderPets()}
      </div>
    );
  }
}

export default PetBrowser;
