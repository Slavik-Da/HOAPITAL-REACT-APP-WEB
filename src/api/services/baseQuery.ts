import { gql } from '@apollo/client';

export const GET_ALL_DOCTORS = gql`
  query {
    getAllDoctors {
      id
      name
      specialization
      email
      phoneNumber
    }
  }
`;
