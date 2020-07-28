<template>
  <div class="container">
    <p class="description">Fast deployment of pure PHP, laravel, vue and static websites on raspberry PI single-board computer</p>
    <div class="photo">
      <img src="@/assets/cutoutPI.png" />
    </div>
    <div class="about">
        <div class="about__li"><img src="@/assets/raspi.png"> <p> Raspbian debian-based operating system</p></div>
        <div class="about__li"><img src="@/assets/mariadb.png"><p>MariaDB MySQL relational database management system</p></div>
        <div class="about__li"><img src="@/assets/PHP.png"><p>Runing PHP 7.3</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name:'aboutpage'
}
</script>

<style scoped lang="scss">
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2fr;
    grid-template-areas: 
      "description  photo"
      "about about"; 
  }
.description {
  grid-area: description;
  font-size: 2rem;
  display: flex;
  color: rgb(90, 89, 89);
  align-items: center;
  align-items: center;
  justify-content: center;
}
.photo {
  grid-area: photo;
}
.about {
  grid-area: about;
  &__li{
    display:flex;
    flex-direction: row;
    align-items: center;
  }
  &__li img{
    width: 20%;
  }
    &__li p{
    font-size: 1.5rem;
  }
}

.photo>img {
  object-fit: cover;
  width: 100%;
  max-height: 100%;
  opacity: 0.85;
}
</style>
