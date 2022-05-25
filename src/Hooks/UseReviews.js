import { useEffect, useState } from "react"

const useReviews = () => {
    const [review , setReview] = useState([]);
    useEffect(()=>{
        fetch('https://cryptic-retreat-01074.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReview(data));
    },[])

    return [review , setReview];
}

export default useReviews;