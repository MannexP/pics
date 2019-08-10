import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.banana1Ref = React.createRef();
    }

    componentDidMount() {
        this.banana1Ref.current.addEventListener('load', this.makesSpanHeight);
        //                                                second arguement or callback
    }

    makesSpanHeight = () => {
        console.log(this.banana1Ref.current.clientHeight);
    }

  render() {
      const {description, urls } = this.props.banana1;

    return (
      <div>
        <img 
        ref={this.banana1Ref}
        alt={description} 
        src={urls.regular}
        />
      </div>
    );
  }
}


export default ImageCard;