<template>
  <div>
    <h4 v-if='loading'>loading.....</h4>
    <h3>{{postById.title}}</h3>
    <p>{{postById.content}}</p>
  </div>
</template>

<script>
import {POST_BY_ID} from '../graphql/postById'
export default {
  data () {
    return {
      postById: {},
      loading: 0
    }
  },
  props: ['id'],
  apollo: {
    postById: {
      query: POST_BY_ID,
      variables () {
        return {
          id: this.id
        }
      },
      fetchPolicy: 'cache-and-network'
    }
  }
}
</script>

<style>

</style>
