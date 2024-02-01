/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetProduct {\n  pageProductCollection(order: name_DESC) {\n    items {\n      sys {\n        id\n      }\n      name\n      price\n      description\n    }\n  }\n}": types.GetProductDocument,
    "query GetProductsTotal {\n  pageProductCollection {\n    total\n  }\n}": types.GetProductsTotalDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProduct {\n  pageProductCollection(order: name_DESC) {\n    items {\n      sys {\n        id\n      }\n      name\n      price\n      description\n    }\n  }\n}"): typeof import('./graphql').GetProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductsTotal {\n  pageProductCollection {\n    total\n  }\n}"): typeof import('./graphql').GetProductsTotalDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
