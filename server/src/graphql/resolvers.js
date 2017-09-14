module.exports = {
  Query: {
    async allPost (root, args, {DB}) {
      const posts = await DB.Post.find()
      return posts
    },
    async postById (root, args, {DB}) {
      const {id} = args
      const post = await DB.Post.findById({_id: id})
      if (!post) {
        throw new Error('post not found ')
      }
      return post
    }
  },
  Mutation: {
    createPost (root, args, {DB}) {
      const post = args
      const newPost = new DB.Post(post)
      return newPost.save()
    }
  }
}
