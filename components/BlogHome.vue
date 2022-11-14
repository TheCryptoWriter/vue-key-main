

<template>
  <div>
    <h1>Blog Posts</h1>
    <ul>
      <li v-for="article in articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog/_slug', params: { slug: article.slug } }">
          <div>
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BlogHome",
  async asyncData({ $content, params }) {
    const articles = await $content("articles")
      .only(["title", "description"])
      .fetch();

    return {
      articles,
    };
  },
};
</script>


<style scoped></style>
