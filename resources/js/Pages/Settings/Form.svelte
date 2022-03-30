<script>

    import { gui } from '@/config/config.js'
    import { parameters } from '@/config/config_parameters.js'
    import { checkSettingTime } from '@/Pages/Shared/Functions/time.js'

    import { Link } from '@inertiajs/inertia-svelte'
    import { Inertia } from '@inertiajs/inertia'

    import Layout from '@/Pages/Shared/Layout.svelte'
    import Icon from '@/Pages/Shared/Icon.svelte'

    export let settings
    export let bina 




    let processing = false

    if (settings == null) {
        settings = {}
    }

    settings.bina = bina.id

    console.log("settings 1",settings)


    function handleSubmit() {

        console.log("settings 2",settings)







        if (settings.updated_at != null && checkSettingTime(settings.updated_at) > 60*60*24*4) {

            console.log(checkSettingTime(settings.updated_at))

            Inertia.put('/settings-update/'+bina.id, settings,{
                onStart: () => {processing = true},
                onFinish: () => {processing = false},
            })

        } else {

            console.log("settings",settings)


            Inertia.post('/settings-create/'+bina.id, settings,{
                onStart: () => {processing = true},
                onFinish: () => {processing = false},
            })

        }


    }


</script>




<Layout>

    <div class="section container">
    
        <h1 class="title has-text-weight-light">Ayarlar</h1>
        <h2 class="subtitle">{bina.name} Değerleri</h2>
    
        <div class="column has-text-right">
            <Link href="/tesisler{bina ? "/"+bina.id : ''}" class="navbar-item">
              <Icon name="arrow_back" size="{gui.icons.size}" color="link"/> Geri
            </Link> 
        </div>
    
        <form on:submit|preventDefault={handleSubmit} class="mx-4">
    
            <div class="box">
                                
                {#each parameters as parameter}

                    <div class="field">
        
                        <label class="label" for="{parameter.id}">{parameter.label} [{@html parameter.unit}]</label>
        
                        <div class="control" id="{parameter.id}">
                            <input class="input"  bind:value="{settings[parameter.id]}" type="number" step="any" placeholder="{parameter.placeholder}" >
                        </div>
        
                    </div>
    
                {/each}
    
                <div class="buttons is-right">
                    <button class="button is-link is-light" disabled={processing}>Ayarları Güncelle</button>
                </div>

            </div>
    
        </form>
    </div>
    
</Layout>