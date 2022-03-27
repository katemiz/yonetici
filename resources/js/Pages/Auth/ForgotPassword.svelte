<script>
    import {params,gui} from '@/config/config.js'
    import { useForm } from '@inertiajs/inertia-svelte'
    import Icon from '@/Pages/Shared/Icon.svelte'

    let form = useForm({
        email:'',
    })

    let submit = () => {
        $form.post('/forgot-password')
    }

</script>

<svelte:head>
  <style>
    html {
        height:100%;
    }
    body {
        background:#e6e6e6;
        min-height:100%;
    }
  </style>
</svelte:head>

<section class="section container is-max-desktop">

    <div class="column is-half is-offset-one-quarter has-background-white">

        <div class="column is-offset-3 is-offset-4-mobile is-6 is-4-mobile my-6">
            <figure class="image"><img src="/images/{params.app.app_header_logo}" alt="deneme"></figure>
        </div>

        <div class="notification is-warning is-light">
            Şifrenizi mi Unuttunuz?
            E-posta adresinizi aşağıdaki alana giriniz, size şifrenizi yenilemeniz için bir bağlantı göndereceğiz.
        </div>

        <form on:submit|preventDefault={submit} class="mx-4">

            <!-- Email Address -->
            <div class="field">

                <label class="label has-text-weight-light" for="email">E-posta</label>

                <div class="control has-icons-left has-icons-right">

                    <input class="input" bind:value={$form.email} type="email" placeholder="E-postanızı giriniz" required >

                    <span class="icon is-left">
                        <Icon name="mail" size="{gui.icons.size}" color="dark"/>
                    </span>

                    {#if $form.errors.email}
                        <p class="help is-danger">{$form.errors.email}</p>
                    {/if}
                </div>
            </div>

            <button class="button is-danger my-6 is-fullwidth">Şifremi Yenileyin</button>

            <div class="columns">
                <div class="column is-half">
                    <p class="is-size-6 has-text-weight-light my-3">
                        <a href="/login">Giriş</a>
                    </p>
                </div>

                <div class="column">
                    <p class="has-text-right is-size-6 has-text-weight-light my-3">
                        <a href="/register">Kaydolun</a>
                    </p>
                </div>
            </div>

        </form>

    </div>


    <div class="column is-half is-offset-one-quarter">

        <div class="columns is-vcentered">

            <div class="column">
                <img src="/images/{params.company.logo}" alt="Intro" width="24px">
            </div>

            <div class="column has-text-right">{params.company.name}</div>

        </div>

    </div>

</section>