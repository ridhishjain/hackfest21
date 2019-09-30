import React, { Component } from 'react';
import { storage } from './firebase.js'

class ImageUpload extends Component {
  state = {
    image: null,
  }
  
  handleChange = (e) => {
      console.log(e.target.files[0]);
      const img = e.target.files[0];
      this.setState({ image: img });
    }

    store = (e) => {
      const { image } = this.state;
      console.log(image);
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', (snapshot) => {
        console.log('progress');
      },
      (error)=> { console.log(error) },
      () => {
        // complete function
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
          console.log(url)
          })
      });
    }
  
  render() {
    return (
      <div>
      <input type="file" onChange={this.handleChange}/>
      <button onClick={this.store}> Upload </button>
      </div>
    );
  }
}
export default ImageUpload;