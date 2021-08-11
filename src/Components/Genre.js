import react, { useState } from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import ReactPlayer from "react-player";

const API_IMG = `https://image.tmdb.org/t/p/w500/`;


function Content({key, overview, popularity, poster_path,release_date, title, vote_average, id, profile_path, character, 
    name, genres, runtime, revenue, budget, author, content }){
   return( 
   <div>
        	<div className="posterContent">
			{/* <div className="mini-detail"> */}
				<img src={API_IMG+poster_path} alt={title}></img>
				
					<h3>{title}</h3>
					<p>{vote_average}</p>
				{/* </div> */}
			</div>
			<div className="Extra">
			<div className="Info">
				<h4>OverView</h4>
				<p>{overview}</p>
				<ReactPlayer className="video" url={`https://www.youtube.com/watch?v=${key}`}/> 
			</div>
				 {/* <ReactPlayer url={} */}
			 <div className="Detail">
				<div className="popularity">
				<h5>Popularity:</h5>
				<p>{popularity}</p>
				</div>
				<div className="genre">
					<h5>Genre:</h5>
					<p>{`detail.genres${id}.name`}</p>
				</div>
				<div className="restInfo">
					Release Data:{release_date}
				   <div> RunTime:{runtime}</div>
					Budget:{budget}
					Revenue:{revenue}
				</div>
            </div>
			<div className="Cast">
				<img src={API_IMG+ profile_path}/>
				<div className="Names">
					<h2>{character}</h2>
					<p>{name}</p>
				</div>
			</div>
			<div className="review">
				<h5>{author}</h5>
				<p>{content}</p> 
			</div>
            </div>
    </div>
	);
}

export default Content;