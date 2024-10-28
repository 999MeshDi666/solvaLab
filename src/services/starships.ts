import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Starships } from "../types/starships";

const starshipsApi: any = createApi({
  reducerPath: "starshipsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  refetchOnMountOrArgChange: true,
  tagTypes: ["starships"],
  endpoints: (builder) => ({
    getStarships: builder.query<Starships, Starships>({
      query: () => {
        return `starships`;
      },
    }),
  }),
});
export const { useGetStarshipsQuery } = starshipsApi;
export default starshipsApi;
