<template>
  <div class="shell">
            <div class="shell__output-name">Shell output</div>
            <p class="shell__output ma-0">0 updates can be installed immediately.
                0 of these updates are security updates. <br>
                The list of available updates is more than a week old.
                To check for new updates run: sudo apt update <br>
                This message is shown once once a day. To disable it please create the
                /home/edvinas/.hushlogin file. <br>
                edvinas@DESKTOP-QKU5QGG:/mnt/c/Users/Edvinas$</p>
            <div class="shell__error-name">Shell error output</div>
            <p class="shell__error ma-0">/home/edvinas/.hushlogin file. <br>
                edvinas@DESKTOP-QKU5QGG:/mnt/c/Users/Edvinas$ ssh pi@192.168.0.101 <br>
                pi@192.168.0.101's password: <br>
                edvinas@DESKTOP-QKU5QGG:/mnt/c/Users/Edvinas$ errrrrrooor</p>
        </div>
</template>

<script>
export default {
    name:'shell-output'
}
</script>

<style lang="scss">
      .shell{
            grid-area: output;
            width: 100%;
            height: 75vh;
            min-height: 12rem;
            display:grid;
            grid-template-rows: 2rem auto;
            grid-template-columns: 59% 1% 40%;
            grid-template-areas:
            "outName . errorName"
            "out     .    error";
        &__output{
            grid-area: out;
            background: #3f3f3fb6;
            color: #ffffff;
            padding: 0.5rem;
            font-size: 0.9rem;

            &-name{
                grid-area: outName;
                font-weight: 700;
                text-align: center;
                line-height: 2rem;
                background: #4592af;
            }
        }
        &__error{
            grid-area: error;
            background: #3f3f3fb6;
            color: #ffffff;
            padding: 0.5rem;
            font-size: 0.9rem;

            &-name{
                grid-area: errorName;
                font-weight: 700;
                color: rgb(46, 45, 45);
                text-align: center;
                line-height: 2rem;
                background: #c75757;
            }
        }
      }
     @media (max-width: 600px) {
      .shell{
            height: 90vh;
            grid-template-rows: 2rem auto 2rem auto;
            grid-template-columns: 100%;
            grid-template-areas:
            "outName"
            "out"
            "errorName"
            "error";
      }
    }
</style>