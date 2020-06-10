<template>
    <div class="bg-yellow">
        <div class="h-100 w-75 ml-auto mr-auto">
            <b-jumbotron bg-variant="dark-1" text-variant="yellow">
                <template id="header" v-slot:header>{{ startModal.title }}</template>

                <template v-slot:lead>{{ startModal.lead }}</template>

                <hr class="my-4" />

                <div id="lineDrawing">
                    <svg viewBox="0 0 800 300" style="background-color: rgba(0, 0, 0, 0);">
                        <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1" class="lines">
                            <defs>
                                <marker id="dot" viewBox="0 0 10 10" refX="5" refY="5"
                                    markerWidth="2" markerHeight="2">
                                    <circle cx="10" cy="10" r="10" fill="#bd6f3e" />
                                </marker>
                            </defs>

                            <!--Box-->
                            <path d="M 5 5 L 795 5 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>
                            <path d="M 795 5 L 795 295 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>
                            <path d="M 795 295 L 5 295 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>
                            <path d="M 5 295 L 5 5 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>

                            <!--B-->
                            <path d="M 40 20 L 40 290 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>
                            <path d="M 40 20 Q 90 68 40 145 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>
                            <path d="M 40 145 Q 90 203 40 290 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>

                            <!--E-->
                            <path d="M 100 20 L 150 20 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>
                            <path d="M 100 145 L 150 145 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>
                            <path d="M 100 290 L 150 290 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>
                            <path d="M 100 20 L 100 290 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>

                            <!--N-->
                            <path d="M 160 20 L 210 290 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>
                            <path d="M 160 20 L 160 290 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>
                            <path d="M 210 20 L 210 290 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>

                            <!--C-->
                            <path d="M 270 20 Q 230 73 220 145 230 218 270 290" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>

                            <!--E-->
                            <path d="M 280 20 L 330 20 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>
                            <path d="M 280 145 L 330 145 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>
                            <path d="M 280 290 L 330 290 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>
                            <path d="M 280 20 L 280 290 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>

                            <!--L-->
                            <path d="M 400 20 L 400 290 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>
                            <path d="M 400 290 L 450 290 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>

                            <!--Á-->
                            <path d="M 470 145 L 500 145 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>
                            <path d="M 485 20 L 460 290 Z " stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>
                            <path d="M 485 20 L 510 290 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>
                            <!--Á:accent-->
                            <path d="M 485 18 L 500 10 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>

                            <!--S-->
                            <path d="M 570 20 Q 520 68 545 135" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>
                            <path d="M 545 135 Q 570 203 520 290" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>

                            <!--Z-->
                            <path d="M 630 20 L 580 290 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>
                            <path d="M 580 20 L 630 20 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>
                            <path d="M 580 290 L 630 290 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>

                            <!--L-->
                            <path d="M 640 20 L 640 290 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>
                            <path d="M 640 290 L 670 290 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>

                            <!--Ó-->
                            <path d="M 725 20 Q 700 135 725 290" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>
                            <path d="M 725 290 Q 750 135 725 20" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>
                            <!--Ó:accent-->
                            <path d="M 725 18 L 745 10 Z" stroke-dasharray="500" marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)"/>
                        </g>
                    </svg>
                </div>

                <p>{{ startModal.description }}</p>
            </b-jumbotron>
        </div>
    </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'

    export default {
        name: 'Home',

        props: {},

        mounted () {
            anime({
                targets: '#lineDrawing .lines path',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutElastic',
                duration: 250,
                delay: (el, i) => (i * 250),
                direction: 'alternate',
                loop: true
            })
        },

        data: () => {
            return {
                startModal: {
                    title: 'Bence László',
                    lead: 'Software Developer',
                    description: ''
                }
            }
        },

    };
</script>

<style scoped>
    * {
        color: white;
    }
</style>