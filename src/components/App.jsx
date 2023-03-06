import { Component } from 'react';
import { Toaster } from 'react-hot-toast';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {

  state = {
    inputName: '',
  }

  haldleFormSubmit = inputName => {
    this.setState({inputName})
  }
    
  render() {
    const { hits, inputName } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.haldleFormSubmit} />
        <ImageGallery options={hits} inputName={inputName}   />
        <Toaster />
      </div>
    );
  }
};

export default App;
