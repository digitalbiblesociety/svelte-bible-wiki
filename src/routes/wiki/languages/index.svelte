<script>
	import LanguageList from "$lib/Wiki/LanguageList.svelte";
	import languages from '../../../../static/data/languages.json'
	console.log(languages)
</script>

<LanguageList languages={languages} />