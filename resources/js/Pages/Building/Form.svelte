<script>
    import { params,gui } from '@/config/config.js'
    import { page } from '@/config/config_building.js'
    
    import { Link } from '@inertiajs/inertia-svelte'
    import { Inertia } from '@inertiajs/inertia'

    import Layout from '@/Pages/Shared/Layout.svelte'
    import Editor from '@/Pages/Shared/Editor/Editor.svelte'
    import Icon from '@/Pages/Shared/Icon.svelte'

    export let item

    let editorProps
    let title
    let adress
    let processing = false
    let submitbutton
    let header

    let pageprops = page

    editorProps = pageprops.form.textarea

    // IF THIS IS EDIT
    if (item) {

        title = item.name
        adress = {
            html:item.adress,
        }
        editorProps.content = item.adress

        header = pageprops.headers.update
        submitbutton = pageprops.form.submit.update.label
    } else {

        header = pageprops.headers.new
        submitbutton = pageprops.form.submit.new.label
    }


    function readContent(event) {
		adress = event.detail.icerik
    }


    function handleSubmit() {

        let values = {
            title:title,
            adress:adress
        }

        if (item) {

            values.id = item.id
            Inertia.put('/tesisler-upsert', values,{
                onStart: () => {processing = true},
                onFinish: () => {processing = false},
            })

        } else {
            Inertia.post('/tesisler-upsert', values,{
                onStart: () => {processing = true},
                onFinish: () => {processing = false},
            })
        }
    }

</script>


<svelte:head>
  <title>{params.app.name} - {header}</title>
  <link href="/css/quill.snow.css" rel="stylesheet">
</svelte:head>
  

<Layout>

<div class="section container">

    <h1 class="title my-6 has-text-weight-light is-size-1 has-text-left">{header}</h1>

    <div class="column has-text-right">
        <Link href="/tsisler" class="navbar-item">
          <Icon name="list" size="{gui.icons.size}" color="link"/> Listeye Geri Dön
        </Link> 
    </div>

    <form on:submit|preventDefault={handleSubmit} class="mx-4">

        <div class="box">
                            
            <div class="field">
                <label class="label" for="titleid">{pageprops.form.input.label}</label>
                <div class="control" id="titleid">
                    <input class="input" bind:value={title} type="text" placeholder="{pageprops.form.input.placeholder}" >
                </div>
            </div>
                
            <Editor props={editorProps} on:editordata={readContent}/>

            <div class="buttons is-right">
                <button class="button is-info" disabled={processing}>{submitbutton}</button>
            </div>

        </div>

    </form>
</div>

</Layout>