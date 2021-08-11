import React,{useState} from 'react';
import movie from './movie.png'
import './Navigation.css'
// import SearchBar from './SearchBar';
import filmstrip from './filmstrip.png';
import Movie from './Movie';
import './HomePage.css'

const Navigation = () =>{
	const API_KEY='3596f20a2391f572aa6b0d467b067306'
	const API_SEARCH=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`
	const [searchTerm, setSearchTerm] = useState('');
	const [search, setSearch] = useState([]);
	const [show, setShow] = useState("")

	const handleOnChange = (e) => {
		setSearchTerm(e.target.value);
			}

	const handleOnSubmit = (e) => {
		e.preventDefault();
		return(
		fetch(API_SEARCH + searchTerm)
			.then((res)=>res.json())
			.then((data)=>{
				console.log("Search::"+data.results);
				setSearch(data.results);
				setShow("search")
			})		
		 );
	}

	return (
		<nav >
			<img className='logo'  alt='' src = {movie} width='70px' height='70px'/>
			<div className='push'>
				<h2 className="Name">Savvy Movies</h2>
				{/*<img src={filmstrip} alt='' width='20px' height='20px'/> */}
				
				{/* <p className = 'About'>About</p> */}
				{/* <p className = 'Account'>Account</p> */}

			</div>
		</nav>		
	);
}

export default Navigation;