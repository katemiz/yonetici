<script>
    import { params,gui } from '@/config/config.js'
    import { page } from '@/config/config_sakinler.js'
    
    import { Link } from '@inertiajs/inertia-svelte'
    import { Inertia } from '@inertiajs/inertia'

    import Layout from '@/Pages/Shared/Layout.svelte'
    import Editor from '@/Pages/Shared/Editor/Editor.svelte'
    import Icon from '@/Pages/Shared/Icon.svelte'

    export let item
    export let binalar

    console.log("binalar",binalar)

    let editorProps
    let isim
    let soyisim
    let bina
    let door_no
    let giris_tarihi
    let selected_bina_id
    let selectedIsEvsahibi
    let phone
    let remarks
    let processing = false
    let submitbutton
    let header

    let pageprops = page

    editorProps = pageprops.form.textarea

    // IF THIS IS EDIT
    if (item) {

        isim = item.name
        soyisim = item.lastname
        door_no = item.door_no
        bina = item.bina
        selected_bina_id = item.bina
        giris_tarihi = item.giris_tarihi
        selectedIsEvsahibi = item.is_evsahibi
        phone = item.phone
        remarks = {
            html:item.remarks,
        }
        editorProps.content = item.remarks

        header = pageprops.headers.update
        submitbutton = pageprops.form.submit.update.label

    } else {

        header = pageprops.headers.new
        submitbutton = pageprops.form.submit.new.label
    }


    function readContent(event) {
		remarks = event.detail.icerik
    }


    function handleSubmit() {

        let values = {
            name:isim,
            lastname:soyisim,
            door_no:door_no,
            bina:selected_bina_id,
            phone:phone,
            is_evsahibi:selectedIsEvsahibi,
            giris_tarihi:giris_tarihi,
            remarks:remarks
        }

        console.log("values",values)

        if (item) {

            values.id = item.id
            Inertia.put('/sakinler-upsert', values,{
                onStart: () => {processing = true},
                onFinish: () => {processing = false},
            })

        } else {
            Inertia.post('/sakinler-upsert', values,{
                onStart: () => {processing = true},
                onFinish: () => {processing = false},
            })
        }
    }


    function onRadioChange(event) {
		selectedIsEvsahibi = event.currentTarget.value;

        console.log("ddd",selectedIsEvsahibi)
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
        <Link href="/sakinler" class="navbar-item">
          <Icon name="list" size="{gui.icons.size}" color="link"/> Listeye Geri Dön
        </Link> 
    </div>

    <form on:submit|preventDefault={handleSubmit} class="mx-4">

        <div class="box">

            <div class="columns">
                <div class="column field">

                    <label class="label" for="bina">{pageprops.form.bina.label}</label>
                    <div class="control" id="bina">
        
                        <div class="select is-fullwidth">
                            <select bind:value={selected_bina_id}>
                                <option value="NotSelected">Bina ...</option>
        
                                {#if binalar.length >0}
                                {#each binalar as bina}
                                    <option value="{bina.id}">                                   
                                        {bina.name}
                                    </option>
                                {/each}
                                {/if}
                            </select>
                        </div>
        
                    </div>
                </div>
            </div>


            <div class="columns">
                         
                <div class="column field is-half">
                    <label class="label" for="name">{pageprops.form.input.label}</label>
                    <div class="control" id="name">
                        <input class="input" bind:value={isim} type="text" placeholder="{pageprops.form.input.placeholder}" >
                    </div>
                </div>

                <div class="column field">
                    <label class="label" for="surname">{pageprops.form.input2.label}</label>
                    <div class="control" id="surname">
                        <input class="input" bind:value={soyisim} type="text" placeholder="{pageprops.form.input2.placeholder}" >
                    </div>
                </div>
            </div>


            <div class="columns">

                <div class="column field is-half">

                    <label class="label" for="door">{pageprops.form.input3.label}</label>
                    <div class="control" id="door">
                        <input class="input" bind:value={door_no} type="number" placeholder="{pageprops.form.input3.placeholder}" >
                    </div>
                </div>

                <div class="column field">
                    <label class="label" for="evsahibi">{pageprops.form.evsahibi.label}</label>

                    <div class="control" id="evsahibi">
                        <label class="radio">
                          <input type="radio" on:change={onRadioChange} checked={selectedIsEvsahibi===1} value="1">
                          Ev Sahibi
                        </label>
                        <br>
                        <label class="radio">
                          <input type="radio" on:change={onRadioChange} checked={selectedIsEvsahibi===0} value="0">
                          Kiracı
                        </label>
                    </div>

                </div>

            </div>



            <div class="columns">

                <div class="column field is-half">

                    <label class="label" for="phone">{pageprops.form.phone.label}</label>
                    <div class="control" id="phone">
                        <input class="input" bind:value={phone} type="tel" placeholder="{pageprops.form.input3.placeholder}" >
                    </div>
                </div>

                <div class="column field">
                    <label class="label" for="giris">{pageprops.form.date.label}</label>
                    <div class="control" id="giris">
                        <input type="date" bind:value="{giris_tarihi}">
                    </div>
                
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