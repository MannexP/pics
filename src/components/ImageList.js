import React from "react";
import './ImageList.css';
// Here props is the object that was passed from App.js "images" ******************1imageList"

const ImageList = props => {
  // map through props and save to images variable
  const images = props.images.map(banana1 => {

    //    key is added to lists that are rendered to dom. They key prop is added to root elements that are to be rendered. READ BELOW #244
    return <img alt ={banana1.description}  key={banana1.id} src={banana1.urls.regular} />;

// *****************************************************************************
// You CAN ALSO DESTRUCTURE THE PROP, BY ENTERTING THE PARAMATERS AND REFERENCING THEM DIRECTLY
//   const images = props.images.map(({ description, id, urls }) => {
//     return <img alt ={description}  key={id} src={urls.regular} />;
// *****************************************************************************

});


    // #244 *********************
    // if the img tag was wrapped in a div, you assign the key prop to the div and not the img tag

    //   return
    // <div  key={images.id}>
    //          <img src={banana1.urls.regular} />
    // </div>
 

  // returning the array that is saved as images on line #6
  return <div className="image-list" >{images}</div>;
};

export default ImageList;
