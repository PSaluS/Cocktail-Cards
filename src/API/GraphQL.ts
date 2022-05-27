import { gql} from '@apollo/client';

export const ADD_COCKTAIL = gql`
mutation ADD_Cocktail(
  $title: String!
  $elements: Json!
  $content: String!
  $imgId: ID!
  $build: Build!
  $ice: Ice!
  $author: String
) {
  createCocktailCards(
    data: {
      title: $title
      elements: $elements
      content: $content
      img: { connect: { id: $imgId } }
      build: $build
      ice: $ice
      author: $author
    }
  ) {
    id
    title
  }
}
`;

export const QUERY = gql`
{
  cocktailCardsID {
    author
    build
    content
    elements
    ice
    id
    img {
      url
    }
    title
  }
}
`;

export  const ID_QUERY = gql`
query IdQuery($fileName: String!, $fileSize: Float) {
  assets(where: { fileName: $fileName, size: $fileSize }, stage: DRAFT) {
    id
  }
}
`;

