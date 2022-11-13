<template>
  <div>
    <li v-for="post of posts" :key="post.slug">
      <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
    </li>
  </div>
</template>

<script>
export default {
  name: "BlogHome",
  async asyncData({ $content }) {
    const posts = await $content("blog").fetch();

    return {
      posts,
    };
  },
};
</script>

<style scoped></style>
