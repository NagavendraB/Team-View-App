import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

// Components
import {Error, Loader, TeamViewList, ShowAll} from './components';

// Helpers
import {TEAM_SERVICE_END_POINT} from './helpers/configurations';
import { deleteMember, createSearchResults } from './helpers/utils';

// Css
import './assets/css/team-view.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: false,
      isAddClicked: false,
      isShowAllClicked: false,
      allTeamMembers: [],
      selectedTeam: [],
      searchResults: []
    };
  }

  componentDidMount() {
    this.loadData();
  }

  // It loads all team members from service
  loadData = () => {
    this.setState({ loading: true });
    return axios.request(TEAM_SERVICE_END_POINT).then(result => {   
      this.setState({
        loading: false,
        error: false,
        isAddClicked: false,
        allTeamMembers: result.data,
        searchResults: result.data,
        selectedTeam: [result.data[0]]
      });
    })
    .catch(error => this.setState({loading: false, error}));
  }

  // It opens the overlay to add Member
  onAddMember = () => {
    this.setState({isAddClicked: true});
  }

  // It update search results with user typed values on add overlay
  onSearchMember = (event) => {
    const {allTeamMembers} = this.state;
    const {target: {value}} = event;

    const searchResults = createSearchResults(allTeamMembers, value);
    this.setState({searchResults});
  }

  // It adds the selected member to team list
  onSelectMember = (member) => {
    const {allTeamMembers, selectedTeam, searchResults} = this.state;

    this.setState({
      isAddClicked: false,
      selectedTeam: [...selectedTeam, member], 
      searchResults: deleteMember(searchResults, member)
    });
  }

  // It removes the selected member from team list
  onRemoveMember = (member) => {
    const {selectedTeam, searchResults} = this.state;
    
    this.setState({
      searchResults: [...searchResults, member],
      selectedTeam: deleteMember(selectedTeam, member)
    });
  }

  onClickShowAll = () => {
    this.setState({isShowAllClicked: true});
  }

  render() {
    const {loading, error, selectedTeam, isAddClicked, searchResults, isShowAllClicked} = this.state;
    const appClassName = classnames("app", {
      "show-more-active": selectedTeam.length > 5 && !isShowAllClicked,
    });

    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <Error loadData={this.loadData} />;
    }

    return (
      <div className={appClassName}>
        <div className="team-view-app">
          <h4>YOUR TEAM FOR THIS TEST</h4>
          <TeamViewList 
            searchResults={searchResults}
            selectedTeam={selectedTeam} 
            isAddClicked={isAddClicked}
            onAddMember={this.onAddMember}
            onSelectMember={this.onSelectMember}
            onSearchMember={this.onSearchMember}
            onRemoveMember={this.onRemoveMember} />
        </div>
        <ShowAll onClickShowAll={this.onClickShowAll} />
      </div>
    );
  }
}

export default App;