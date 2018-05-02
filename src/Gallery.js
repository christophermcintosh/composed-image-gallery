import React, { Component } from 'react';
import GalleryImage from './GalleryImage';

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      size: 20,
      pageNumber: 1,
      loading: true
    };
  }

  componentDidMount() {
    const { size, pageNumber } = this.state;
    this.getImages(size, pageNumber);
  }

  getImages = (size, pageNumber) => {
    const url = `https://taneleer.composedcreative.com/api/v1/feed/a0329f16-9225-11e6-89bb-296a97b9d609/bb0429f6-f0ca-11e7-8f5d-d92739a9a53f?page%5Bsize%5D=${size}&page%5Bnumber%5D=${pageNumber}&sort=created`;

    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({
          images: json.data
        });
      })
      .then(() => this.setState({ loading: false }))
      .catch(err => console.error(err));
  };

  render() {
    const { images, loading } = this.state;

    if (loading) {
      return (
        <div className="loader-flex">
          <div className="loader" />
        </div>
      );
    }
    return (
      <div id="gallery">
        {images.length &&
          images.map(image => {
            return (
              <div key={image.id} className="flex">
                <GalleryImage
                  src={image.mainImage.url}
                  alt={image.caption}
                  url={image.url}
                  caption={image.caption}
                  service={image.service}
                  date={image.createdDate.date}
                  user={image.user}
                />
              </div>
            );
          })}
      </div>
    );
  }
}

export default Gallery;
