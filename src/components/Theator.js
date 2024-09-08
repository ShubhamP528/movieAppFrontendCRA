import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoGrid from "./VideoGrid";
import SearchBar from "./SearchBar";
import SimarUI from "./SimarUI";

const Theator = () => {
  const [YtData, setYtData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("hindi song");
  const [pageToken, setPageToken] = useState(""); // Track the current page token
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true); // Initially set loading to true
  const [fetchingMore, setFetchingMore] = useState(false); // Track whether more videos are being fetched

  useEffect(() => {
    fetchVideos();
  }, [searchQuery]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop !==
  //     document.documentElement.offsetHeight
  //   )
  //     return;
  //   if (!fetchingMore) {
  //     setFetchingMore(true);
  //   }
  // };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      // Adjust the threshold as needed
      if (!fetchingMore) {
        setFetchingMore(true);
      }
    }
  };

  useEffect(() => {
    if (fetchingMore) {
      fetchMoreVideos();
    }
  }, [fetchingMore]);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&pageToken=${pageToken}&q=${searchQuery} song&key=AIzaSyDptw29QDvr3hBZxpnMOTUO-RPPQiGL0NQ`
      );
      setYtData(response.data.items);
      setTotalResults(response.data.pageInfo.totalResults);
      setPageToken(response.data.nextPageToken);
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMoreVideos = async () => {
    try {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&pageToken=${pageToken}&q=${searchQuery} song&key=AIzaSyBwMshSAOyLsJ27wBd7A0RnsdkRIIhPTW0`
      );
      setYtData((prevData) => [...prevData, ...response.data.items]);
      setPageToken(response.data.nextPageToken);
    } catch (error) {
      console.error("Error fetching more videos:", error);
    } finally {
      setFetchingMore(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">
        YouTube Video Gallery
      </h1>
      <SearchBar onSearch={setSearchQuery} />

      <div className="mt-5 flex justify-center">
        {loading ? <SimarUI /> : <VideoGrid videos={YtData} />}
        {/* <SimarUI /> */}
      </div>
    </div>
  );
};

export default Theator;
