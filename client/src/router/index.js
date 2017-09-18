import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Post from '@/components/Post'
import AddPost from '@/components/AddPost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/add',
      name: 'AddPost',
      component: AddPost
    },
    {
      path: '/:id',
      name: 'Post',
      component: Post,
      props: true
    }
  ]
})
