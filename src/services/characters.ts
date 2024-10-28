import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Characters } from "../types/characters";

const charactersApi: any = createApi({
  reducerPath: "charactersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  refetchOnMountOrArgChange: true,
  tagTypes: ["characters"],
  endpoints: (builder) => ({
    getCharacters: builder.query<Characters, Characters>({
      query: () => {
        return `people`;
      },
    }),
  }),
});
export const { useGetCharactersQuery } = charactersApi;
export default charactersApi;
