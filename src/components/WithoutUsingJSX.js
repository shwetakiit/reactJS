import React from "react"

const WithoutUsingJSX = () => {

    return React.createElement(
        'div',
        {id:'hello',className:'dummyClass'},   // This element is key value pair  lets say Id , Class 

        //' <h1>Shweta</h1>'  //It render like  <h1>Shweta</h1>  which is not correct so create other below element ,

        React.createElement('h1', null, 'Without using JSX'),
        React.createElement('h2', null, 'Without using JSX')
    )
}

export default WithoutUsingJSX;