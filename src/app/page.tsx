"use client";
import Image from "next/image";

import CardAnime from "@/components/cardAnime";
import FilterFormatsButton from "@/components/filterFormatsButton";
import MeuFooter from "@/components/footer";
import MeuHeader from "@/components/header";
import { Row } from "@/components/row";
import SeeMoreButton from "@/components/seeMoreButton";
import { AnimeContext } from "@/context";
import { useContext, useEffect, useState } from "react";
import SearchBar from "@/components/searchBar";

export default function Home() {
  const { state, setSearchTerms, searchTerms, initialSearch, fetchAllData } =
    useContext(AnimeContext);
  const { data, loading, error, hasNextPage } = state;

  const [isLoading, setIsLoading] = useState(true);
  const [animeList, setAnimeList] = useState(data ?? []);
  const [formatSearch, setFormatSearch] = useState("ALL");
  const [searchText, setSearchText] = useState("");

  const formatTypes = [
    {
      type: "ALL",
      label: "All Formats",
    },
    {
      type: "TV",
      label: "TV Show",
    },
    {
      type: "TV_SHORT",
      label: "TV Short",
    },
    {
      type: "MOVIE",
      label: "Movie",
    },
    {
      type: "SPECIAL",
      label: "Special",
    },
    {
      type: "OVA",
      label: "OVA",
    },
    {
      type: "ONA",
      label: "ONA",
    },
    {
      type: "MUSIC",
      label: "Music",
    },
  ];

  useEffect(() => {
    setAnimeList(data);
  }, [data]);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  const handleSearchText = () => {
    if (searchText !== "") {
      setSearchTerms({ ...searchTerms, search: searchText });
    } else {
      setSearchTerms({ ...initialSearch, format: formatSearch });
    }
  };

  const handleNewFormatSelected = (format: string) => {
    setSearchTerms({ ...searchTerms, format: format });
    setFormatSearch(format);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchText();
    }
  };

  return (
    <>
      <MeuHeader />
      <main className="flex flex-col items-center">
        <Row isCentered>
          {formatTypes.map((x, index) => (
            <FilterFormatsButton
              key={index}
              label={x.label}
              isSelected={x.type === formatSearch}
              onClick={() => handleNewFormatSelected(x.type)}
            />
          ))}
        </Row>
        <Row hasMargins isCentered>
          <SearchBar
            searchText={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            handleKeyPress={handleKeyPress}
            handleSearchText={handleSearchText}
          />
        </Row>
        <Row isCentered>
          <div className="mx-[25px] w-full xl:w-[1000px] 2xl:w-[1332px]">
            {!isLoading ? (
              <div className="w-full flex flex-wrap">
                {animeList?.map((x, index) => (
                  <CardAnime
                    key={index}
                    label={x.title.english ?? x.title.romaji ?? x.title.native}
                    image={x.coverImage.large}
                    score={x.averageScore}
                    tags={x.genres}
                  />
                ))}
              </div>
            ) : (
              <Row isCentered hasMargins>
                <Image
                  src="/assets/images/loading.gif"
                  width={64}
                  height={64}
                  alt="loading"
                />
              </Row>
            )}
            <SeeMoreButton
              disabled={!hasNextPage}
              onClick={() => {
                fetchAllData(true, searchTerms);
              }}
            />
          </div>
        </Row>
      </main>
      <MeuFooter />
    </>
  );
}
