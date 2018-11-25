import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

// Components
import {
  Overlay,
  OverlayList,
  OverlayListItem,
  OverlayNoResults,
  OverlaySearchInput,
  AddMember,
  RemoveMember,
  TeamMember,
  TeamViewList,
  ShowAll,
  Error,
  Loader
} from '../components';

Enzyme.configure({ adapter: new Adapter() });

const testMembers = [
  {"username":"Max Mustermann", "role":"Admin"},
  {"username":"Max", "role":"Client"},
];

it('`Overlay` exist and be a component', () => expect(Overlay).toBeInstanceOf(Function));
it('`OverlayList` exist and be a component', () => expect(OverlayList).toBeInstanceOf(Function));
it('`OverlayListItem` exist and be a component', () => expect(OverlayListItem).toBeInstanceOf(Function));
it('`OverlayNoResults` exist and be a component', () => expect(OverlayNoResults).toBeInstanceOf(Function));
it('`OverlaySearchInput` exist and be a component', () => expect(OverlaySearchInput).toBeInstanceOf(Function));
it('`AddMember` exist and be a component', () => expect(AddMember).toBeInstanceOf(Function));
it('`RemoveMember` exist and be a component', () => expect(RemoveMember).toBeInstanceOf(Function));
it('`TeamMember` exist and be a component', () => expect(TeamMember).toBeInstanceOf(Function));
it('`TeamViewList` exist and be a component', () => expect(TeamViewList).toBeInstanceOf(Function));
it('`ShowAll` exist and be a component', () => expect(ShowAll).toBeInstanceOf(Function));
it('`Error` exist and be a component', () => expect(Error).toBeInstanceOf(Function));
it('`Loader` exist and be a component', () => expect(Loader).toBeInstanceOf(Function));

it('`Overlay` component should render overlay of users', () => {
  const wrapper = shallow(<Overlay searchResults={testMembers} total={1} />);
  expect(wrapper.find('.overlay')).toBeDefined();
});

it('`OverlayList` component should render overlay of list of users', () => {
  const wrapper = shallow(<OverlayList searchResults={testMembers} />);
  const results = wrapper.find('.avilable-user-list').children();
  expect(results.length).toBe(testMembers.length);
});

it('`OverlayNoResults` component should render no results message on overlay', () => {
  const wrapper = shallow(<OverlayNoResults />);
  expect(wrapper.find('.no-results')).toBeDefined();
});

it('`OverlaySearchInput` component should render textinput on overlay to search for avilable users', () => {
  const wrapper = shallow(<OverlaySearchInput />);
  expect(wrapper.find('.add-input')).toBeDefined();
});

it('`AddMember` component should render add icon, and when user clicks on it, then it should render overlay ', () => {
  const mockCallBack = jest.fn();

  const wrapper = shallow(<AddMember onAddMember={mockCallBack} />);
  wrapper.find('.add-icon').simulate('click');

  expect(wrapper.find('.add-team-member')).toBeDefined();
  expect(wrapper.find('.overlay')).toBeDefined();
});

it('`RemoveMember` component should render remove icon when user mouse over on icon', () => {
  const wrapper = shallow(<RemoveMember />);
  expect(wrapper.find('.close')).toBeDefined();
});

it('`TeamMember` component should render team member information like userrole, username', () => {
  const wrapper = shallow(<TeamMember />);
  expect(wrapper.find('.team-member')).toBeDefined();
  expect(wrapper.find('.user-role')).toBeDefined();
  expect(wrapper.find('.user-name')).toBeDefined();
});

it('`TeamViewList` component should render list of team members + add icon', () => {
  const wrapper = shallow(
    <TeamViewList 
      searchResults={testMembers} />);
  
  expect(wrapper.find('.add-icon')).toBeDefined();
  const results = wrapper.find('.team-view-list').children();
  expect(results.length + 1).toBe(testMembers.length);
});