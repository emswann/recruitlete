import React from 'react';
import { DotLoader} from 'react-spinners';

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='sweet-loading'>
        <DotLoader
          color={'#EE5B4F'} 
          loading={this.state.loading} 
        />
      </div>
    )
  }
}
export default Spinner;