<template>
    <div class="container">
        <nav-bar></nav-bar>
        <div class="container-2">
            <span class="title">Hi <b>Vadim!</b></span>
            <div class="search-container">
                <button class="btn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="currentColor"
                        class="bi bi-search"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                        />
                    </svg>
                </button>
                <input
                    class="input"
                    type="text"
                    placeholder="Find what you want..."
                />
            </div>
            <home></home>
        </div>
    </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Home from "./modules/clientes/components/Home.vue";
export default {
    components: {
        NavBar,
        Home,
    },
};
</script>

<style scoped>
.container {
    margin-top: 20px;
}
.title {
    font-size: 2rem;
    padding: 20px;
}
.search-container {
    display: flex;
    background-color: rgb(250, 248, 248);
    padding: 18px;
    margin: 15px 20px;
    border-radius: 30px;
}
.input {
    outline: none;
    border: 0;
    width: 100%;
    background: transparent;
    padding: 5px;
}
.btn {
    border: 0;
    border-radius: 50%;
    background-color: transparent;
    padding: 3px;
}
@media (min-width: 768px) {
    .search-container {
        padding: 3px;
    }
}
@media (min-width: 992px) {
    .container-2 {
        width: calc(100% - 220px);
    }
    .container {
        margin-top: 0;
        display: flex;
    }
}
</style>
