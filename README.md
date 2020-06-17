# reactjs-like-component
A simple like component with Font Awesome and event handling. 


Here is an example of how you add it to a another component and bubble up events and data.


1) Import the component

import Like from './components/common/like/like';

2) Add to your Render section where applicable

<td><Like onClick={ ()=>{this.handleOnLiked(movie)}} liked={movie.liked}></Like></td>

3) Don't forget event handling to be passed to the component and handle event bubbling.
Event Handling: 

handleOnLiked = movie =>{
        const movies    = [...this.state.movies];
        const index     = movies.indexOf(movie);
        movies[index]   = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({ movies})

        console.log("Like clicked!", movie)
    }
    
Note: you can pass whatever data you like here, movies is just an example

