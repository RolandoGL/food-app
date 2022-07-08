<template>
    <div class="navbar-container">
        <div class="navbar-content">
            <i class="menu-btn">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-list"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                </svg>
            </i>
            <a class="navbar-link" href=""
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-house-door-fill"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"
                    /></svg
            ></a>
            <a class="navbar-link" href="">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-basket2-fill"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z"
                    />
                </svg>
            </a>
            <a class="navbar-link" href="">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    />
                </svg>
            </a>
            <a class="navbar-link" href="">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-clock-fill"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                    />
                </svg>
            </a>
            <a href="" class="navbar-link">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                </svg>
            </a>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.menu-btn {
    display: none;
}
.navbar-content {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100vw;
    background-color: white;
    z-index: 100;
}

.navbar-link {
    text-decoration: none;
    color: rgb(163, 163, 163);
}

.router-link-exact-active {
    color: rgb(255, 131, 62);
}
@media (min-width: 992px) {
    .menu-btn {
        display: block;
        text-align: end;
        order: 1;
        cursor: pointer;
        padding: 2px;
    }
    .menu-btn svg:hover {
        background: rgb(250, 248, 248);
        border-radius: 50%;
    }
    .navbar-container {
        width: auto;
    }
    .navbar-content {
        flex-direction: column;
        position: relative;
        width: 200px;
        height: 100%;
        box-shadow: 0 0 12px #c9c7c7;
        justify-content: flex-start;
    }
    .navbar-content a {
        position: relative;
        padding: 15px;
        order: 3;
    }
    .navbar-content a:nth-child(2)::after {
        content: "Inicio";
        padding: 4px;
        position: absolute;
    }
    .navbar-content a:nth-child(3)::after {
        content: "Mi carrito";
        padding: 4px;
        position: absolute;
    }
    .navbar-content a:nth-child(4)::after {
        content: "Favoritos";
        padding: 4px;
        position: absolute;
    }
    .navbar-content a:nth-child(5)::after {
        content: "Historial de compras";
        padding: 4px;
        position: absolute;
    }
    .navbar-content a:nth-child(6) {
        order: 2;
    }
    .navbar-content a:nth-child(6)::after {
        content: "Mi cuenta";
        padding: 4px;
        position: absolute;
    }
}
</style>
