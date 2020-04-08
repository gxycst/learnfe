<template>
    <div>
        <div id="my-div"></div>
    </div>
</template>
<script>
    import Vivus from 'vivus'
    export default {
        data() {
            return {};
        },
        mounted() {
            new Vivus('my-div', {
                    file: 'http://192.168.103.5:8080/0007.svg',
                    type: 'oneByOne',
                }, myVivus => {
                    // myVivus.play(myVivus.getStatus() === 'end' ? -1 : 1);来回
                    if (myVivus.getStatus() === 'end') {
                        myVivus.reset().play();
                    }
                }
            );

        }
    };
</script>
<style lang="less">

</style>