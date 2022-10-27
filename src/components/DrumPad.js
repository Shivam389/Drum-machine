import React, {Component} from 'react';

const bank = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

class DrumPad extends Component{
    constructor(props){
      super(props);
      this.state={
        bankIndex:0
      }
      this.playSound = this.playSound.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() { 
      document.removeEventListener('keydown', this.handleKeyPress);
    }
    
    playSound(){
      let sound=document.getElementById(bank[this.state.bankIndex].keyTrigger);
      sound.currentTime = 0;
      sound.play();
      this.props.updateDisplay(bank[this.state.bankIndex].id.replace(/-/g, ' '));
    }
    handleKeyPress(event){
      this.setState({
        bankIndex:bank.findIndex( x => x.keyCode === event.keyCode)
      });
      if(event.keyCode === bank[this.state.bankIndex].keyCode){
      this.playSound();
      }
            var playButton = document.getElementById(bank[this.state.bankIndex].id);
              playButton.classList.add("on");
              setTimeout(function() { 
              playButton.classList.remove("on");
              }, 200);
    }
    handleClick(event){
      this.setState({
        bankIndex:bank.findIndex( x => x.id === event.currentTarget.id)
      }, ()=>{this.playSound()});   
    }
    render(){
      if(this.props.power){
        return(
        <div id="pad-box">
           <div 
             className='drum-pad'
             id={bank[0].id}
             onClick={this.handleClick}>
             <audio
                className='clip'
                id={bank[0].keyTrigger}
                src={bank[0].url}
             />{bank[0].keyTrigger}
           </div>
           <div 
             className='drum-pad'
             id={bank[1].id}
             onClick={this.handleClick}>
             <audio
                className='clip'
                id={bank[1].keyTrigger}
                src={bank[1].url}
             />{bank[1].keyTrigger}
           </div>
           <div 
             className='drum-pad'
             id={bank[2].id}
             onClick={this.handleClick}>
             <audio
                className='clip'
                id={bank[2].keyTrigger}
                src={bank[2].url}
             />{bank[2].keyTrigger}
           </div>
           <div 
             className='drum-pad'
             id={bank[3].id}
             onClick={this.handleClick}>
             <audio
                className='clip'
                id={bank[3].keyTrigger}
                src={bank[3].url}
             />{bank[3].keyTrigger}
           </div>
           <div 
             className='drum-pad'
             id={bank[4].id}
             onClick={this.handleClick}>
             <audio
                className='clip'
                id={bank[4].keyTrigger}
                src={bank[4].url}
             />{bank[4].keyTrigger}
           </div>
           <div 
             className='drum-pad'
             id={bank[5].id}
             onClick={this.handleClick}>
             <audio
                className='clip'
                id={bank[5].keyTrigger}
                src={bank[5].url}
             />{bank[5].keyTrigger}
           </div>
           <div 
             className='drum-pad'
             id={bank[6].id}
             onClick={this.handleClick}>
             <audio
                className='clip'
                id={bank[6].keyTrigger}
                src={bank[6].url}
             />{bank[6].keyTrigger}
           </div>
           <div 
             className='drum-pad'
             id={bank[7].id}
             onClick={this.handleClick}>
             <audio
                className='clip'
                id={bank[7].keyTrigger}
                src={bank[7].url}
             />{bank[7].keyTrigger}
           </div>
           <div 
             className='drum-pad'
             id={bank[8].id}
             onClick={this.handleClick}>
             <audio
                className='clip'
                id={bank[8].keyTrigger}
                src={bank[8].url}
             />{bank[8].keyTrigger}
           </div>
        </div>
        );
      }else{
        return(
        <div>
           <div 
             className='drum-pad'
             id={bank[0].id}
             onClick={this.handleClick}>
             <audio
                className='clip'
                id={bank[0].keyTrigger}
                src="#"
             />{bank[0].keyTrigger}
           </div>
           <div 
             className='drum-pad'
             id={bank[1].id}
             onClick={this.handleClick}>
             <audio
                className='clip'
                id={bank[1].keyTrigger}
                src="#"
             />{bank[1].keyTrigger}
           </div>
           <div 
             className='drum-pad'
             id={bank[2].id}
             onClick={this.handleClick}>
             <audio
                className='clip'
                id={bank[2].keyTrigger}
                src="#"
             />{bank[2].keyTrigger}
           </div>
           <div 
             className='drum-pad'
             id={bank[3].id}
             onClick={this.handleClick}>
             <audio
                className='clip'
                id={bank[3].keyTrigger}
                src="#"
             />{bank[3].keyTrigger}
           </div>
           <div 
             className='drum-pad'
             id={bank[4].id}
             onClick={this.handleClick}>
             <audio
                className='clip'
                id={bank[4].keyTrigger}
                src="#"
             />{bank[4].keyTrigger}
           </div>
           <div 
             className='drum-pad'
             id={bank[5].id}
             onClick={this.handleClick}>
             <audio
                className='clip'
                id={bank[5].keyTrigger}
                src="#"
             />{bank[5].keyTrigger}
           </div>
           <div 
             className='drum-pad'
             id={bank[6].id}
             onClick={this.handleClick}>
             <audio
                className='clip'
                id={bank[6].keyTrigger}
                src="#"
             />{bank[6].keyTrigger}
           </div>
           <div 
             className='drum-pad'
             id={bank[7].id}
             onClick={this.handleClick}>
             <audio
                className='clip'
                id={bank[7].keyTrigger}
                src="#"
             />{bank[7].keyTrigger}
           </div>
           <div 
             className='drum-pad'
             id={bank[8].id}
             onClick={this.handleClick}>
             <audio
                className='clip'
                id={bank[8].keyTrigger}
                src="#"
             />{bank[8].keyTrigger}
           </div>
        </div>
        );
      }
    }
  }

  export default DrumPad;