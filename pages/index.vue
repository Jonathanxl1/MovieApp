<template>
  <div>
    <div class="w-full h-50 px-10">
      <carousel-movies :movies="movies" />
    </div>
    <div class="w-full h-auto">
      <p v-for="x in geners" :key="x.id" class="h-72">{{ x.name }}</p>
    </div>
    <div class="blog w-full flex h-auto space-x-5 justify-between px-5">
      <div class="blog-card w-1/4">
        <div>Title</div>
        <div>
          <p class="text-ju">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quis
            tempore rerum, dolor ea quidem similique sed impedit, ipsum
            voluptates rem sint ipsam id. Eius blanditiis in eveniet adipisci
            doloribus?
          </p>
        </div>
      </div>

      <div class="blog-card w-1/4">
        <div class="">Title</div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quis
            tempore rerum, dolor ea quidem similique sed impedit, ipsum
            voluptates rem sint ipsam id. Eius blanditiis in eveniet adipisci
            doloribus?
          </p>
        </div>
      </div>

      <div class="blog-card w-1/4">
        <div>Title</div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quis
            tempore rerum, dolor ea quidem similique sed impedit, ipsum
            voluptates rem sint ipsam id. Eius blanditiis in eveniet adipisci
            doloribus?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import delorean from "~/assets/img/delorean.jpg";
  import frozen from "~/assets/img/frozen.jpg";
  import starWars from "~/assets/img/star-wars.jpg";
  import thanos from "~/assets/img/thanos.jpg";

  export default {
    data() {
      return {
        geners: [
          {
            id: 28,
            name: "Action",
          },
          {
            id: 12,
            name: "Adventure",
          },
          {
            id: 16,
            name: "Animation",
          },
          {
            id: 35,
            name: "Comedy",
          },
          {
            id: 80,
            name: "Crime",
          },
          {
            id: 99,
            name: "Documentary",
          },
          {
            id: 18,
            name: "Drama",
          },
          {
            id: 10751,
            name: "Family",
          },
          {
            id: 14,
            name: "Fantasy",
          },
          {
            id: 36,
            name: "History",
          },
          {
            id: 27,
            name: "Horror",
          },
          {
            id: 10402,
            name: "Music",
          },
          {
            id: 9648,
            name: "Mystery",
          },
          {
            id: 10749,
            name: "Romance",
          },
          {
            id: 878,
            name: "Science Fiction",
          },
          {
            id: 10770,
            name: "TV Movie",
          },
          {
            id: 53,
            name: "Thriller",
          },
          {
            id: 10752,
            name: "War",
          },
          {
            id: 37,
            name: "Western",
          },
        ],
        movies: [
          {
            src: starWars,
            name: "Star Wars",
          },
          {
            src: thanos,
            name: "Thanos",
          },
          {
            src: frozen,
            name: "Fronze",
          },
          {
            src: delorean,
            name: "Back to the futures",
          },
        ],
      };
    },
  };
</script>
