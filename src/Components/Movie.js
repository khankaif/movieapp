import React, { useState } from 'react';
import './Movie.css';
import ReactPlayer from "react-player";


const API_IMG = `https://image.tmdb.org/t/p/w500/`;

function Movie({overview, popularity, poster_path,release_date, title, vote_average, id}){

	const [iD, setID]= useState([]);
	const [extra, setExtra] = useState(false);
	const [detail, setDetail]=useState([]);
	// const [path, setPath]= useState("null")
	const [active, setActive]=useState(false);
const API_KEY="3596f20a2391f572aa6b0d467b067306"
const API_VIDEO=`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
const API_DETAILS=`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`


// if(poster_path!=null){
// 	setPath({poster_path})
// }else{
// 	setPath("data:image/jpeg;base64,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")
// }



function fetchVideo()
{
fetch(API_VIDEO)
	.then((resp)=>resp.json())
	.then((data)=>{
		console.log(data)
		// console.log(data.results[0].key)
		if(data.results.length===0){
			// console.log("no key")
			setID("hudddhdudhhuwduwdhhudhuwddjjjjjjjjjenj	feozjb	uobebueonqh")
		}
		else {
			setID(data.results[0].key)}
	})}

function fetchDetail(){
	fetch(API_DETAILS)
		.then((res)=>res.json())
		.then((data)=>{
			console.log("details")
			console.log(data)
			setDetail(data)
		})
}

// if(setExtra===true){
// 	setActive(false);
// }
// else{
// 	setActive(true);
// }

return (
	<div>
	<div className="display" 
	onClick={(event)=>{
		fetchVideo()
		fetchDetail()
	}}>
			{/* <div className="posterContent" onClick={(event) => {
				// extra ? setExtra(false) : setExtra(true);
				setExtra(true) */}
			{/* }}> */}
			<div>
				<div className="posterContent" >
				<img src={API_IMG+poster_path} alt={title}></img>
				<div className="mini-detail"></div>
					<h3>{title}</h3>
					<p>{vote_average}</p>
				</div>
					<div className="Button" onClick={(event)=>{
						active ? setActive(false) : setActive(true);
					}}>
						<button onClick={
							(event)=>{
								if(active===false)
									setExtra(true)
								else
									setExtra(false)
							}
							}>More Information</button>
					</div>
				</div>	
			</div>
			<div className={ extra ? "Extra extraActive" : "Extra"}>
				<button onClick={(event)=>{
						setExtra(false)
					}}>Close</button>
				<div className="Info">
					<h4>OverView</h4>
					<p>{overview}</p>
					
					<div className="video">
						<ReactPlayer  url={`https://www.youtube.com/watch?v=${iD}`}/> 
					</div>
				</div>
			 <div className="Detail">
				<div className="pretty">
				<div className="popularity">
				<h5>Popularity: {(popularity/10).toFixed(2)} %</h5>
				</div>
				<div className="restInfo">
					<div className="status">
					Release Data: {release_date} 
				   <div> </div>
					RunTime: {detail.runtime}
					<div></div>
					Status: {detail.status}
					</div>
					<div className="collections">
					Budget: {"$"+((detail.budget)/1000000).toFixed(2)}
					<div></div>
					Box Office: {"$"+((detail.revenue)/1000000).toFixed(3)}
					</div>
				</div>
			</div>
			</div>
		</div>
	</div> 
);
}

export default Movie;