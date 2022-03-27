<script>

    import { params,gui } from '@/config/config.js'
    import { page } from '@/config/config_building.js'
    import { parseDateTime } from '@/Pages/Shared/Functions/time.js'

    import { Inertia } from '@inertiajs/inertia'

    import Layout from '@/Pages/Shared/Layout.svelte'
    import Pagination from '@/Pages/Shared/Pagination/Pagination.svelte'
    import Notification from '@/Pages/Shared/Notification/Notification.svelte'
    import Icon from '@/Pages/Shared/Icon.svelte'
  
    export let id
    export let tabledata
    export let filters
    export let notification

    //let page = sabitler[pagetype]


    let filterquery = filters.search
    let userid
    let sortcolumn
    let sortorder

    let sortstatus = {

      title:{
        order:'asc',
        hidden:false
      },

      created_by:{
        order:'asc',
        hidden:false
      },

      created_at:{
        order:'asc',
        hidden:false
      }
    }

    function handleSort(col,id) {

      sortstatus[col].order = (sortstatus[col].order == 'desc') ? 'asc': 'desc'
      sortstatus[col].hidden = !sortstatus[col].hidden

      sortcolumn = col
      sortorder = sortstatus[col].order
      userid = id

      handleQuery()
    }

    function handleQuery () {

      let params = {}

      params.sortcolumn = sortcolumn
      params.sortorder = sortorder

      if (filterquery) {
        params.search = filterquery
      }

      if (userid) {
        params.userid = userid
      }

      Inertia.get("/simpleitem/",params, {
        preserveState:true
      })
    }
  
    function handleReset () {
      filterquery = ''
      Inertia.get("/simpleitem/")
    }

</script> 
  
<svelte:head>
    <title>{params.app.name} - {page.headers.general}</title>
</svelte:head>
    
<Layout>

    <div class="section container">

        <h1 class="title my-6 has-text-weight-light is-size-1 has-text-left">{page.headers.list}</h1>

        {#if notification}
        <Notification {notification} />
        {/if}

        <!-- ***************** -->
        <!-- ADD BUTTON        -->
        <!-- ***************** -->

        <div class="column">

        <div class="buttons has-addons is-left">

            <a href="/tesisler-form/{id}" class="button is-light">
                <span class="icon is-small">
                    <Icon name="add" size="{gui.icons.size}" color="link"/>
                </span>
                <span>{page.addcommand.label}</span>
            </a>
        
        </div>
        </div>

        <!-- ************************ -->
        <!-- Filter Tree Search Box   -->
        <!-- ************************ -->

        <div class="columns is-mobile">

        <div class="column">

            <!-- Filter Tree Search Box -->
            <div class="field has-addons is-fullwidth is-pulled-right">

                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="text" placeholder="{page.filterbox.placeholder}" bind:value={filterquery} on:input="{handleQuery}">
                    <span class="icon is-small is-left">
                        <Icon name="search" size="{gui.icons.size}" color="grey"/>
                    </span>
                </p>

                <div class="control">
                    <button class="button is-light px-1" on:click="{handleReset}">
                        <Icon name="cancel" size="{gui.icons.size}" color="lightgrey"/>
                    </button>
                </div>

            </div>
        </div>
        </div>


        {#if tabledata.data.length > 0}

        <!-- ************************ -->
        <!-- TABLE                    -->
        <!-- ************************ -->

        <table class="table is-fullwidth">

            <caption>Toplam <b>{tabledata.total}</b> sonuç</caption>

            <thead>
            <tr>
                <th>
                <span class="icon-text" on:click="{() => handleSort("title",false)}">
                    <span class="icon" class:is-hidden="{sortstatus['title'].hidden}"><Icon name="arrow_up" size="{gui.icons.size}" color="{gui.icons.color}"/></span>
                    <span class="icon" class:is-hidden="{!sortstatus['title'].hidden}"><Icon name="arrow_down" size="{gui.icons.size}" color="{gui.icons.color}"/></span>
                    <span>{page.form.input.label}</span>
                </span>
                </th>

                <th>
                <span class="icon-text" on:click="{() => handleSort("created_by",false)}">
                    <span class="icon" class:is-hidden="{sortstatus['created_by'].hidden}"><Icon name="arrow_up" size="{gui.icons.size}" color="{gui.icons.color}"/></span>
                    <span class="icon" class:is-hidden="{!sortstatus['created_by'].hidden}"><Icon name="arrow_down" size="{gui.icons.size}" color="{gui.icons.color}"/></span>
                    <span>Created By</span>
                </span>
                </th>

                <th>
                <span class="icon-text" on:click="{() => handleSort("created_at",false)}">
                    <span class="icon" class:is-hidden="{sortstatus['created_at'].hidden}"><Icon name="arrow_up" size="{gui.icons.size}" color="{gui.icons.color}"/></span>
                    <span class="icon" class:is-hidden="{!sortstatus['created_at'].hidden}"><Icon name="arrow_down" size="{gui.icons.size}" color="{gui.icons.color}"/></span>
                    <span>Created At</span>
                </span>
                </th>

                <th class="has-text-right">Actions</th>
            </tr>
            </thead>

            <tbody>

                {#each tabledata.data as item}
                <tr>
                    <td>                      
                    <a href="/tesisler/{item.id}">
                        {@html item.name}
                    </a>
                    </td>

                    <td>
                    <a href="{"#"}" on:click="{() => handleSort("created_by",item.created_by.id)}">
                        {item.created_by.email}
                    </a>
                    </td>

                    <td>{parseDateTime(item.created_at)}</td>

                    <td class="has-text-right">
                    <a href="/tesisler/{item.id}" class="icon">
                        <Icon name="eye" size="{gui.icons.size}" color="{gui.icons.color}"/>
                    </a>
                    <a href="/tesisler-form/{item.id}" class="icon">
                        <Icon name="edit" size="{gui.icons.size}" color="{gui.icons.color}"/>
                    </a>
                    </td>
                </tr>
                {/each}

            </tbody>

        </table>

        <Pagination pagination={tabledata} iconprops={gui.icons}/>

        {:else}

        <!-- ************************ -->
        <!-- NO ITEM IN DB            -->
        <!-- ************************ -->

        <div class="notification is-warning is-light">Eklenmiş bina/apartman yok.</div>

        {/if}

    </div>

</Layout>