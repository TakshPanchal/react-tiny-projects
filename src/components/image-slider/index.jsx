import { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import "./styles.css";

const ImageSlider = ({ url, page = 1, limit = 5 }) => {
  const [images, setImages] = useState([]);
  const [currImg, setCurrImg] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const resp = await fetch(`${url}/list?page=${page}&limit=${limit}`);
      const imgs = await resp.json();
      // TODO: Check for imgs here
      if (imgs.length == 0) throw new Error("No images extracted ");
      setImages(imgs);
    } catch (err) {
      console.log(err);
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url.length === 0) {
      setErrorMessage("URL is empty");
    } else {
      fetchImages();
    }
  }, [url]);

  const handleLeftArrow = () => {
    if (currImg == 0) return;
    setCurrImg(currImg - 1);
  };
  const handleRightArrow = () => {
    if (currImg == images.length - 1) return;
    setCurrImg(currImg + 1);
  };

  if (errorMessage.length != 0) return <p>{errorMessage}</p>;
  if (loading) return <p>Loading.....</p>;
  return (
    <div className="slider">
      <img src={images[currImg].download_url} loading="lazy" />
      <FaArrowCircleLeft
        className="left-arrow arrow"
        onClick={handleLeftArrow}
        color={currImg == 0 ? "#EBEBE4" : "#000"}
      />
      <FaArrowAltCircleRight
        className="right-arrow arrow"
        onClick={handleRightArrow}
      />
    </div>
  );
};

export default ImageSlider;
