import "./Home.scss"
import {useState, useEffect} from "react"
import axios from "axios"
const Home: any = () => {
	const [buisness, setBuisness] = useState("Restaurant")
	const [latitude, setlatitude] = useState({})
	const [longitude, setLongitude] = useState({})
	const [language, setLanguage] = useState("en")
	const [region, setRegion] = useState("us")
	const getLocation = () => {
		try
		{
			navigator.geolocation.getCurrentPosition((position) => {
			const {longitude, latitude} = position.coords;
			setlatitude({latitude})
			setLongitude({longitude})
			})
			} catch (e) {
			console.log(Error)
		}

	}
	
	 useEffect(() => {
		getLocation();

	}, [])
	
	const HandleNearbyPlaces = async () => {

		const response  = await axios.post("http://localhost:8080/api/v1/nearby", {
			buisness, latitude, longitude	
		})

		const body = response.data;

	}
}

export default Home
