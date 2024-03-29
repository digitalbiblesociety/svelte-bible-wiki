<script>
	import { onMount } from 'svelte'
	import { browser } from '$app/env'
	import { Datatable } from 'sveltekit-datatables'
	import FetchWikiSidebar from '../API/FetchWikiSidebar.js'

	let infobox;
	export let locale;
	export let country;
	export let translations = {
		'population': 'Population',
		'languages': 'Languages',
		'official_language': 'Official Language',
		'religion_primary': 'Primary Religion',
		'world_watch_list': 'World Watch List',
		'persecution_type': 'Persecution Type',
		'overview': 'Overview',
	}

	const table_row = (row, locale) =>  `
	<tr class="py-4 text-sm">
		<td class="whitespace-nowrap px-6 text-gray-900 dark:text-gray-200">
			<a href=/${locale}/languages/${row.iso}>
				<div>${row.name}</div>
				<div class="text-xs italic text-gray-500 dark:text-gray-300">${row.autonym}</div>
			</a>
		</td>
		<td class="hidden whitespace-nowrap px-6 sm:table-cell">${row.iso}</td>
	</tr>`

	let rows;
</script>

	<div class="flex flex-col bg-gradient-to-br from-primary-500 to-secondary-500 dark:from-primary-700 dark:to-secondary-700 xl:rounded-tl-xl xl:rounded-tr-xl text-gray-100 text-2xl text-center h-32">
		{#if country}
		<h1 class="text-center text-3xl font-extrabold leading-8 tracking-wider text-white-900 sm:text-4xl pt-6">
			{country.name_long ?? ''} <div class="text-sm text-gray-200">{country.region_name}</div>
		</h1>
		{/if}
	</div>

	<div class="flex flex-row sm:flex-col">

		<div class="w-1/2">
				{#if browser}
				<Datatable data={country.languages} bind:dataRows={rows}>
					<thead>
						<th data-key="name" class="sortable">Name</th>
						<th data-key="iso" class="sortable hidden sm:table-cell">Iso</th>
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
				<table>
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
		</div>

			<div class="w-1/2 text-gray-900 dark:text-gray-200">
				{#if country}

				<div class="prose dark:prose-invert px-4 py-8">
					{country.overview}
					<a class="block mt-2 text-center" href={country.url_wiki}> Wikipedia </a>
				</div>

				<dl class="mx-4">
					<div class="flex justify-between py-1 text-sm">
						<dt>{translations.population}</dt>
						<dd>
							{new Intl.NumberFormat(country.population, {
								maximumSignificantDigits: 8
							}).format(country.population)}
						</dd>
					</div>
					<div class="flex justify-between py-1 text-sm">
						<dt>{translations.official_language}</dt>
						<dd>
							<a class="underline" href="/{locale}/languages/{country.official_language_iso}">
								{country.official_language}
							</a>
						</dd>
					</div>
					<div class="flex justify-between py-1 text-sm">
						<dt>{translations.languages}</dt>
						<dd>
							{country.languages.length}
						</dd>
					</div>
					<div class="flex justify-between py-1 text-sm">
						<dt>{translations.religion_primary}</dt>
						<dd>
							{country.religion_primary}
						</dd>
					</div>
					{#if country.persecution}
						<div class="mt-2 border-t border-b border-gray-200">
							<div class="flex justify-between py-1 text-sm">
								<dt>{translations.world_watch_list}</dt>
								<dd>
									{country.persecution.rank}
									<small class="align-top text-xs">
										({country.persecution.score})
									</small>
								</dd>
							</div>
							<div class="flex flex-col py-1 text-sm">
								<dt>{translations.persecution_type}</dt>
								<dd>
									{country.persecution.persecution_type}
								</dd>
							</div>
						</div>
					{/if}
				</dl>
				{/if}
				{#if infobox}
				<table class="infobox">
					{@html infobox}
				</table>
				{/if}
			</div>

	</div>