import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { TitleList } from 'src/features/home';

describe('home/TitleList', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <TitleList />
    );

    expect(
      renderedComponent.find('.home-title-list').getElement()
    ).to.exist;
  });
});
