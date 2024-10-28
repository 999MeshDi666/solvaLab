import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Characters } from "../types/characters";

const charactersApi: any = createApi({
  reducerPath: "charactersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  refetchOnMountOrArgChange: true,
  tagTypes: ["characters"],
  endpoints: (builder) => ({
    getCharacters: builder.query<Characters, { page: string }>({
      query: ({ page }) => {
        return `people/?page=${page}`;
      },
    }),
  }),
});
export const { useGetCharactersQuery } = charactersApi;
export default charactersApi;
