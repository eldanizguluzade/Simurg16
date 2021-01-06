<template>
     <div id="container">
        <header>
            <h1>{{title}}</h1>
        </header>
        <main>
            <div class="repair">
                <div class="content">
                    <strong class="main-title">Onarım Zamanı</strong>
                    <div class="text">
                        <p>
                            {{status}}
                        </p>
                        <p class="text-muted">Website Yenilenme zamanı:<em class="time"> {{repair_time}}</em> </p>

                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title:"SIMURG-16",
            status:"Website Onarımı devam ediyor...",
            repair_time:"12:00 - 20:00"
        }
    }
}
</script>


<style lang="css" scoped>
        #container {
            position: relative;
            height: 92vh;
            padding: 0 2rem;
            margin: 0;
            font-size:13px;
            box-sizing: border-box;
            background-image: url(./assets/repair.jpg);
            background-repeat: no-repeat;
            object-fit: cover;
            background-position-y: bottom;
        }

        header {
            position: relative;
            font-family: 'Lobster', cursive;
        }

        header h1 {
            position: absolute;
            font-size: 2.5em;
            color: darkgoldenrod;
            font-weight: 400;
            transition: font-size .3s;
        }
        header h1:hover{
            font-size: 2.8em;
            color: rgb(148, 108, 7);
            cursor: pointer;
        }

        .repair {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 55em;
            transition: all .3s ease;
        }

        .repair .content .main-title {
            font-size: 5em;
            color: rgb(46, 46, 46);
        }

        .repair .content .text {
            font-size: 2em;
            color: rgb(102, 101, 101);
        }

        @media screen and (max-width:768px) {
            header h1 {
            font-size: 3.4em;
            }
            header h1:hover{
            font-size: 3.7em;
            }
            .repair{
                width: 45em;
            }
            #container {
                background-size: contain;
                font-size: 10px;
            }
        } 
         @media screen and (max-width:400px) {
            #container {
                font-size: .19em;
            }
        }
</style>