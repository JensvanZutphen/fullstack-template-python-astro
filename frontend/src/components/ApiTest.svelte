<script>
    import { onMount } from 'svelte';
    console.log('ApiTest component is rendered');

    let data = null;
    let error = null;
    let loading = true;

    onMount(async () => {
        try {
            const response = await fetch('/api/fetch-data');
            console.log('Fetch response:', response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            if (result.error) {
                throw new Error(result.error);
            }
            data = result.message; // Update to handle the message property
            console.log('Fetched data:', data);
        } catch (err) {
            error = err.message;
            console.error('Fetch error:', error);
        } finally {
            loading = false;
        }
    });
</script>

{#if loading}
    <p>Loading...</p>
{:else if error}
    <p>Error: {error}</p>
{:else}
    <p>{data}</p> <!-- Update to display the message -->
{/if}