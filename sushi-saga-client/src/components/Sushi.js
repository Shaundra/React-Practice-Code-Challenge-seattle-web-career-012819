import React, { Fragment } from 'react'

// const Sushi = (props) => {
//   return (
//     <div className="sushi">
//       <div className="plate"
//            onClick={/* Give me a callback! */ null}>
//         {
//           /* Tell me if this sushi has been eaten! */
//           true ?
//             null
//           :
//             <img src={/* Give me an image source! */} width="100%" />
//         }
//       </div>
//       <h4 className="sushi-details">
//         {/* Give me a name! */} - ${/* Give me a price! */}
//       </h4>
//     </div>
//   )
// }

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" >
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}



export default Sushi
