import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const destinationApi = createApi({
  reducerPath: "apiDestination",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/" }),
  tagTypes: ["Destinations"],
  endpoints: (builder) => ({
    //QUERY --> GET REQUESTS
    //MUTATION --> POST/PUT/DELETE REQUESTS
    getAllDestination: builder.query({
      // query: () => "destination",
      // providesTags: ["Destinations"],
      query: (destination) => ({
        url: "destination",
        method: "GET",
        params: {},
      }),
      transformResponse: (res) => res.sort((a, b) => b.id - a.id),
      providesTags: ["Destinations"],
    }),
    // getAllDestination: builder.query({
    //   query: (id) => `destination/${id}`,
    //   providesTags: (id) => {
    //     return [{ type: "Destination", id: id }];
    //   },
    // }),
    addDestination: builder.mutation({
      query: (destination) => ({
        url: "destination",
        method: "POST",
        body: destination,
      }),
      invalidatesTags: ["Destinations"],
    }),
    updateDestination: builder.mutation({
      query: (destination) => ({
        url: `destination/${destination.id}`,
        method: "PUT",
        body: destination,
      }),
      invalidatesTags: ["Destinations"],
    }),
    deleteDestination: builder.mutation({
      query: ({ id }) => ({
        url: `destination/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Destinations"],
    }),
  }),
});

export const {
  useGetAllDestinationQuery,
  useAddDestinationMutation,
  useUpdateDestinationMutation,
  useDeleteDestinationMutation,
} = destinationApi;
