import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'jimmy',
      bio: 'jimmy is really cool',
      imgSrc: 'https://pbs.twimg.com/media/DqDqUJwUcAAFVdj.jpg:large',
      profession: 'Software Developer',
    },
    shows: false,
    mountTime: null,
  };

  componentDidMount() {
    this.setState({ mountTime: new Date().getTime() });
    this.interval = setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, mountTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {shows && (
          <div>
            <h2>{fullName}</h2>
            <img src={imgSrc} alt={fullName} />
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
        <p>Time since mount: {(new Date().getTime() - mountTime) / 1000} seconds</p>
      </div>
    );
  }
}

export default App;

