// @ts-nocheck
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  addCategory: Category;
  addCoupon: Coupon;
  addProduct: Product;
  createOrder: Order;
  deleteUser: User;
  editProduct: Product;
  login: User;
  removeProduct: Product;
  signIn: User;
};


export type MutationAddCategoryArgs = {
  input: CategoryInput;
};


export type MutationAddCouponArgs = {
  input: CouponInput;
};


export type MutationAddProductArgs = {
  input: ProductInfo;
};


export type MutationCreateOrderArgs = {
  input: OrderInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEditProductArgs = {
  input: EditProduct;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRemoveProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSignInArgs = {
  input: UserInput;
};

export type PriceType = {
  __typename?: 'PriceType';
  large: Scalars['Int']['output'];
  meduim: Scalars['Int']['output'];
  small: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  getCategory?: Maybe<Array<Category>>;
  getMyOrders: Order;
  getOneProduct: Product;
  getOrders?: Maybe<Array<Order>>;
  getProduct: Array<Product>;
  getProductCategory: Category;
  getUser: User;
};


export type QueryGetMyOrdersArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetOneProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetProductCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID']['input'];
};

export type Category = {
  __typename?: 'category';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CategoryInput = {
  name: Scalars['String']['input'];
};

export type Coupon = {
  __typename?: 'coupon';
  code: Scalars['String']['output'];
  discount: Scalars['String']['output'];
  expirationDate: Scalars['Date']['output'];
};

export type CouponInput = {
  code: Scalars['String']['input'];
  discount: Scalars['String']['input'];
  expirationDate: Scalars['Date']['input'];
};

export type EditProduct = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: PriceInputType;
  productId: Scalars['ID']['input'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Order = {
  __typename?: 'order';
  couponCode: Scalars['String']['output'];
  deliveryLocation: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  orderedAt: Scalars['Date']['output'];
  product: Array<Maybe<OrderProductinfo>>;
  status: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type OrderInput = {
  couponCode: Scalars['String']['input'];
  deliveryLocation: Scalars['String']['input'];
  product?: InputMaybe<Array<InputMaybe<ProductInfoInput>>>;
  userId: Scalars['String']['input'];
};

export type OrderProductinfo = {
  __typename?: 'orderProductinfo';
  ingridient: Scalars['String']['output'];
  ingridientAmount: Scalars['Int']['output'];
  price: Scalars['Int']['output'];
  productId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  size: Scalars['String']['output'];
};

export type PaymentType = {
  __typename?: 'paymentType';
  cardHolder?: Maybe<Scalars['String']['output']>;
  cardNumber?: Maybe<Scalars['String']['output']>;
  cvv?: Maybe<Scalars['String']['output']>;
  experitionDate?: Maybe<Scalars['String']['output']>;
};

export type PriceInputType = {
  large: Scalars['Int']['input'];
  meduim: Scalars['Int']['input'];
  small: Scalars['Int']['input'];
};

export type Product = {
  __typename?: 'product';
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price?: Maybe<PriceType>;
};

export type ProductInfo = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: PriceInputType;
};

export type ProductInfoInput = {
  ingridient: Scalars['String']['input'];
  ingridientAmount: Scalars['Int']['input'];
  price: Scalars['Int']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  size: Scalars['String']['input'];
};

export type User = {
  __typename?: 'user';
  address?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  favorite: Array<Maybe<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  paymentinfo?: Maybe<PaymentType>;
  profilePic?: Maybe<Scalars['String']['output']>;
};

export type UserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type GetMyOrdersQueryVariables = Exact<{
  getMyOrdersId: Scalars['ID']['input'];
}>;


export type GetMyOrdersQuery = { __typename?: 'Query', getMyOrders: { __typename?: 'order', id: string, userId: string, deliveryLocation: string, status: string, couponCode: string, orderedAt: any, product: Array<{ __typename?: 'orderProductinfo', productId: string, ingridient: string, size: string, price: number, quantity: number, ingridientAmount: number } | null> } };

export type GetProductQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductQuery = { __typename?: 'Query', getProduct: Array<{ __typename?: 'product', id: string, name: string, category: string, image: string, description: string, price?: { __typename?: 'PriceType', small: number, meduim: number, large: number } | null }> };

export type GetOneProductQueryVariables = Exact<{
  getOneProductId: Scalars['ID']['input'];
}>;


export type GetOneProductQuery = { __typename?: 'Query', getOneProduct: { __typename?: 'product', id: string, name: string, category: string, image: string, description: string, price?: { __typename?: 'PriceType', small: number, meduim: number, large: number } | null } };

export type GetUserQueryVariables = Exact<{
  getUserId: Scalars['ID']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'user', id: string, name: string, email: string, password: string, favorite: Array<string | null>, profilePic?: string | null, address?: string | null, paymentinfo?: { __typename?: 'paymentType', cardHolder?: string | null, cardNumber?: string | null, experitionDate?: string | null, cvv?: string | null } | null } };

export type GetCatgeoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCatgeoryQuery = { __typename?: 'Query', getCategory?: Array<{ __typename?: 'category', id: string, name: string }> | null };

export type GetOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOrdersQuery = { __typename?: 'Query', getOrders?: Array<{ __typename?: 'order', id: string, userId: string, deliveryLocation: string, status: string, couponCode: string, orderedAt: any, product: Array<{ __typename?: 'orderProductinfo', productId: string, ingridient: string, size: string, price: number, quantity: number, ingridientAmount: number } | null> }> | null };

export type AddCategoryMutationVariables = Exact<{
  input: CategoryInput;
}>;


export type AddCategoryMutation = { __typename?: 'Mutation', addCategory: { __typename?: 'category', id: string, name: string } };

export type AddCouponMutationVariables = Exact<{
  input: CouponInput;
}>;


export type AddCouponMutation = { __typename?: 'Mutation', addCoupon: { __typename?: 'coupon', code: string, discount: string, expirationDate: any } };

export type AddProductMutationVariables = Exact<{
  input: ProductInfo;
}>;


export type AddProductMutation = { __typename?: 'Mutation', addProduct: { __typename?: 'product', id: string, name: string, category: string, image: string, description: string, price?: { __typename?: 'PriceType', small: number, meduim: number, large: number } | null } };

export type RemoveProductMutationVariables = Exact<{
  removeProductId: Scalars['ID']['input'];
}>;


export type RemoveProductMutation = { __typename?: 'Mutation', removeProduct: { __typename?: 'product', id: string, name: string, category: string, image: string, description: string, price?: { __typename?: 'PriceType', small: number, meduim: number, large: number } | null } };

export type EditProductMutationVariables = Exact<{
  input: EditProduct;
}>;


export type EditProductMutation = { __typename?: 'Mutation', editProduct: { __typename?: 'product', id: string, name: string, category: string, image: string, description: string, price?: { __typename?: 'PriceType', large: number, meduim: number, small: number } | null } };


export const GetMyOrdersDocument = gql`
    query GetMyOrders($getMyOrdersId: ID!) {
  getMyOrders(id: $getMyOrdersId) {
    id
    userId
    product {
      productId
      ingridient
      size
      price
      quantity
      ingridientAmount
    }
    deliveryLocation
    status
    couponCode
    orderedAt
  }
}
    `;
export type GetMyOrdersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetMyOrdersQuery, GetMyOrdersQueryVariables>
    } & TChildProps;
export function withGetMyOrders<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetMyOrdersQuery,
  GetMyOrdersQueryVariables,
  GetMyOrdersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetMyOrdersQuery, GetMyOrdersQueryVariables, GetMyOrdersProps<TChildProps, TDataName>>(GetMyOrdersDocument, {
      alias: 'getMyOrders',
      ...operationOptions
    });
};

/**
 * __useGetMyOrdersQuery__
 *
 * To run a query within a React component, call `useGetMyOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyOrdersQuery({
 *   variables: {
 *      getMyOrdersId: // value for 'getMyOrdersId'
 *   },
 * });
 */
export function useGetMyOrdersQuery(baseOptions: Apollo.QueryHookOptions<GetMyOrdersQuery, GetMyOrdersQueryVariables> & ({ variables: GetMyOrdersQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyOrdersQuery, GetMyOrdersQueryVariables>(GetMyOrdersDocument, options);
      }
export function useGetMyOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyOrdersQuery, GetMyOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyOrdersQuery, GetMyOrdersQueryVariables>(GetMyOrdersDocument, options);
        }
export function useGetMyOrdersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMyOrdersQuery, GetMyOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMyOrdersQuery, GetMyOrdersQueryVariables>(GetMyOrdersDocument, options);
        }
export type GetMyOrdersQueryHookResult = ReturnType<typeof useGetMyOrdersQuery>;
export type GetMyOrdersLazyQueryHookResult = ReturnType<typeof useGetMyOrdersLazyQuery>;
export type GetMyOrdersSuspenseQueryHookResult = ReturnType<typeof useGetMyOrdersSuspenseQuery>;
export type GetMyOrdersQueryResult = Apollo.QueryResult<GetMyOrdersQuery, GetMyOrdersQueryVariables>;
export const GetProductDocument = gql`
    query GetProduct {
  getProduct {
    id
    name
    price {
      small
      meduim
      large
    }
    category
    image
    description
  }
}
    `;
export type GetProductProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetProductQuery, GetProductQueryVariables>
    } & TChildProps;
export function withGetProduct<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetProductQuery,
  GetProductQueryVariables,
  GetProductProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetProductQuery, GetProductQueryVariables, GetProductProps<TChildProps, TDataName>>(GetProductDocument, {
      alias: 'getProduct',
      ...operationOptions
    });
};

/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductQuery(baseOptions?: Apollo.QueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
      }
export function useGetProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
        }
export function useGetProductSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
        }
export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>;
export type GetProductLazyQueryHookResult = ReturnType<typeof useGetProductLazyQuery>;
export type GetProductSuspenseQueryHookResult = ReturnType<typeof useGetProductSuspenseQuery>;
export type GetProductQueryResult = Apollo.QueryResult<GetProductQuery, GetProductQueryVariables>;
export const GetOneProductDocument = gql`
    query GetOneProduct($getOneProductId: ID!) {
  getOneProduct(id: $getOneProductId) {
    id
    name
    price {
      small
      meduim
      large
    }
    category
    image
    description
  }
}
    `;
export type GetOneProductProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOneProductQuery, GetOneProductQueryVariables>
    } & TChildProps;
export function withGetOneProduct<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOneProductQuery,
  GetOneProductQueryVariables,
  GetOneProductProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOneProductQuery, GetOneProductQueryVariables, GetOneProductProps<TChildProps, TDataName>>(GetOneProductDocument, {
      alias: 'getOneProduct',
      ...operationOptions
    });
};

/**
 * __useGetOneProductQuery__
 *
 * To run a query within a React component, call `useGetOneProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneProductQuery({
 *   variables: {
 *      getOneProductId: // value for 'getOneProductId'
 *   },
 * });
 */
export function useGetOneProductQuery(baseOptions: Apollo.QueryHookOptions<GetOneProductQuery, GetOneProductQueryVariables> & ({ variables: GetOneProductQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneProductQuery, GetOneProductQueryVariables>(GetOneProductDocument, options);
      }
export function useGetOneProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneProductQuery, GetOneProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneProductQuery, GetOneProductQueryVariables>(GetOneProductDocument, options);
        }
export function useGetOneProductSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetOneProductQuery, GetOneProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOneProductQuery, GetOneProductQueryVariables>(GetOneProductDocument, options);
        }
export type GetOneProductQueryHookResult = ReturnType<typeof useGetOneProductQuery>;
export type GetOneProductLazyQueryHookResult = ReturnType<typeof useGetOneProductLazyQuery>;
export type GetOneProductSuspenseQueryHookResult = ReturnType<typeof useGetOneProductSuspenseQuery>;
export type GetOneProductQueryResult = Apollo.QueryResult<GetOneProductQuery, GetOneProductQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($getUserId: ID!) {
  getUser(id: $getUserId) {
    id
    name
    email
    password
    favorite
    profilePic
    address
    paymentinfo {
      cardHolder
      cardNumber
      experitionDate
      cvv
    }
  }
}
    `;
export type GetUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetUserQuery, GetUserQueryVariables>
    } & TChildProps;
export function withGetUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUserQuery,
  GetUserQueryVariables,
  GetUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetUserQuery, GetUserQueryVariables, GetUserProps<TChildProps, TDataName>>(GetUserDocument, {
      alias: 'getUser',
      ...operationOptions
    });
};

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      getUserId: // value for 'getUserId'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables> & ({ variables: GetUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetCatgeoryDocument = gql`
    query GetCatgeory {
  getCategory {
    id
    name
  }
}
    `;
export type GetCatgeoryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetCatgeoryQuery, GetCatgeoryQueryVariables>
    } & TChildProps;
export function withGetCatgeory<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetCatgeoryQuery,
  GetCatgeoryQueryVariables,
  GetCatgeoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetCatgeoryQuery, GetCatgeoryQueryVariables, GetCatgeoryProps<TChildProps, TDataName>>(GetCatgeoryDocument, {
      alias: 'getCatgeory',
      ...operationOptions
    });
};

/**
 * __useGetCatgeoryQuery__
 *
 * To run a query within a React component, call `useGetCatgeoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCatgeoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCatgeoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCatgeoryQuery(baseOptions?: Apollo.QueryHookOptions<GetCatgeoryQuery, GetCatgeoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCatgeoryQuery, GetCatgeoryQueryVariables>(GetCatgeoryDocument, options);
      }
export function useGetCatgeoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCatgeoryQuery, GetCatgeoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCatgeoryQuery, GetCatgeoryQueryVariables>(GetCatgeoryDocument, options);
        }
export function useGetCatgeorySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCatgeoryQuery, GetCatgeoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCatgeoryQuery, GetCatgeoryQueryVariables>(GetCatgeoryDocument, options);
        }
export type GetCatgeoryQueryHookResult = ReturnType<typeof useGetCatgeoryQuery>;
export type GetCatgeoryLazyQueryHookResult = ReturnType<typeof useGetCatgeoryLazyQuery>;
export type GetCatgeorySuspenseQueryHookResult = ReturnType<typeof useGetCatgeorySuspenseQuery>;
export type GetCatgeoryQueryResult = Apollo.QueryResult<GetCatgeoryQuery, GetCatgeoryQueryVariables>;
export const GetOrdersDocument = gql`
    query GetOrders {
  getOrders {
    id
    userId
    product {
      productId
      ingridient
      size
      price
      quantity
      ingridientAmount
    }
    deliveryLocation
    status
    couponCode
    orderedAt
  }
}
    `;
export type GetOrdersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOrdersQuery, GetOrdersQueryVariables>
    } & TChildProps;
export function withGetOrders<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOrdersQuery,
  GetOrdersQueryVariables,
  GetOrdersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOrdersQuery, GetOrdersQueryVariables, GetOrdersProps<TChildProps, TDataName>>(GetOrdersDocument, {
      alias: 'getOrders',
      ...operationOptions
    });
};

/**
 * __useGetOrdersQuery__
 *
 * To run a query within a React component, call `useGetOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOrdersQuery(baseOptions?: Apollo.QueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
      }
export function useGetOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
        }
export function useGetOrdersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
        }
export type GetOrdersQueryHookResult = ReturnType<typeof useGetOrdersQuery>;
export type GetOrdersLazyQueryHookResult = ReturnType<typeof useGetOrdersLazyQuery>;
export type GetOrdersSuspenseQueryHookResult = ReturnType<typeof useGetOrdersSuspenseQuery>;
export type GetOrdersQueryResult = Apollo.QueryResult<GetOrdersQuery, GetOrdersQueryVariables>;
export const AddCategoryDocument = gql`
    mutation addCategory($input: categoryInput!) {
  addCategory(input: $input) {
    id
    name
  }
}
    `;
export type AddCategoryMutationFn = Apollo.MutationFunction<AddCategoryMutation, AddCategoryMutationVariables>;
export type AddCategoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<AddCategoryMutation, AddCategoryMutationVariables>
    } & TChildProps;
export function withAddCategory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddCategoryMutation,
  AddCategoryMutationVariables,
  AddCategoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddCategoryMutation, AddCategoryMutationVariables, AddCategoryProps<TChildProps, TDataName>>(AddCategoryDocument, {
      alias: 'addCategory',
      ...operationOptions
    });
};

/**
 * __useAddCategoryMutation__
 *
 * To run a mutation, you first call `useAddCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCategoryMutation, { data, loading, error }] = useAddCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddCategoryMutation(baseOptions?: Apollo.MutationHookOptions<AddCategoryMutation, AddCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCategoryMutation, AddCategoryMutationVariables>(AddCategoryDocument, options);
      }
export type AddCategoryMutationHookResult = ReturnType<typeof useAddCategoryMutation>;
export type AddCategoryMutationResult = Apollo.MutationResult<AddCategoryMutation>;
export type AddCategoryMutationOptions = Apollo.BaseMutationOptions<AddCategoryMutation, AddCategoryMutationVariables>;
export const AddCouponDocument = gql`
    mutation addCoupon($input: couponInput!) {
  addCoupon(input: $input) {
    code
    discount
    expirationDate
  }
}
    `;
export type AddCouponMutationFn = Apollo.MutationFunction<AddCouponMutation, AddCouponMutationVariables>;
export type AddCouponProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<AddCouponMutation, AddCouponMutationVariables>
    } & TChildProps;
export function withAddCoupon<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddCouponMutation,
  AddCouponMutationVariables,
  AddCouponProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddCouponMutation, AddCouponMutationVariables, AddCouponProps<TChildProps, TDataName>>(AddCouponDocument, {
      alias: 'addCoupon',
      ...operationOptions
    });
};

/**
 * __useAddCouponMutation__
 *
 * To run a mutation, you first call `useAddCouponMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCouponMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCouponMutation, { data, loading, error }] = useAddCouponMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddCouponMutation(baseOptions?: Apollo.MutationHookOptions<AddCouponMutation, AddCouponMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCouponMutation, AddCouponMutationVariables>(AddCouponDocument, options);
      }
export type AddCouponMutationHookResult = ReturnType<typeof useAddCouponMutation>;
export type AddCouponMutationResult = Apollo.MutationResult<AddCouponMutation>;
export type AddCouponMutationOptions = Apollo.BaseMutationOptions<AddCouponMutation, AddCouponMutationVariables>;
export const AddProductDocument = gql`
    mutation AddProduct($input: productInfo!) {
  addProduct(input: $input) {
    id
    name
    price {
      small
      meduim
      large
    }
    category
    image
    description
  }
}
    `;
export type AddProductMutationFn = Apollo.MutationFunction<AddProductMutation, AddProductMutationVariables>;
export type AddProductProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<AddProductMutation, AddProductMutationVariables>
    } & TChildProps;
export function withAddProduct<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddProductMutation,
  AddProductMutationVariables,
  AddProductProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddProductMutation, AddProductMutationVariables, AddProductProps<TChildProps, TDataName>>(AddProductDocument, {
      alias: 'addProduct',
      ...operationOptions
    });
};

/**
 * __useAddProductMutation__
 *
 * To run a mutation, you first call `useAddProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductMutation, { data, loading, error }] = useAddProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddProductMutation(baseOptions?: Apollo.MutationHookOptions<AddProductMutation, AddProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProductMutation, AddProductMutationVariables>(AddProductDocument, options);
      }
export type AddProductMutationHookResult = ReturnType<typeof useAddProductMutation>;
export type AddProductMutationResult = Apollo.MutationResult<AddProductMutation>;
export type AddProductMutationOptions = Apollo.BaseMutationOptions<AddProductMutation, AddProductMutationVariables>;
export const RemoveProductDocument = gql`
    mutation RemoveProduct($removeProductId: ID!) {
  removeProduct(id: $removeProductId) {
    id
    name
    price {
      small
      meduim
      large
    }
    category
    image
    description
  }
}
    `;
export type RemoveProductMutationFn = Apollo.MutationFunction<RemoveProductMutation, RemoveProductMutationVariables>;
export type RemoveProductProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<RemoveProductMutation, RemoveProductMutationVariables>
    } & TChildProps;
export function withRemoveProduct<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RemoveProductMutation,
  RemoveProductMutationVariables,
  RemoveProductProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, RemoveProductMutation, RemoveProductMutationVariables, RemoveProductProps<TChildProps, TDataName>>(RemoveProductDocument, {
      alias: 'removeProduct',
      ...operationOptions
    });
};

/**
 * __useRemoveProductMutation__
 *
 * To run a mutation, you first call `useRemoveProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProductMutation, { data, loading, error }] = useRemoveProductMutation({
 *   variables: {
 *      removeProductId: // value for 'removeProductId'
 *   },
 * });
 */
export function useRemoveProductMutation(baseOptions?: Apollo.MutationHookOptions<RemoveProductMutation, RemoveProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveProductMutation, RemoveProductMutationVariables>(RemoveProductDocument, options);
      }
export type RemoveProductMutationHookResult = ReturnType<typeof useRemoveProductMutation>;
export type RemoveProductMutationResult = Apollo.MutationResult<RemoveProductMutation>;
export type RemoveProductMutationOptions = Apollo.BaseMutationOptions<RemoveProductMutation, RemoveProductMutationVariables>;
export const EditProductDocument = gql`
    mutation editProduct($input: editProduct!) {
  editProduct(input: $input) {
    id
    name
    price {
      large
      meduim
      small
    }
    category
    image
    description
  }
}
    `;
export type EditProductMutationFn = Apollo.MutationFunction<EditProductMutation, EditProductMutationVariables>;
export type EditProductProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<EditProductMutation, EditProductMutationVariables>
    } & TChildProps;
export function withEditProduct<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditProductMutation,
  EditProductMutationVariables,
  EditProductProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, EditProductMutation, EditProductMutationVariables, EditProductProps<TChildProps, TDataName>>(EditProductDocument, {
      alias: 'editProduct',
      ...operationOptions
    });
};

/**
 * __useEditProductMutation__
 *
 * To run a mutation, you first call `useEditProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editProductMutation, { data, loading, error }] = useEditProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditProductMutation(baseOptions?: Apollo.MutationHookOptions<EditProductMutation, EditProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditProductMutation, EditProductMutationVariables>(EditProductDocument, options);
      }
export type EditProductMutationHookResult = ReturnType<typeof useEditProductMutation>;
export type EditProductMutationResult = Apollo.MutationResult<EditProductMutation>;
export type EditProductMutationOptions = Apollo.BaseMutationOptions<EditProductMutation, EditProductMutationVariables>;