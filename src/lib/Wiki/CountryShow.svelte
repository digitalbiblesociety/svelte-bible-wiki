<script>
	import { onMount } from 'svelte'
	import { browser } from '$app/env'
	import { Datatable } from 'svelte-simple-datatables'
	import FetchWikiSidebar from '../API/FetchWikiSidebar.js'

	let infobox;
	export let id;
	export let locale;
	export let country;
	export let translations;

	onMount(async () => {
//		infobox = await FetchWikiSidebar(country.name, locale ?? 'en');
	})

	const table_row = (row, locale) =>  `
	<tr>
		<td class="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
			<a href=/${locale}/languages/${row.iso}>
				<div class="text-sm text-gray-900 dark:text-gray-200">${row.name}</div>
				<div class="text-xs italic text-gray-500">${row.autonym}</div>
			</a>
		</td>
		<td class="hidden whitespace-nowrap px-6 py-4 text-sm text-gray-900 sm:table-cell">${row.iso}</td>
		<td class="hidden whitespace-nowrap px-6 py-4 text-sm text-gray-900 sm:table-cell">${row.bibles_count}</td>
	</tr>`

	console.log(country.languages)

	let rows;
</script>


	<div class="flex flex-col bg-gradient-to-br from-primary-500 to-secondary-500 dark:from-primary-700 dark:to-secondary-700 xl:rounded-tl-xl xl:rounded-tr-xl text-gray-100 text-2xl text-center h-32">
		{#if country}
		<h1 class="text-center text-3xl font-extrabold leading-8 tracking-wider text-white-900 sm:text-4xl pt-6">
			{country.name_long ?? ''} <div class="text-sm text-gray-200">{country.region_name}</div>
		</h1>
		{/if}
	</div>

	<div class="grid grid-cols-5 gap-4 px-8">
				{#if browser}
				<Datatable classList="col-span-3" data={country.languages} bind:dataRows={rows}>
					<thead>
						<th data-key="name" class="sortable">Name</th>
						<th data-key="iso" class="sortable hidden sm:table-cell">Iso</th>
						<th data-key="bc" class="sortable hidden md:table-cell">{translations?.thead?.bibles}</th>
					</thead>
					<tbody>
						{#if $rows}
							{#each $rows as row}
								{ @html table_row(row, locale) }
							{/each}
						{/if}
					</tbody>
				</Datatable>
				{/if}

				{#if country}
				<noscript>
				<table class="col-span-3">
					<thead>
						<th data-key="name" class="sortable">Name</th>
						<th data-key="iso" class="sortable hidden sm:table-cell">Iso</th>
					</thead>
					<tbody>
							{#each country.languages as row}
								{ @html table_row(row, locale) }
							{/each}
					</tbody>
				</table>
			</noscript>
				{/if}


			<div class="col-span-2 py-16">
				{#if country}
				<dl>
					<div class="flex justify-between py-1 text-sm">
						<dt class="text-gray-500">Population</dt>
						<dd class="text-gray-900 dark:text-gray-300">
							{new Intl.NumberFormat(country.population, {
								maximumSignificantDigits: 8
							}).format(country.population)}
						</dd>
					</div>
					<div class="flex justify-between py-1 text-sm">
						<dt class="text-gray-500">Language</dt>
						<dd class="text-gray-900 dark:text-gray-300">
							<a href="/{locale}/languages/{country.official_language_iso}" class="text-blue-600">
								{country.official_language}
							</a>
						</dd>
					</div>
					<div class="flex justify-between py-1 text-sm">
						<dt class="text-gray-500">Languages</dt>
						<dd class="text-gray-900 dark:text-gray-300">
							{country.languages.length}
						</dd>
					</div>
					<div class="flex justify-between py-1 text-sm">
						<dt class="text-gray-500">Primary Religion</dt>
						<dd class="text-gray-900 dark:text-gray-300">
							{country.religion_primary}
						</dd>
					</div>
					{#if country.persecution}
						<div class="mt-2 border-t border-b border-gray-200">
							<div class="flex justify-between py-1 text-sm">
								<dt class="text-gray-500">World Watch List</dt>
								<dd class="text-gray-900 dark:text-gray-300">
									{country.persecution.rank}
									<small class="align-top text-xs">
										({country.persecution.score})
									</small>
								</dd>
							</div>
							<div class="flex flex-col py-1 text-sm">
								<dt class="text-gray-500">Persecution Type</dt>
								<dd class="text-gray-900 dark:text-gray-300">
									{country.persecution.persecution_type}
								</dd>
							</div>
						</div>
					{/if}

					<div class="py-1 text-sm">
						<dt class="text-gray-500">overview</dt>
						<dd class="text-gray-900 dark:text-gray-300">
							{country.overview}
						</dd>
					</div>

					<div class="py-1 text-sm">
						<a class="text-gray-900 dark:text-gray-300" href={country.url_wiki}> Wikipedia </a>
					</div>
				</dl>
				{/if}
				{#if infobox}
				<table class="infobox">
					{@html infobox}
				</table>
				{/if}
			</div>

	</div>