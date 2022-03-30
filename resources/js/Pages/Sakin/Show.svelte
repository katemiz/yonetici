<script>

    import { params,gui } from '@/config/config.js'
    import { page } from '@/config/config_sakinler.js'

    import { Link } from '@inertiajs/inertia-svelte'
    import { Inertia } from '@inertiajs/inertia'

    import Layout from '@/Pages/Shared/Layout.svelte'
    import Icon from '@/Pages/Shared/Icon.svelte'
    import Notification from '@/Pages/Shared/Notification/Notification.svelte'
    import ItemInfo from '@/Pages/Shared/Notification/ItemInfo.svelte'

    import Swal from "sweetalert2"

    export let item
    export let bina
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
        <h2 class="subtitle">{bina.name}</h2>

        {#if notification}
            <Notification {notification} />
        {/if}

        <div class="column">

            <Link href="/sakinler/{bina.id}" >
                <span class="icon-text">
                    <span class="icon">
                        <Icon name="arrow_back" size="{gui.icons.size}" color="{gui.icons.color}"/> 
                    </span>
    
                    <span> Geri</span>
                </span>
            </Link> 
            
            <div class="card">
    
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">{item.name} {item.lastname}</p>

                            <table class="table is-fullwidth">

                                <tr>
                                    <td class="has-text-grey has-text-right">Kapı Numarası</td>
                                    <td>{item.door_no}</td>
                                </tr>

                                <tr>
                                    <td class="has-text-grey has-text-right">Ev Sahipliği Durumu</td>
                                    <td>{item.is_evsahibi == 1 ? "Ev Sahibi": "Kiracı"}</td>
                                </tr>

                                <tr>
                                    <td class="has-text-grey has-text-right">Telefon</td>
                                    <td>{item.phone}</td>
                                </tr>

                                <tr>
                                    <td class="has-text-grey has-text-right">Giriş Tarihi</td>
                                    <td>{item.giris_tarihi}</td>
                                </tr>

                                <tr>
                                    <td class="has-text-grey has-text-right">Ödeme Oranı</td>
                                    <td>%{item.payratio}</td>
                                </tr>

                                <tr>
                                    <td class="has-text-grey has-text-right">Notlar/Diğer Bilgiler</td>
                                    <td>{@html item.remarks != null ? item.remarks:''}</td>
                                </tr>

                            </table>


                        </div>
                    </div>
                
                </div>
    
    
                <footer class="card-footer">
    
                    <a href="/sakinler-form/{bina.id}/{item.id}" class="card-footer-item">
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

</Layout>