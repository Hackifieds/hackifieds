import Listings from './listings.jsx';

class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      // next line is static example: will be listings: [] for dynamic
      listings: props.listings
    };
  }

  render () {
    return (
      <div>
        <Listings listings={this.state.listings}/>
      </div>
    );
  }

}

export default App;

