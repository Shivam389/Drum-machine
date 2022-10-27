import './App.css';
import React, {Component} from 'react';
import DrumPad from './components/DrumPad';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      power:true,
      display: String.fromCharCode(160),
      volume:50
    };
    this.powerControl=this.powerControl.bind(this);
    this.volumeControl=this.volumeControl.bind(this);
    this.displayControl=this.displayControl.bind(this);
    this.clearDisplay=this.clearDisplay.bind(this);
  }
  powerControl(){
    if(this.state.power){
      this.setState({
        power: !this.state.power,
        display: "Bye :)",
        volume:0
      });
    }else{
      this.setState({
        power: !this.state.power,
        display: "Welcome!!!",
        volume:100
      });
    }
  }
  volumeControl(event){
    if(this.state.power){
      this.setState({
        volume:event.target.value,
        display:"Volume:"+event.target.value
      });
      setTimeout(()=>this.clearDisplay(),1000);
    }
  }
  displayControl(name) {
    if (this.state.power) {
      this.setState({
        display: name
      });
    }
  }
  clearDisplay() {
    this.setState({
      display: String.fromCharCode(160)
    });
  }
  
  render(){
    const powerSlider = this.state.power
      ? {
          float: 'right'
        }
      : {
          float: 'left'
        };
    const powerShadow = this.state.power
      ? {
          outline: '8px inset red'
        }
      : {
          outline: '8px inset black'
        };
    {
      const clips = [].slice.call(document.getElementsByClassName('clip'));
      clips.forEach(sound => {
        sound.volume = this.state.volume/100;
      });
    }
    return(
    <div id="drum-machine" style={powerShadow}>
      <div id="pad">
        <DrumPad
          power={this.state.power}
          updateDisplay={this.displayControl}
        />
      </div>
      <div id="control">
        <div id="power">
          <p>Power</p>
          <div className='select' onClick={this.powerControl}>
            <div className='inner' style={powerSlider} />
          </div> 
        </div>
        <p id='display'>{this.state.display}</p>
          <div className='volume-slider'>
            <input
              max='100'
              min='0'
              onChange={this.volumeControl}
              step='1'
              type='range'
              value={this.state.volume}
            />
          </div>
      </div>
    </div>
    );
  }
}

export default App;
