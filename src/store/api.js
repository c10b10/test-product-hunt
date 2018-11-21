import { normalize, schema as normalizrSchema } from "normalizr";
import { pickBy } from "lodash";
import queryString from "query-string";

export const API_ROOT = "https://api.producthunt.com/v1/";

// Helper function that allows error management with async / await
export default function to(promise) {
  return promise
    .then(data => {
      return data.status === 401 ? ["Unauthorized", data] : [null, data];
    })
    .catch(err => [err]);
}

export const callApi = async (
  endpoint: string,
  { payload, schema, method = "GET", meta }
) => {
  const request = Object.assign(
    {
      method,
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${
          process.env.REACT_APP_PRODUCT_HUNT_ACESS_TOKEN
        }`,
        Host: "api.producthunt.com"
      })
    },
    // If we're deleting, use the payload as a way to pass
    // the resource ID to the reducer
    typeof (payload !== "undefined") ? { body: JSON.stringify(payload) } : {}
  );

  const endpointUrl =
    endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint;

  const [error, response] = await to(fetch(endpointUrl, request));
  if (error) {
    return {
      error: error,
      meta
    };
  }

  const remaining = response.headers.get("X-Rate-Limit-Remaining");
  const [_, result] = await to(response.json());
  // https://api.producthunt.com/v1/docs/posts/posts_all_paginate_with_offset_(slower)
  return {
    result: normalize(
      result.posts.map(post => {
        const thumb = post.thumbnail.image_url.split("?");
        thumb[1] = queryString.stringify(
          {
            ...queryString.parse(thumb[1]),
            w: 80,
            h: 80
          },
          { strict: false, encode: false, sort: false }
        );
        return {
          id: post.id,
          name: post.name,
          date: post.day,
          tagline: post.tagline,
          url: post.discussion_url,
          thumbnail: thumb.join("?"),
          user: post.user.name
        };
      }),
      schema
    ),
    meta: {
      ...meta,
      remaining: remaining ? +remaining : 0
    }
  };
};

// Normalizr schemas
const productSchema = new normalizrSchema.Entity("products");
export const schemas = {
  PRODUCTS: new normalizrSchema.Array(productSchema)
};

// Appends the endpoint with custom params
export const buildEndpoint = (endpoint: string, params: object) => {
  const cleanParams = pickBy(params, p => p);
  Object.keys(cleanParams).forEach(key => {
    endpoint += `&${key}=${cleanParams[key]}`;
  });
  return endpoint;
};
