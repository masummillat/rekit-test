import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { TestContact } from 'src/features/contact';

describe('contact/TestContact', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <TestContact />
    );

    expect(
      renderedComponent.find('.contact-test-contact').getElement()
    ).to.exist;
  });
});
