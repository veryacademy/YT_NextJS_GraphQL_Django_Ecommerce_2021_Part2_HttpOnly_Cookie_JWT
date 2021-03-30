import { gql } from "@apollo/client";

export const loginMutation = gql`
mutation tokenAuth($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    token
    payload
  }
}
`

export const userDetails = gql`
  query{
    userDetails{
      id
      username
      email
    }
  }
`

export const allCatQuery = gql`
  query Categories{
    allCategories{
      id
      name
      slug
    }
  }
`

export const allProductQuery = gql`
  query all_Products{
    allProducts {
      title
      description
      regularPrice
      slug
        productImage{
          id
          image
          altText
      }
    }
  }
`

export const singleProductQuery = gql`
  query ($slug: String!){
    allProductsByName(slug: $slug){
      title
        description
        regularPrice
          productImage {
            id
            image
            altText
        }
    }
  }
`

export const productsByCategory = gql`
query ($name: String!){
  categoryByName(name:$name){
    id
    category{
      id
      title
      slug
      description
      regularPrice
        productImage {
          id
          image
          altText
      }
    }
  }
}
`