import './App.css';
import React from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Item from './components/Item';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: []
    }
  }

  handleChangeText = (event) => {
    this.setState({ text: event.target.value })
  }

  handleSaveText = () => {
    const { text, items } = this.state;


    if (text !== '') {
      items.push(text);
      this.setState({ items, text: '' })
    } else {
      alert('boş girilemez');
    }

  }

  handleDeleteText = (gelen) => {
    //alert('tetiklendi' + gelen);
    const items = this.state.items;
    items.splice(gelen,1);
    this.setState({items});
     
  }

  render() {
    const { items, text } = this.state;
    return (
      <>
        <Header title='Todo Uygulaması' />
        <div className="formContainer">
          <Form
            handleChangeText={this.handleChangeText}
            handleSaveText={this.handleSaveText}
            textValue={text}
          />
          <Item
            handleDeleteText={this.handleDeleteText}
            items={items}
          />
        </div>
      </>
    )


  }
}