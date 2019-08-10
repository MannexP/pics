import React from "react";

class ImageCard extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.imageRef = React.createRef();
    // }
  render() {
      const {description, urls } = this.props.banana1;

    return (
      <div>
        <img 
        // ref={this.imageRef}
        alt={description} 
        src={urls.regular}
        />
      </div>
    );
  }
}


export default ImageCard;