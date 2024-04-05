import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const fetchImg = async () => {
      try {
        const res = await axios.get(
          "https://api.unsplash.com/search/photos?page=1&query=landscape&per_page=1000&client_id=mSay9SiXVoaaagg6LZOIDKavf_SDqxRBtQngUHs-Q0I"
        );
        setPhotos(
          res.data.results.filter((photo) => photo.user && photo.user.location)
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchImg();
  }, []);
  return photos;
};
export default useFetch;
