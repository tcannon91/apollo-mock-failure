import { render } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import React from 'react';

import mockPerson from '../src/lib/gql/Person/mockData';
import Component from '../src/pages/component';
import PersonQueries from '../src/lib/gql/Person/queries';

const mocks: MockedResponse[] = [
  {
    request: {
      query: PersonQueries.getPersonId,
      variables: {
        name: 'Buck',
      },
    },
    result: {
      data: {
        dog: { id: '1', name: 'Buck', breed: 'bulldog' },
      },
    },
  },
];

it('renders without error', () => {
  const component = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Component memberId={mockPerson.personId} healthxPayload="test" />
    </MockedProvider>,
  );

  // const tree = component.toJSON();

  expect(component).toContain('Loading...');
});
