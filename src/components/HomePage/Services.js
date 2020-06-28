import React, { Component } from 'react'
import styled from 'styled-components'
import {FaDolly, FaRedo, FaDollarSign} from 'react-icons/fa'

export default class Services extends Component {
    state = 
    {services:[{
        id:1,
        icon: <FaDolly/>,
        title : 'free shipping',
        text: "Ea eiusmod ut commodo in cillum mollit in labore pariatur eiusmod. Reprehenderit consequat nostrud ut magna est voluptate nostrud cupidatat in nulla esse esse. Tempor incididunt consequat id reprehenderit. Culpa occaecat culpa irure laboris non est laboris laboris. Eu culpa minim dolore aliqua nostrud labore duis officia sit."

    },{
      id:2,
      icon: <FaRedo/>,
      title : '30 Days return policy',
      text: "Ea eiusmod ut commodo in cillum mollit in labore pariatur eiusmod. Reprehenderit consequat nostrud ut magna est voluptate nostrud cupidatat in nulla esse esse. Tempor incididunt consequat id reprehenderit. Culpa occaecat culpa irure laboris non est laboris laboris. Eu culpa minim dolore aliqua nostrud labore duis officia sit."

  },{
    id:3,
    icon: <FaDollarSign/>,
    title : 'Secured Payment',
    text: "Ea eiusmod ut commodo in cillum mollit in labore pariatur eiusmod. Reprehenderit consequat nostrud ut magna est voluptate nostrud cupidatat in nulla esse esse. Tempor incididunt consequat id reprehenderit. Culpa occaecat culpa irure laboris non est laboris laboris. Eu culpa minim dolore aliqua nostrud labore duis officia sit."

}]}
  render() {
    return <ServiceWrapper className="py-5">
      <div className="container">
        <div className="row">
        {this.state.services.map(item=>{
          return (
            <div className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3" key={item.id} >
              <div className="service-icon">
            {item.icon}
              </div>
            <div className="mt-3 text-capitalize">
            {item.title}
            </div>
            <div className="mt-3">
              {item.text}
            </div>

            </div>
          )
        })}
        </div>
      </div>

    </ServiceWrapper>
  }
}


const ServiceWrapper = styled.section`
background : rgba(95,183,234,0.5);
.service-icon {
  font-size : 2.5rem;
  color : var(--primaryColor)
}

p{
  color : var(--darkGrey)
}
`