import React, { useState } from 'react'
import useDocumentTitle from '../customHooks/useDocumentTitle';


const DocumentTitle2 = () => {
    let [count , setCount] = useState(0);

    // ^calling the custom hooks 

    useDocumentTitle(count);

  return (
    <div>
        <button
        onClick={(event) => {
            setCount(previousCount => {
                return (previousCount + 1)
            })
        }}>
            Change count - document - 2
        </button>
    </div>
  )
}

export default DocumentTitle2