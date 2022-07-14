<template>
    <div class="card-container">
        <div class="card-content">
            <div class="card-text">
                <h4>Free combo</h4>
                <p>Burger + Coca-cola for new users</p>
            </div>
            <div class="card-image">
                <img
                    src="https://st.depositphotos.com/1177973/2305/i/600/depositphotos_23055320-stock-photo-tasty-cheeseburger-with-fried-potatoes.jpg"
                    alt=""
                />
            </div>
        </div>
    </div>
    <div class="categories-container">
        <div class="categories-content">
            <a class="category-link" href="">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-egg-fill"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M14 10a6 6 0 0 1-12 0C2 5.686 5 0 8 0s6 5.686 6 10z"
                    />
                </svg>
            </a>
        </div>
    </div>
    <div style="margin-bottom: 52px">
        <span class="title">Top products</span>
        <div class="top-products-container">
            <div class="top-products-item">
                <div class="cc">
                    <div class="product-image">
                        <img
                            src="https://st.depositphotos.com/1177973/2305/i/600/depositphotos_23055320-stock-photo-tasty-cheeseburger-with-fried-potatoes.jpg"
                            alt=""
                            width=""
                        />
                    </div>
                    <div class="product-inf">
                        <h4>Pizza de peperoni</h4>
                        <h3>$99.00 MXN</h3>
                        <button class="btn btn-plus">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="37"
                                height="35"
                                fill="currentColor"
                                class="bi bi-plus"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {};
</script>

<style scoped>
.title {
    font-size: 2rem;
    padding: 20px;
}

.btn {
    border: 0;
    border-radius: 50%;
    background-color: transparent;
    padding: 3px;
}

.card-container {
    background: rgb(74, 174, 84);
    margin: 10px 30px;
    border-radius: 20px;
}
.card-content {
    display: flex;
}
.card-text,
.card-image {
    padding: 20px;
    width: 50%;
}
.card-text {
    color: white;
}
.card-image img {
    border-radius: 5px;
    width: 100%;
}
.categories-content {
    padding: 5px;
    overflow-y: auto;
    display: flex;
    justify-content: space-between;
}
.category-link {
    text-decoration: none;
    color: rgb(255, 131, 62);
    padding: 20px;
    background-color: rgb(250, 248, 248);
    border-radius: 10px;
    margin: 5px;
}
.top-products-container {
    display: flex;
    overflow: auto;
    width: 100%;
}
.cc {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
.top-products-item {
    background-color: rgb(250, 248, 248);
    border-radius: 30px;
    padding: 25px;
    margin: 0 10px;
    width: 400px;
    height: 250px;
    min-width: 200px;
    min-height: 300px;
}
.product-inf {
    position: relative;
    padding-top: 10px;
}
.product-image {
    width: 100%;
    height: 80%;
    overflow: hidden;
}

.product-image img {
    border-radius: 5px;
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: center;
}

.btn-plus {
    position: absolute;
    right: 0;
    top: 5px;
    color: white;
    background-color: rgb(74, 174, 84);
}

.top-products-container::-webkit-scrollbar {
    display: none;
}

.top-products-container:hover::-webkit-scrollbar {
    display: initial;
}

.top-products-container::-webkit-scrollbar-thumb {
    background-color: rgba(0, 153, 204, 0);
}

@media (min-width: 768px) {
    .search-container {
        padding: 3px;
    }

    .card-container {
        height: 300px;
    }

    .card-text {
        align-self: center;
        font-size: 2rem;
        height: max-content;
    }

    .card-image {
        height: 270px;
        overflow: hidden;
    }

    .card-image img {
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
}

@media (min-width: 992px) {
    
    .card-container {
        width: 90%;
        margin: auto;
        height: 330px;
    }

    .card-text {
        align-self: center;
        font-size: 3rem;
        height: max-content;
    }

    .card-image {
        height: 300px;
    }
}
</style>
