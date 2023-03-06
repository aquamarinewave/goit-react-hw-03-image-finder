import { Component } from 'react';
import { Toaster } from 'react-hot-toast';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {

  state = {
    inputName: '',
  }

  // https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
// Pixabay API підтримує пагінацію, за замовчуванням параметр page дорівнює 1. Нехай у відповіді надходить по 12 об'єктів, встановлено в параметрі per_page. Не забудь, що під час пошуку за новим ключовим словом, необхідно скидати значення page до 1.
  
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