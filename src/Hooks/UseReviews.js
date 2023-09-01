import { useEffect, useState } from "react";

const useReviews = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://computer-mart2.onrender.com/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return [review, setReview];
};

export default useReviews;
