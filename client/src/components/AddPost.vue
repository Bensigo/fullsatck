<template>
  <form @submit="createPost">
    <label for="title">Title</label>
    <br/>
    <input type='text' class="textInput" name='title' v-model='title' />
    <br/>
    <br/>
    <label for='content' >Content</label>
    <br/>
    <textarea class="textarea" name='content' v-model='content'></textarea>
    <br/>
    <button type="submit" class='btn'>Add</button>
  </form>
</template>

<script>
import {ADD_POST} from '../graphql/addPost'
import {ALL_POST_QUERY} from '../graphql/allPost'
export default {
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    createPost () {
      const title = this.title
      const content = this.content
      this.$apollo.mutate({
        mutation: ADD_POST,
        variables: {
          title,
          content
        },
        update: (store, {data: {createPost}}) => {
          // read the data from the cache
          const data = store.readQuery({query: ALL_POST_QUERY})
          console.log(data)
          // add the post to the end
          data.allPost.push(createPost)
          // write the mutation data to the cache
          store.writeQuery({query: ALL_POST_QUERY, data})
        }
      }).then((data) => {
        console.log('am in promise')
      }).catch((error) => {
        console.error(error)
      })
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style>
.btn{
  margin-top: 20px;
  height: 30px;
  width: 100px;
  color:white;
  background-color: lightgreen;
}
.textarea {
  width: 400px;
  height: 70px;
}
.textInput {
  width: 400px;
  height: 20px;
}
</style>
