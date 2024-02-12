import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const DestinationApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/" }),
  endpoints: (builder) => ({
    //QUERY --> GET REQUESTS
    //MUTATION --> POST/PUT/DELETE REQUESTS
    getAllDestination: builder.query({
      query: () => "destination",
    }),
  }),
});

export const { useGetAllDestinationQuery } = DestinationApi;
