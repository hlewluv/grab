import { useEffect, useState } from "react";

const lessons = [
    {
        id: 1,
        name: 'em la cdb'
    },
    {
        id: 2,
        name: 'em la clz'
    },
    {
        id: 3,
        name: 'em la cdd'
    },

]

function Content(){
    const [color,setColor] = useState(1)

    return (
       <div>
            {lessons.map((lesson, id)=>(
                <li key={lesson.id}
                    style={{color: color === lesson.id ? 'red' : 'black'}}
                    onClick = {()=> setColor(lesson.id)}
                >
                {lesson.name}
                </li>
            ))}
       </div>
    )
}

export default Content