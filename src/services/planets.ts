import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Planets } from "../types/planets";

const planetsApi: any = createApi({
  reducerPath: "planetsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  refetchOnMountOrArgChange: true,
  tagTypes: ["planets"],
  endpoints: (builder) => ({
    getPlanets: builder.query<Planets, Planets>({
      query: () => {
        return `planets`;
      },
    }),
  }),
});
export const { useGetPlanetsQuery } = planetsApi;
export default planetsApi;
