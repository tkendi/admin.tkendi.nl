import NextAuth from 'next-auth/next';
import CredentialProvider from 'next-auth/providers/credentials';

import { initializeApollo } from '@/gql/apollo';
import {
  SignInUserDocument,
  SignInUserMutation,
  SignInUserMutationVariables,
} from '@/gql/auth.generated';

const apolloClient = initializeApollo();

export default NextAuth({
  providers: [
    CredentialProvider({
      id: 'email-password-credentials',
      name: 'Credentials',
      type: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'accounts@email.com',
        },
        password: {
          label: 'password',
          type: 'password',
        },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        if (!credentials) return null;

        const { data: loginData, errors } = await apolloClient.mutate<
          SignInUserMutation,
          SignInUserMutationVariables
        >({
          mutation: SignInUserDocument,
          variables: {
            input: {
              email: credentials.email,
              password: credentials.password,
            },
          },
          errorPolicy: 'all',
        });

        // TODO:: error boundary processing required
        // authenticate
        const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' };
        if (loginData?.signInUser) {
          return {
            ...loginData?.signInUser,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
});
