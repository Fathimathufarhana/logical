import React from 'react'
import "./css/Cards.css"

const Cards = () => {
  return (
    <div>
        <h1>Cards</h1>
        <div className='first-image'>
            <img className='cardimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3GjzeKA13_XvlmmcNWkt5noxwEUcntWKolg&usqp=CAU'></img>
            <img className='cardimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr9o4iiYmIJ71oGAcU2XuPKPRjwnTSxuxkZg&usqp=CAU'></img>
            <img className='cardimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3GjzeKA13_XvlmmcNWkt5noxwEUcntWKolg&usqp=CAU'></img>
        </div>
        <div className='second-image'>
        <img className='cardimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3GjzeKA13_XvlmmcNWkt5noxwEUcntWKolg&usqp=CAU'></img>
            <img className='cardimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3GjzeKA13_XvlmmcNWkt5noxwEUcntWKolg&usqp=CAU'></img>
            <img className='cardimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmk_PGtqIBDS6ImGlxE8v4vNVYUFDEhxW-3wSY4VPJnQ&s'></img>

        </div>
        <div className="like"><i className="fa fa-pencil fa-lg"></i></div>
       
    </div>
  //   <h1 className="text-3xl font-bold text-red-600 underline">
  //   Hello world!
  // </h1>
  )
}

export default Cards

// import Card from 'react-bootstrap/Card';
// // import { cardimages } from './images';
// function BasicExample(props) {
//     const{image} = props.data
//     console.log(image,"images");
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={image} />
      

      
//     </Card>
//   );
// }

// export default BasicExample;