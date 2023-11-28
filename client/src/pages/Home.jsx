import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  const BASE_URL = "https://youtube138.p.rapidapi.com";

  const options = {
    params: {
      hl: "en",
      gl: "US",
    },
    headers: {
      "X-RapidAPI-Key": "b0122970b6mshc97e64ce23a37c3p115985jsncb05acd8e746",
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchVideos = async () => {
      const { res } = await axios.get(
        "https://youtube138.p.rapidapi.com/home",
        options
      );
      console.log(res);
      setVideos(res.data);
    };
    fetchVideos();
  });

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
