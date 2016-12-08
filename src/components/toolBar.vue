<template  >
<div class="col-md-1" id="tool-bar">
    <i class="glyphicon glyphicon-th-large"></i>
    <i class="glyphicon glyphicon-plus" @click="newNote"></i>
    <i class="glyphicon glyphicon-star-empty" @click="favoriteNote"></i>
    <i class="glyphicon glyphicon-remove" @click="delNote"></i>
</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    methods: {
        ...mapActions([
                 "newNote",
                'delNote',
                'favoriteNote'
            ]

        )
}

}
</script>

<style lang="css">
#tool-bar {
    width: 80px;
    height: 100%;
    background-color: #30414D;
    color: #767676;
    padding: 35px 25px 25px 25px;
}

i {
    font-size: 30px;
    margin-bottom: 35px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.5s ease;
}

i:hover {
    opacity: 1;
    color: #ccc;
}
</style>
