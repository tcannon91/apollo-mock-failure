import React from 'react';
import { useQuery } from '@apollo/client';
import PersonQueries from '../lib/gql/Person/queries';
interface SurveyPageProps {
  memberId: string;
  healthxPayload: string;
}

const Component: any = (props: any) => {
  const { data, error } = useQuery(PersonQueries.getPersonId, {
    variables: { arg1: 1234 },
  });

  if (error) {
    // TO-DO: Finalize error message
    throw new Error('Error: failed to retrieve data from Apollo.');
  }

  return (
    <div>
      {data}
    </div>
  );
};

export default Component;
