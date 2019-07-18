import React from 'react';

// Here props is the object that was passed from App.js "images" ******************1imageList"

const ImageList = (props) => {
    console.log(props.images)
    return <div>Image List</div>
};

export default ImageList;