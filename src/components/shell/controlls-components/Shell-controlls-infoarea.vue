<template>
  <div>

            <code class="info-txt">
                {{this[info]}}
            </code>
                <v-icon>mdi-information-outline</v-icon>
        </div>
</template>

<script>
export default {
    name:"shell-component-infoarea",
    props:['info','type','user','db'],
    data(){
        return{
            dbinfo:`DB_CONNECTION=mysql
                    DB_HOST=127.0.0.1
                    DB_PORT=3306
                    DB_DATABASE=${this.db}
                    DB_USERNAME=${this.user}
                    DB_PASSWORD={your db user password)`,
            nginxRouteInfo:`If index file in root write /  if in folder public write /public and so on`,
        }
    }
}
</script>

<style>
    .info-txt{
        background-color: #767676 !important;
        color: rgb(255, 255, 255) !important
    }
</style>