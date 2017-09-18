import Vue from 'vue'
import VueApollo from 'vue-apollo'

// imporing apolloClient
import {apolloClient} from './apolloClient'

Vue.use(VueApollo)

// making a provider
export const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})
