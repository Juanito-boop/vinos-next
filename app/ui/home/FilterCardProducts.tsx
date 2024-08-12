"use client"

import { useEffect, useState } from 'react';
import { DataOrganizada } from "./interfaces";
import CarouselSection from './cliente/CarouselSection';

export default function FilteredCards() {
	const [loading, setLoading] = useState<boolean>(true);
	const [data, setData] = useState<DataOrganizada | null>(null);
	const [variedadesArray, setVariedadesArray] = useState<string[]>([]);
	const [fetched, setFetched] = useState<boolean>(false);  // Estado de control

	const checkVariedades = () => {
		const urlParams = new URLSearchParams(window.location.search);
		const variedadesValue = urlParams.get('variedades');

		if (variedadesValue) {
			const nuevasVariedades = variedadesValue.split(',');
			setVariedadesArray(nuevasVariedades);
		} else {
			setVariedadesArray([]);
		}
	};

	const fetchData = async () => {
		console.log("Fetching data...");
		setLoading(true);

		let url = "/api/vinos";
		if (variedadesArray.length > 0) {
			url = `/api/vinos?variedades=${variedadesArray.join(',')}`;
		}
		const response = await fetch(url).then((res) => res.json());
		setData(response);
		setFetched(true);
	};
	useEffect(() => {
		if (!fetched) {
			fetchData();
			setLoading(false)
		}
	}, [variedadesArray]);

	useEffect(() => {
		checkVariedades();
		console.log("useEffect triggered", { variedadesArray });
		fetchData();
		setLoading(false);
	}, []);

	if (loading) {
		return (
			<main className="w-full px-1 pt-3 pb-1 bg-normalColor11 rounded-r-xl">
				Loading...
			</main>
		);
	}
	return (
		<main className="w-full px-1 pt-3 pb-1 bg-normalColor11 rounded-r-xl">
			{data && Object.keys(data).map((key) => (
				<CarouselSection
					key={key}
					vinos={data[key]}
					variedad={key}
				/>
			))}
		</main>
	);
}
