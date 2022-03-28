<script>

    import { params,gui } from '@/config/config.js'
    import { page } from '@/config/config_building.js'

    import { Link } from '@inertiajs/inertia-svelte'
    import { Inertia } from '@inertiajs/inertia'

    import Layout from '@/Pages/Shared/Layout.svelte'
    import Icon from '@/Pages/Shared/Icon.svelte'
    import Notification from '@/Pages/Shared/Notification/Notification.svelte'
    import ItemInfo from '@/Pages/Shared/Notification/ItemInfo.svelte'

    import Swal from "sweetalert2"

    export let item
    export let notification


    let pageprops = page

    function confirmDelete(id) {

        Swal.fire({
            title: 'Emin misiniz?',
            text: "Geri dönülmez bir şekilde silinecektir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Evet, sil lütfen!'
        })
        .then((result) => {

            if (result.isConfirmed) {
                Inertia.delete('/tesisler', {
                    method:'delete',
                    preserveState:false,
                    data:{
                        id:id
                    }
                })
            } 
        })
    }

</script>


<svelte:head>
  <title>{params.app.name} - {pageprops.headers.general}</title>
</svelte:head>


  
<Layout>

    <div class="section container">

        <h1 class="title has-text-weight-light">{pageprops.headers.show}</h1>
        <h2 class="subtitle">Özellikler</h2>

        {#if notification}
            <Notification {notification} />
        {/if}

        <div class="columns mt-6">

            <div class="column is-3">

                <aside class="menu">
                    <p class="menu-label">MENU</p>
                    <ul class="menu-list">

                      <li>
                        <Link href="/tesisler" >
                            <span class="icon-text">
                                <span class="icon">
                                    <Icon name="list" size="{gui.icons.size}" color="{gui.icons.color}"/> 
                                </span>

                                <span>Listele</span>
                            </span>
                        </Link> 
                      </li>


                      <li>
                        <Link href="/tesisler-form" >
                            <span class="icon-text">
                                <span class="icon">
                                    <Icon name="add" size="{gui.icons.size}" color="{gui.icons.color}"/>
                                </span>

                                <span>{pageprops.addcommand.label}</span>
                            </span>
                        </Link> 
                      </li>

                    </ul>
                </aside>

            </div>

            <div class="column">
                
                <div class="card">
        
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">{item.name}</p>
                            </div>
                        </div>
                    
                        <div class="content">{@html item.adress}</div>
                    </div>
        
        
                    <footer class="card-footer">
        
                        <a href="/tesisler-form/{item.id}" class="card-footer-item">
                            <Icon name="edit" size="{gui.icons.size}" color="{gui.icons.color}"/>&nbsp;Değiştir
                        </a>
                        <a href="{"#"}" class="card-footer-item" on:click="{confirmDelete(item.id)}">
                            <Icon name="delete" size="{gui.icons.size}" color="danger"/>&nbsp;Sil
                        </a>
        
                    </footer>
                    
                </div>

                <ItemInfo {item} />

            </div>

        </div>




    </div>

</Layout>