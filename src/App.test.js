import renderer from 'react-test-renderer';
import App from './App';

it('Renders same as before', () => {
  const component = renderer
    .create(<App />)
    .toJSON();
  expect(component).toMatchSnapshot();
});



/*************/

/*import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the component', () => {
  render(<App />);
  expect(screen.getByText("<div>")).toHaveTextContent("Play Tic-tac-toe:");
});*/

/*import React from 'react';
import { shallow } from 'enzyme';
import { MyComponent } from './my.component.js';

describe(`Component: MyComponent`, () => {
  test(`MyComponent renders with default props`, () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});*/


