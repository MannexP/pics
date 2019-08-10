import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans:0};

        this.banana1Ref = React.createRef();
    }

    componentDidMount() {
        this.banana1Ref.current.addEventListener('load', this.makesSpanHeight);
        //                                                second arguement or callback
    }

    makesSpanHeight = () => {
      const height = this.banana1Ref.current.clientHeight;

      const spans = Math.ceil(height / 10);
      this.setState({spans});
    };

  render() {
      const {description, urls } = this.props.banana1;

    return (
      <div style={{gridRowEnd:`span ${this.state.spans}`}}>
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