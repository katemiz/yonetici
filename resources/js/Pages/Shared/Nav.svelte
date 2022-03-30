<script>

    import {params,gui} from '@/config/config.js'

    import { page, Link } from '@inertiajs/inertia-svelte'
    import Icon from '@/Pages/Shared/Icon.svelte'

    let user = false

    if ($page.props.auth) {

        user = $page.props.auth.user
    }

    console.log("PAGE PROPS ",$page.props)

</script>

<nav class="navbar is-info">

    <div class="navbar-brand">

        <Link href="/" class="navbar-item has-text-white">
            <img src="/images/{params.app.app_header_logo}" alt="app logo" width="112" height="28" >        
        </Link>

        <Link href="/" class="navbar-item has-text-white">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>      
        </Link>

    </div>

    <div id="navbar_ana" class="navbar-menu">

        <div class="navbar-start" id="navstart">

            {#if user }

            <Link class="navbar-item" href="/"><Icon name="home" size="{gui.icons.size}" color="{gui.icons.color}"/></Link>
            <Link class="navbar-item" href="/summary"><Icon name="lira" size="{gui.icons.size}" color="{gui.icons.color}"/>&nbsp;Durum</Link>
            <Link class="navbar-item" href="/skills"><Icon name="skill" size="{gui.icons.size}" color="{gui.icons.color}"/>&nbsp;Gelirler</Link>
            <Link class="navbar-item" href="/"><Icon name="training" size="{gui.icons.size}" color="{gui.icons.color}"/>&nbsp;Giderler</Link>
            <Link class="navbar-item" href="/"><Icon name="measurement" size="{gui.icons.size}" color="{gui.icons.color}"/>&nbsp;Faturalar</Link>

            <div class="navbar-item has-dropdown is-hoverable">

                <p class="navbar-link" href="/Admin">Admin</p>

                <div class="navbar-dropdown">

                    <Link href="/tesisler" class="navbar-item">Bina ve Siteler</Link>

                    <hr class="navbar-divider">

                    <Link href="/" class="navbar-item">Reserved</Link>

                </div>

            </div>
            
            {/if}

        </div>


        <div class="navbar-end" >

            <div class="navbar-item">
                <div class="buttons">

                {#if user}

                    <div class="navbar-item has-dropdown is-hoverable">
                        <p class="navbar-link">
                            <Icon name="user" size="{gui.icons.size}" color="{gui.icons.color}"/>&nbsp;{user.lastname.toUpperCase()}
                        </p>
                
                        <div class="navbar-dropdown">

                            <p class="navbar-item">{user.name} {user.lastname}</p>

                            <Link href="/projects" class="navbar-item">Projects</Link>
                            <Link href="/logout" class="navbar-item" method="post">Logout</Link>

                        </div>
                    </div>

                {:else}

                    <Link href="/login" class="button is-ghost" as="button" preserveScroll>
                        <Icon name="user" size="{gui.icons.size}" color="{gui.icons.color}"/>&nbsp;Giriş
                    </Link>

                    <Link href="/register" class="button is-ghost" as="button" preserveScroll>
                        <Icon name="register" size="{gui.icons.size}" color="{gui.icons.color}"/>&nbsp;Kaydolun
                    </Link>

                {/if}

                </div>
            </div>

        </div>

    </div>

</nav>