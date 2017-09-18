<template>
  <form>
    <label for="title">Title</label>
    <br/>
    <input type='text' class="textInput" name='title' v-model='title' />
    <br/>
    <br/>
    <label for='content' >Content</label>
    <br/>
    <textarea class="textarea" name='content' v-model='content'></textarea>
    <br/>
    <button type="submit" @click="addPost" class='btn'>Add</button>
  </form>
</template>

<script>
import {ADD_POST} from '../graphql/addPost'
export default {
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    addPost () {
      console.log(this.title, this.content)
      const title = this.title
      const content = this.content
      this.$apollo.mutate({
        mutation: ADD_POST,
        variables: {
          title,
          content
        }
      })
      this.$router.push('/')
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
