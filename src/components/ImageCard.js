import React from "react";

class ImageCard extends React.Component {
  render() {
    return (
      <div>
        <img 
        alt={this.props.banana1.description} 
        src={this.props.banana1.urls.regular}
        />
      </div>
    );
  }
}


export default ImageCard;