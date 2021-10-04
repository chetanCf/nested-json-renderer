import React from 'react';
import './App.css';
import { NestedRenderer } from '../Routes/NestedRenderer';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { resetDataForContinent, setDataForContinent, setRandomData } from '../actions/countriesAction';
import { ApiUtis } from '../ApiUtils/ApiUtils';
import { LoaderIndicator } from '../widgets/LoadingIndicator/LoadingIndicator';
import { hideLoader, showLoader } from '../actions/globalAction';
import { NestedJsonGenerator } from '../Models/NestedJsonGenerator';
import { NestedJson } from '../Models/NestedJson';
import { DataGeneratorForm } from '../widgets/DataGeneratorForm/DataGeneratorForm';

interface AppProps {
  setDataForContinent(continentData: any, continentCode: string): void;
  showLoader(): void;
  hideLoader(): void;
  setRandomData(data: any): void;
  resetDataForContinents(): void;
  data: Array<NestedJson>;
  loadersCount: number
}

interface AppState {
  shouldShowRandomData: boolean;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      shouldShowRandomData: false
    }
    this.fetchCountiesForContinent = this.fetchCountiesForContinent.bind(this);
    this.setShouldShowRandomDataFlag = this.setShouldShowRandomDataFlag.bind(this);
    this.unSetShouldShowRandomDataFlag = this.unSetShouldShowRandomDataFlag.bind(this);
    this.generateRandomData = this.generateRandomData.bind(this);
  }

  fetchCountiesForContinent(code: string) {
    const { setDataForContinent, showLoader, hideLoader } = this.props;
    showLoader();
    ApiUtis.getCountryInfo.getCoutriesForContinents(code)
      .then(contries => setDataForContinent(contries, code))
      .catch((e: Error) => {
        console.error(e);
        // @todo: integrate a custom error modal
        alert("Unexpected Error");
      })
      .finally(() => hideLoader());
  }

  generateRandomData(nodeDepth: number, childrenLength: number) {
    const randomData = new NestedJsonGenerator(nodeDepth, childrenLength);
    const { setRandomData } = this.props;
    setRandomData(randomData);
  }

  setShouldShowRandomDataFlag() {
    this.setState({ shouldShowRandomData: true });
  }

  unSetShouldShowRandomDataFlag() {
    const { resetDataForContinents } = this.props;
    this.setState({ shouldShowRandomData: false });
    resetDataForContinents();

  }


  render() {
    const { data, loadersCount } = this.props
    const { shouldShowRandomData } = this.state;
    return (
      <div className="app">
        <div className="cta-container">
          {shouldShowRandomData &&
            <button className="cta" onClick={this.unSetShouldShowRandomDataFlag}>Populate with GraphQl Api</button>
          }
          {!shouldShowRandomData &&
            <button className="cta" onClick={this.setShouldShowRandomDataFlag}>Populate with Random Data</button>
          }
        </div>
        {shouldShowRandomData &&
          <DataGeneratorForm genrateData={this.generateRandomData} />
        }
        <div className="divider"></div>
        <NestedRenderer data={data} fetchCountiesForContinent={this.fetchCountiesForContinent} />
        {(loadersCount > 0) &&
          <LoaderIndicator />
        }
      </div>
    );
  }


}
const mapStateToProps = (dataFromStore: any) => {
  const { continents, global: { loadersCount } } = dataFromStore;
  return {
    data: continents.data,
    loadersCount: loadersCount
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setDataForContinent: (continentData: any, continentCode: string) => dispatch(setDataForContinent(continentData, continentCode)),
    setRandomData: (data: any) => dispatch(setRandomData(data)),
    resetDataForContinents: () => dispatch(resetDataForContinent()),
    showLoader: () => dispatch(showLoader()),
    hideLoader: () => dispatch(hideLoader())

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
