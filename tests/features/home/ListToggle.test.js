import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { ListToggle } from 'src/features/home';

describe('home/ListToggle', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <ListToggle />
    );

    expect(
      renderedComponent.find('.home-list-toggle').getElement()
    ).to.exist;
  });
});
