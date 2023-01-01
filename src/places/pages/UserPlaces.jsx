import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const PLACES = [
  {
    id: "p1",
    title: "Empire state building",
    description: "One of the most famous sky scrappers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/280px-Empire_State_Building_%28aerial_view%29.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    creator: "u1",
    location: {
      lat: 40.7484445,
      lng: -73.9878531,
    },
  },
  {
    id: "p2",
    title: "Empire state building",
    description: "One of the most famous sky scrappers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/280px-Empire_State_Building_%28aerial_view%29.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    creator: "u2",
    location: {
      lat: "40.7484445",
      lng: "-73.9878531",
    },
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
