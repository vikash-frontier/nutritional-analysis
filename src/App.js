import React, { Component } from 'react';
import './App.css'
import Input from './components/Input';
import Picture from './components/Picture';
import Title from './components/Title';

class App extends Component {
   constructor(){
     super();
     this.state={
       data:[],
       list:false
     }
     this.data=[];
     this.input=[];
     this.id='505fb9d5';
     this.key='6b713238363185ff7a805aa52a69387a'
   }

   onChange=(e)=>{
     this.input=e.target.value.split(',');
   }

   onClick=(e)=>{
    e.preventDefault();
     this.getData();
   }
   onClear=()=>{
     this.setState({
       list:false,
      })

   }

   getData(){
    Promise.all(this.input.map(input=>{
      return(fetch(`https://api.edamam.com/api/nutrition-data?app_id=${this.id}&app_key=${this.key}&ingr=${input}`)
      .then(response=>{
        return response.json();
      })
      );
    }))
    .then(contents=>{
      this.setState({data:contents});
    })
    .then(this.setState({list:true}))
  }
  
  render() {
    return (
      <div className="App">
          <Title />
          <Picture list={this.state.list} data={this.state.data} />
          <Input onChange={this.onChange} onClear={this.onClear} onClick={this.onClick} list={this.state.list} input={this.input}/>
      </div>
    )
  }
}

export default App;
