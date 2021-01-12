import { gql } from '@apollo/client';

const getPersonId = gql`
  query getPersonId($arg1: String, $arg2: String) {
    personIdExchange(arg1: $arg1, arg2: $arg2) {
      personId
    }
  }
`;

export default {
  getPersonId,
};
