import { useEffect, useRef, useState } from 'react';
import data from '../data.json';
export default function ImageCarousel() {
  const ref = useRef(null);
  console.log(ref);
  const [index, setIndex] = useState(0);
  const handleLeft = () => {
    if (index === 0) {
      setIndex(data.length - 1);
    }
    else
      setIndex(index - 1);

  }

  const handleRight = () => {

    setIndex((prevIndex) => {
      if (prevIndex === data.length - 1)
        return 0;
      else
        return prevIndex + 1;
    })
    // if (index === data.length - 1) {
    //   setIndex(0)
    // }
    // else
    //   setIndex(index + 1)
  }

  useEffect(() => {
    ref.current = setInterval(handleRight, 1000);
    // console.log(ref.current)
    return () => {
      clearInterval(ref.current)
    }
  }, []);
  return (
    <div onMouseLeave={() => setInterval(handleRight, 1000)} onMouseEnter={() => clearInterval(ref.current)} className="container" >
      <div className="left-btn" onClick={handleLeft}>
        {"<"}
      </div>
      <img src={data[index].download_url} alt="Photos" />
      <div className="right-btn" onClick={handleRight}>
        {">"}
      </div>

    </div>
  )
}