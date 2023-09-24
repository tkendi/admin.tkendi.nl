import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthAllUserDto = {
  __typename?: 'AuthAllUserDto';
  email: Scalars['String'];
  userName: Scalars['String'];
};

export type AuthDeleteDto = {
  __typename?: 'AuthDeleteDto';
  success: Scalars['Boolean'];
};

export type AuthDeleteUserInput = {
  userName: Scalars['String'];
};

export type AuthSignInDto = {
  __typename?: 'AuthSignInDto';
  accessMaxAge: Scalars['String'];
  accessToken: Scalars['String'];
  refreshMaxAge: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type AuthSignInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type AuthSignUpDto = {
  __typename?: 'AuthSignUpDto';
  accessMaxAge: Scalars['String'];
  accessToken: Scalars['String'];
  refreshMaxAge: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type AuthSignUpInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  userName: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _root: Scalars['Boolean'];
  deleteUser: AuthDeleteDto;
  refresh: AuthSignInDto;
  signInUser: AuthSignInDto;
  signUpUser: AuthSignUpDto;
};


export type MutationDeleteUserArgs = {
  deleteUserInput: AuthDeleteUserInput;
};


export type MutationSignInUserArgs = {
  input: AuthSignInInput;
};


export type MutationSignUpUserArgs = {
  input: AuthSignUpInput;
};

export type Query = {
  __typename?: 'Query';
  findAllUser: Array<AuthAllUserDto>;
  root: Scalars['Boolean'];
};

export type SignInUserMutationVariables = Exact<{
  input: AuthSignInInput;
}>;


export type SignInUserMutation = { __typename?: 'Mutation', signInUser: { __typename?: 'AuthSignInDto', accessToken: string, refreshToken: string, accessMaxAge: string, refreshMaxAge: string } };

export type SignUpUserMutationVariables = Exact<{
  input: AuthSignUpInput;
}>;


export type SignUpUserMutation = { __typename?: 'Mutation', signUpUser: { __typename?: 'AuthSignUpDto', accessToken: string, refreshToken: string, accessMaxAge: string, refreshMaxAge: string } };

export type FindAllUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllUserQuery = { __typename?: 'Query', findAllUser: Array<{ __typename?: 'AuthAllUserDto', email: string, userName: string }> };


export const SignInUserDocument = gql`
    mutation SignInUser($input: AuthSignInInput!) {
  signInUser(input: $input) {
    accessToken
    refreshToken
    accessMaxAge
    refreshMaxAge
  }
}
    `;
export type SignInUserMutationFn = Apollo.MutationFunction<SignInUserMutation, SignInUserMutationVariables>;

/**
 * __useSignInUserMutation__
 *
 * To run a mutation, you first call `useSignInUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInUserMutation, { data, loading, error }] = useSignInUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignInUserMutation(baseOptions?: Apollo.MutationHookOptions<SignInUserMutation, SignInUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInUserMutation, SignInUserMutationVariables>(SignInUserDocument, options);
      }
export type SignInUserMutationHookResult = ReturnType<typeof useSignInUserMutation>;
export type SignInUserMutationResult = Apollo.MutationResult<SignInUserMutation>;
export type SignInUserMutationOptions = Apollo.BaseMutationOptions<SignInUserMutation, SignInUserMutationVariables>;
export const SignUpUserDocument = gql`
    mutation SignUpUser($input: AuthSignUpInput!) {
  signUpUser(input: $input) {
    accessToken
    refreshToken
    accessMaxAge
    refreshMaxAge
  }
}
    `;
export type SignUpUserMutationFn = Apollo.MutationFunction<SignUpUserMutation, SignUpUserMutationVariables>;

/**
 * __useSignUpUserMutation__
 *
 * To run a mutation, you first call `useSignUpUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpUserMutation, { data, loading, error }] = useSignUpUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignUpUserMutation(baseOptions?: Apollo.MutationHookOptions<SignUpUserMutation, SignUpUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpUserMutation, SignUpUserMutationVariables>(SignUpUserDocument, options);
      }
export type SignUpUserMutationHookResult = ReturnType<typeof useSignUpUserMutation>;
export type SignUpUserMutationResult = Apollo.MutationResult<SignUpUserMutation>;
export type SignUpUserMutationOptions = Apollo.BaseMutationOptions<SignUpUserMutation, SignUpUserMutationVariables>;
export const FindAllUserDocument = gql`
    query FindAllUser {
  findAllUser {
    email
    userName
  }
}
    `;

/**
 * __useFindAllUserQuery__
 *
 * To run a query within a React component, call `useFindAllUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllUserQuery(baseOptions?: Apollo.QueryHookOptions<FindAllUserQuery, FindAllUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllUserQuery, FindAllUserQueryVariables>(FindAllUserDocument, options);
      }
export function useFindAllUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllUserQuery, FindAllUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllUserQuery, FindAllUserQueryVariables>(FindAllUserDocument, options);
        }
export type FindAllUserQueryHookResult = ReturnType<typeof useFindAllUserQuery>;
export type FindAllUserLazyQueryHookResult = ReturnType<typeof useFindAllUserLazyQuery>;
export type FindAllUserQueryResult = Apollo.QueryResult<FindAllUserQuery, FindAllUserQueryVariables>;