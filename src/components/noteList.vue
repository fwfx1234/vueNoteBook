<template  >
<div class="col-md-3" id="note-list">
    <h2>NOTE | fwf1234</h2>

    <div class="btn-group  btn-group-justified  ">
        <div class="btn-group btn-group-lg">
            <button type="button" class=" btn btn-defaul" @click="showAll('all')" name="button">ALL Note</button>
        </div>
        <div class="btn-group btn-group-lg">
            <button type="button" class=" btn btn-default" @click="showAll('favorite')" name="button">Favorivers</button>
        </div>
    </div>
    <div class="input-group">
        <input type="text" v-model="searchQuery" class="form-control">
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">Go!</button>
          </span>
    </div>
    <!-- /input-group -->
    <ul class="list-group">
        <li class="list-group-item active">我的笔记</li>
        <!-- 渲染笔记列表 -->
        <li class="list-group-item " :class="{heightLiht: note===active}" @click="setActive(note)" v-for="note in filteredNote">{{note.title}}</li>

    </ul>
</div>
<!-- /.col-lg-6 -->
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
  data(){
    return {
      searchQuery:''
    }
  },
    computed: {
        ...mapGetters({
            notelist: 'notes',
            active: "activeNote"
        }),
        filteredNote: function() {
            var self = this
            return self.notelist.filter(function(note) {
                return note.title.indexOf(self.searchQuery) !== -1
            })
        }
    },
    methods: {
        ...mapActions([
            'showAll',
            'setActive'
        ])

    },
    created: function() {
        this.$store.dispatch('init')
    }

}
</script>

<style lang="css">
#note-list {
    height: 100%;
    background-color: #F5F5F5;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
}

#note-list h2 {
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
    font-size: 22px;
    padding-bottom: 8px;
}

#note-list buttom {
    font-size: 16px;
}
#note-list div{
  padding-bottom:1em;
}
#note-list li:hover{
  background-color: #ccc;
}
.heightLiht{
  background-color: #ccc;
}
</style>
