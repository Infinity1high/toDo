import gql from 'graphql-tag';

export default gql`
{
  todos {
    title,
    id
  }
}
`;

