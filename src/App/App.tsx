import React from 'react';
import './App.css';
import { NestedRenderer } from '../Routes/NestedRenderer';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setDataForContinent } from '../actions/countriesAction';
import { ApiUtis } from '../ApiUtils/ApiUtils';

class App extends React.Component<any> {
  constructor(props:any){
    super(props);
    this.fetchCountiesForContinent = this.fetchCountiesForContinent.bind(this);
  }

  fetchCountiesForContinent(code: string) {
    const { setDataForContinent } = this.props;
    ApiUtis.getCountryInfo.getCoutriesForContinents(code)
      .then(contries=>setDataForContinent(contries, code))
      .catch(console.error);
  }

  render() {
    return (
      <div className="App">
        <NestedRenderer data={this.props.data} fetchCountiesForContinent={this.fetchCountiesForContinent} />
      </div>
    );
  }


}
const mapStateToProps = (continentsFromStore: any) => {
  const { continents } = continentsFromStore;
  return {
    data: continents.data
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setDataForContinent: (continentData: any, continentCode: string) => dispatch(setDataForContinent(continentData, continentCode))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
