import React, {useState, useEffect} from 'react';
// import Movie from './Movie';
import Movie1 from './Movie1';

import './HomePage.css';
// import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import movie from './movie.png'



 function HomePage() {

	const API_KEY='3596f20a2391f572aa6b0d467b067306';
	const API_TRENDING=`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
	const API_GENRE=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${''}`;
	const API_HOME=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
	const API_SEARCH=`https://api.themoviedb.org/3/search/movie?api_key=3596f20a2391f572aa6b0d467b067306&query=${''}`
			
			const [searchTerm, setSearchTerm] = useState('');
			const [search, setSearch] = useState([]);
			const [genre, setGenre] = useState([]);
			const [trending, setTrending] = useState([]);
			const [home, setHome] = useState([]);
			const [show, setShow] = useState("");

			const handleOnChange = (e) => {
				setSearchTerm(e.target.value);
			}

		const handleOnSubmit = (e) => {
			e.preventDefault();
		return(
			fetch(API_SEARCH + searchTerm)
			.then((res)=>res.json())
			.then((data)=>{
				console.log(data)
				setSearch(data.results);
				setShow("search")
			})		
		 );
	}

	const handleSelect=(e)=>{
		console.log(e)
		// setGenKey(e)
		fetch(API_GENRE + e)
		.then((res)=>res.json())
		.then((data)=>{
			console.log(data);
			setGenre(data.results);
			setShow("genre")
		})
	

	}
	
	  function fetchTrending() {

			return(	
			
			// useEffect(() => {
				fetch(API_TRENDING)
					.then((res) => res.json())
					.then((data) =>{
						setTrending(data.results)
						setShow("trending");
					})
						
			// }, [])
			// )
			// Trending.length>0 && Trending.map(movie =>(
		 // 		 	<Movie key={movie.id} {...movie}/>
		 // 	))
			);
	}
	
	function fetchHome(){
		return(
			fetch(API_HOME)
				.then((res) => res.json())
				.then((data) =>{
					console.log('Home::');
					console.log(data);
					setHome(data.results);
					setShow("home")
				})
		);
	}	
	 const [homePage, setHomePage] = useState([]);
		
	useEffect(() => {
			fetch(API_HOME)
				.then((res) => res.json())
				.then((data) =>{
					console.log('Home::');
					console.log(data);
					setHomePage(data.results);
					setShow("")
				})
		}, [])
	
 
	return(
		<div>
			<div className="Bar">
			
			{/* <Navigation/> */}
			<div className='Slot'>	
			<img className='logo'  alt='' src = {movie} width='70px' height='70px'/>
				<div className="push">
				<div onClick={(event) => {
					fetchHome();
				}}> Home </div>
				<div onClick={(event) =>{
					fetchTrending();					
				}} > Trending </div>
				{/* <div  onClick={(event) =>{
					fetchTopmovies();					
				}} > TopMovies </div>
				<div  onClick={(event) =>{
					fetchOursuggestions();					
				}} > OurSuggestions </div> */}

				{/* <div  onClick={(event) =>{
					fetchGenre();					
				}} > Genre </div> */}
				
					<DropdownButton
					 className="DropDown"
					title="Genre"
					id="dropdown-menu"
					onSelect={handleSelect} 					
					>
						<Dropdown.Item eventKey="28" >Action</Dropdown.Item>
						<Dropdown.Item eventKey="18">Adventure</Dropdown.Item>
						<Dropdown.Item eventKey="16">Animation</Dropdown.Item>
						<Dropdown.Item eventKey="35">Comedy</Dropdown.Item>
						<Dropdown.Item eventKey="80">Crime</Dropdown.Item>
						<Dropdown.Item eventKey="99">Documentary</Dropdown.Item>
						<Dropdown.Item eventKey="18">Drama</Dropdown.Item>
						<Dropdown.Item eventKey="10751">Family</Dropdown.Item>
						<Dropdown.Item eventKey="14">Fantasy</Dropdown.Item>
						<Dropdown.Item eventKey="36">History</Dropdown.Item>
						<Dropdown.Item eventKey="27">Horror</Dropdown.Item>
						<Dropdown.Item eventKey="10402">Music</Dropdown.Item>
						<Dropdown.Item eventKey="9648">Mystery</Dropdown.Item>
						<Dropdown.Item eventKey="10749">Romance</Dropdown.Item>
						<Dropdown.Item eventKey="878">Science Fiction</Dropdown.Item>
						<Dropdown.Item eventKey="10770">TV Movie</Dropdown.Item>
						<Dropdown.Item eventKey="53">Thriller</Dropdown.Item>
						<Dropdown.Item eventKey="10752">War</Dropdown.Item>
						<Dropdown.Item eventKey="37">Western</Dropdown.Item>
						{/* <Dropdown.Item eventKey=""></Dropdown.Item> */}
						{/* {fetchGenre()} */}
					</DropdownButton>

				<form onSubmit={handleOnSubmit}>
					<input
						className ='bar'
						type = 'search'
						placeholder = 'Search for Movies'
						value= {searchTerm}
						onChange={handleOnChange}
						/>
					<div className="search"></div>
				</form>
				</div>
				</div>
			</div>

			
			<div className='Card'>
			
				{show==="trending" ? <div className='Select'>
					{trending.length>0 && trending.map(movie =>(
		 	 		<Movie1 key={movie.id} {...movie}/>
		 		))}
				{/* </div> : show==="topMovies" ? <div className='Select'>
		 			{topMovies.length>0 && topMovies.map(movie =>(
	 		 		<Movie key={movie.id} {...movie}/>
	 			))}	
		 		</div> : show==="ourSuggestions" ?<div className='Select'>
		 			{ourSuggestions.length>0 && ourSuggestions.map(movie =>(
	 		 		<Movie key={movie.id} {...movie}/>
	 			))}	 */}
				</div> : show==="home" ? <div className='Select'>
					{home.length>0 && home.map(movie =>(
		 	 		<Movie1 key={movie.id} {...movie}/>
		 		))}
				</div> : show==="" ? <div className='Select'>
					{homePage.length>0 && homePage.map(movie =>(
		 	 		<Movie1 key={movie.id} {...movie}/>
		 		))}
				</div>: show==="search" ? <div className='Select'>
					{search.length>0 && search.map(movie =>(
							<Movie1 key={movie.id} {...movie}/>
		 			))}</div> : show==="genre" ? <div className="Select">
						 {genre.length> 0 && genre.map(movie =>(
							 <Movie1 key={movie.id} {...movie}/>
						 ))}</div> : 
						 <div></div>
				}
		 	
	 		</div>
		
		</div>	
	);
}

export default HomePage;
