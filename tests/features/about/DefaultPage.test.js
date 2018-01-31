import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { DefaultPage } from 'src/features/about/DefaultPage';

describe('about/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      about: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.about-default-page').getElement()
    ).to.exist;
  });
});
