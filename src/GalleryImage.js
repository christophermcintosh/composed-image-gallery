import React, { Component } from 'react';

class GalleryImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false,
      expandImage: false
    };
    this.handleFlip = this.handleFlip.bind(this);
    this.handleExpandImage = this.handleExpandImage.bind(this);
  }

  handleFlip(e) {
    e.preventDefault();
    return this.setState({ showDescription: !this.state.showDescription });
  }

  handleExpandImage(e) {
    e.preventDefault();
    this.state.expandImage
      ? (document.body.style.overflow = 'auto')
      : (document.body.style.overflow = 'hidden');
    return this.setState({ expandImage: !this.state.expandImage });
  }

  render() {
    const { src, alt, caption, url, user, service, date } = this.props;
    const { showDescription, expandImage } = this.state;

    return (
      <div>
        <div className="img-container animated fadeIn">
          <div
            className={showDescription ? 'img-wrap img-wrap-flip' : 'img-wrap'}
          >
            <div className="front">
              <img src={src} alt={alt} />
            </div>
            <div className="overlay" onClick={this.handleFlip} />
            <div
              className={showDescription ? 'back scroll' : 'back scroll-hide'}
            >
              <button onClick={this.handleFlip} className="close-desc-button">
                X
              </button>
              <h3>{`@${user}`}</h3>
              <p className="caption">{caption}</p>
              <p>
                {`Posted - ${new Date(date).toDateString()} via `}
                <a href={url} target="_blank">
                  {service}
                </a>
              </p>
              <button
                onClick={this.handleExpandImage}
                className="expand-button"
              >
                Expand
              </button>
              <p />
            </div>
          </div>
        </div>
        {expandImage ? (
          <div className="lightbox">
            <div className="expand-container animated zoomIn">
              <button
                className="close-expand-button"
                onClick={e => {
                  this.handleExpandImage(e);
                  this.handleFlip(e);
                }}
              >
                X
              </button>
              <div>
                <img src={src} alt={alt} />
              </div>
              <div>
                <h2>{`@${user}`}</h2>
                <p className="caption">{caption}</p>
                <p>
                  {`Posted - ${new Date(date).toDateString()} via `}
                  <a href={url} target="_blank">
                    {service}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default GalleryImage;
