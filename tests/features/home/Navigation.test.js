import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Navigation } from 'src/features/home';

describe('home/Navigation', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <Navigation />
    );

    expect(
      renderedComponent.find('.home-navigation').getElement()
    ).to.exist;
  });
});
