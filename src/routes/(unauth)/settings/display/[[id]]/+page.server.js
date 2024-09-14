//import { error } from '@sveltejs/kit'

import { redirect } from '@sveltejs/kit';
import { toys } from '../data.js';

export function load({ params }) 
{
	const { id } = params;
	
	const toysList = toys.map(toy => 
	({
		id: toy.id,
		name: toy.name,
        description: toy.description
	}))

	let selectedToy = toys.find((toy) => toy.id === id);

	// if (!selectedToy) 
	//	 redirect(301, `/settings/display/1`);

	return {
		toysList,
		selectedToy
	};
}
