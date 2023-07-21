import {useState} from 'react'

export default function Home(){
const [imageDetail, setImageDetail] = useState(true)

function handleMouseOver(){
    setImageDetail(!imageDetail)
}

    return(
        <div>
            <p className="flex flex-col items-center text-2xl align pb-5">Si tu sait tu ken!
                <br/>
                <div onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver}>
                {imageDetail ? <img src="https://www.hollywoodreporter.com/wp-content/uploads/2023/06/French-Film-Poster-Barbie-Warner-Bros..jpg"/> : <img src="Untitled-2.png"/>}
                </div>
            </p>

        </div>
    )
}