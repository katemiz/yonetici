<script>

  import {params} from '@/config/config.js'

  import Layout from '@/Pages/Shared/Layout.svelte'
  import Greet from '@/Pages/Shared/Greet.svelte'



</script>


<svelte:head>

  <title>{params.app.title}</title>
  <meta name="description" content="{params.app.description}" />
    
</svelte:head>


<Layout>

  <!-- <Hero /> -->


  <Greet />

</Layout>