<template>
  <div>
    <Header></Header>
    <Banner></Banner>
    <BlogHome></BlogHome>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "~/components/Header.vue";
import Banner from "~/components/Banner.vue";
import BlogHome from "~/components/BlogHome.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Header,
    Banner,
    BlogHome,
    Footer,
  },
  head() {
    return {
      script: [{ src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }],
    };
  },
};
</script>
