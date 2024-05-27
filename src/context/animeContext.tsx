"use client";

import { getAnimesData } from "@/services";
import React, { createContext, useReducer, useEffect, useState } from "react";

const initialState = {
  data: [],
  loading: true,
  error: null,
  nextPage: 2,
  hasNextPage: false,
  loadMore: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loadMore: action?.payload?.loadMore, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        data:
          state.hasNextPage && state.loadMore
            ? [...state.data, ...action.payload.data?.Page.media]
            : action.payload.data.Page?.media,
        hasNextPage: action.payload.data.Page?.pageInfo.hasNextPage,
        nextPage: action.payload.data.Page?.pageInfo.currentPage + 1,
        loadMore: state.loadMore,
        loading: false,
      };
    case "FETCH_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

// Cria o contexto
export const AnimeContext = createContext(initialState);

export const AnimeProvider = ({ children }) => {
  const initialSearch = { perPage: 12, currentPage: 1 };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchTerms, setSearchTerms] = useState(initialSearch);

  // Função para fazer a requisição GET
  const fetchAllData = async (loadMore: boolean, search = {}) => {
    const moreData = !loadMore
      ? {
          ...initialSearch,
          ...search,
        }
      : {
          ...initialSearch,
          ...search,
          page: state.nextPage,
        };
    try {
      dispatch({ type: "FETCH_REQUEST", payload: { loadMore: loadMore } });
      const response = await getAnimesData(moreData);
      const result = await response.json();
      dispatch({ type: "FETCH_SUCCESS", payload: result });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };

  // Faz a requisição quando o componente monta
  useEffect(() => {
    fetchAllData(false, { format: "TV" });
  }, [fetchAllData]);

  useEffect(() => {
    if (searchTerms.format !== "ALL") {
      fetchAllData(false, searchTerms);
    } else {
      fetchAllData(false);
    }
  }, [searchTerms, fetchAllData]);

  return (
    <AnimeContext.Provider
      value={{
        state,
        dispatch,
        setSearchTerms,
        searchTerms,
        initialSearch,
        fetchAllData,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};
