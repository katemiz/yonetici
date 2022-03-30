<script>

    import { gui } from '@/config/config.js'
    import { parameters } from '@/config/config_parameters.js'

    import { Link } from '@inertiajs/inertia-svelte'

    import Layout from '@/Pages/Shared/Layout.svelte'
    import Icon from '@/Pages/Shared/Icon.svelte'
    import Notification from '@/Pages/Shared/Notification/Notification.svelte'

    export let settings
    export let bina 
    export let notification

    if (settings == null) {
        settings = {}
    }
</script>

<Layout>

    <div class="section container">

        <h1 class="title has-text-weight-light">Ayarlar</h1>
        <h2 class="subtitle">{bina.name} Değerleri</h2>

        <div class="columns">

            <div class="column">
                <Link href="/tesisler/{bina.id}">
                    <span class="icon-text">
                        <span class="icon"><Icon name="arrow_back" size="{gui.icons.size}" color="link"/></span>
                        </span>Geri<span>
                    </span>
                </Link> 
            </div>

        </div>


        {#if notification}
        <Notification {notification} />
        {/if}


        <div class="card">
        <div class="card-content">

            <table class="table is-fullwidth">

                {#each parameters as parameter}

                <tr>
                    <th class="has-text-grey has-text-right">{parameter.label}</th>
                    <td class=" has-text-right">{settings[parameter.id] ? settings[parameter.id] : 'Henüz Belirlenmemiş'}</td>
                    <td>{@html parameter.unit}</td>
                </tr>

                {/each}

            </table>

            <div class="buttons is-right">
                <Link href="/settings-form/{bina.id}" class="button is-link is-light">
                    <span class="icon-text">
                        <span class="icon">
                            <Icon name="edit" size="{gui.icons.size}" color="{gui.icons.color}"/> 
                        </span>
        
                        <span> Değiştir</span>
                    </span>
                </Link> 
            </div>

        </div>
        </div>


    </div>
</Layout>
