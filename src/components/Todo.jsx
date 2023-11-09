import './Todo.css';



function Todo({ title, paragraph, onTodoDelete}) {

    return (
        <div className='todo'>
            <h2 className='test'>{ title }</h2> 
            <p className=''>{ paragraph }</p>
            <button onClick={onTodoDelete}>Delete</button>
        </div>
    )
}



export default Todo;

// *** don't put in () on functions or else they'll be called before event
// alternatively, use callback function when you need to use () or params

// callback function to execute some code inside curly brackets:
// {() => {console.log('Bob')}}
// use multiple props by using a comma and use {}
// title is prop parameter
// title to use prop params in App.jsx file
// in React class needs to be 'className'