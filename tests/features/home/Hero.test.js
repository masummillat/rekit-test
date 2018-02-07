import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Hero } from 'src/features/home';

describe('home/Hero', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <Hero />
    );

    expect(
      renderedComponent.find('.home-hero').getElement()
    ).to.exist;
  });
});
