<script>
    import { params,gui } from '@/config/config.js'
    import { page } from '@/config/config_sakinler.js'
    
    import { Link } from '@inertiajs/inertia-svelte'
    import { Inertia } from '@inertiajs/inertia'

    import Layout from '@/Pages/Shared/Layout.svelte'
    import Editor from '@/Pages/Shared/Editor/Editor.svelte'
    import Icon from '@/Pages/Shared/Icon.svelte'

    export let item
    export let bina

    let editorProps
    let isim
    let soyisim
    let door_no
    let giris_tarihi
    let payratio
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
        payratio = item.payratio
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
            payratio:payratio,
            phone:phone,
            is_evsahibi:selectedIsEvsahibi,
            giris_tarihi:giris_tarihi,
            remarks:remarks
        }

        if (item) {

            values.id = item.id
            Inertia.put('/sakinler-upsert/'+bina.id, values,{
                onStart: () => {processing = true},
                onFinish: () => {processing = false},
            })

        } else {
            Inertia.post('/sakinler-upsert/'+bina.id, values,{
                onStart: () => {processing = true},
                onFinish: () => {processing = false},
            })
        }
    }


    function onRadioChange(event) {
		selectedIsEvsahibi = event.currentTarget.value;
	}

</script>


<svelte:head>
  <title>{params.app.name} - {header}</title>
  <link href="/css/quill.snow.css" rel="stylesheet">
</svelte:head>
  

<Layout>

<div class="section container">

    <h1 class="title mt-6 has-text-weight-light is-size-1 has-text-left">{header}</h1>
    <h2 class="subtitle">{bina.name} Sakini</h2>


    <div class="column">

        <Link href="/sakinler/{bina.id}{item ? '/'+item.id : ''}" >
            <span class="icon-text">
                <span class="icon">
                    <Icon name="arrow_back" size="{gui.icons.size}" color="{gui.icons.color}"/> 
                </span>

                <span> Geri</span>
            </span>
        </Link> 

    </div>

    <form on:submit|preventDefault={handleSubmit} class="mx-4">

        <div class="box">

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

                    <label class="label" for="payratio">{pageprops.form.payratio.label}</label>
                    <div class="control" id="payratio">
                        <input class="input" bind:value={payratio} type="number" min="{pageprops.form.payratio.min}" max="{pageprops.form.payratio.max}" placeholder="{pageprops.form.payratio.placeholder}" >
                    </div>
                </div>


                <div class="column notification is-warning is-light">
                    {@html pageprops.form.payratio.note}
                    <p class="subtitle">[%{pageprops.form.payratio.min}-%{pageprops.form.payratio.max} arasında olmalıdır]</p>
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