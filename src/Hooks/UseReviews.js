import { useEffect, useState } from "react"

const useReviews = () => {
    const [review , setReview] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReview(data));
    },[])

    return [review , setReview];
}

export default useReviews;