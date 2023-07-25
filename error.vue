<script setup>
const props = defineProps({
	error: Object,
});

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
	<main
		class="prose max-w-none flex h-full min-h-screen w-full flex-col items-center bg-gray-100 p-12"
	>
		<h1>{{ error.message }}</h1>
		<button @click="handleError">Go home</button>
	</main>
</template>
