<template>
    <div class="container">
        <button class="btn">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-heart-fill"
                viewBox="0 0 16 16"
            >
                <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
            </svg>
        </button>
        <div class="product-header">
            <span>Meat <b>Mania</b></span>
            <div>
                <img
                    src="https://media-cdn.tripadvisor.com/media/photo-p/19/49/1b/d4/caption.jpg"
                    alt=""
                />
            </div>
        </div>
        <div class="product-container">
            <div class="product-info">
                <span>523 kkal</span>
                <span>800 gr</span>
                <span>80 min</span>
            </div>
            <div class="product-description">
                <div class="btn-inc-dec">
                    <button>+</button>
                    <span>1</span>
                    <button>-</button>
                </div>
                <p>
                    Meat lovers, get ready to meet your match! Loaded with beef,
                    beef sausages ground beef.
                </p>
            </div>
            <div class="product-add">
                <button>add to cart</button>
                <span>$14.6</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    font-family: "Roboto Condensed", sans-serif;
}

.container {
    width: 100%;
    height: 100vh;
}

.btn {
    background-color: transparent;
    border: 0;
    padding: 10px 20px 0 0;
    float: right;
    cursor: pointer;
}

.product-header {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    overflow: hidden;
}

.product-header span {
    font-size: 2rem;
    padding: 10px 20px;
}

.product-header div {
    width: 100%;
    height: 100%;
}

.product-header div img {
    width: 100%;
    height: 250px;
    object-fit: contain;
    object-position: center;
    padding: 5px;
}

.product-info {
    display: flex;
    justify-content: space-around;
    padding: 20px;
}

.product-info span {
    position: relative;
}

.product-info span::after {
    content: "";
    position: absolute;
    bottom: -19px;
    left: 0px;
    width: 100%;
    text-align: center;
    font-size: 12px;
}

.product-info span:nth-child(1):after {
    content: "Energía";
}

.product-info span:nth-child(2):after {
    content: "Peso";
}

.product-info span:nth-child(3):after {
    content: "Entrega";
}

.product-description {
    display: flex;
    padding: 30px 40px;
    height: 100px;
    overflow: auto;
}

.btn-inc-dec {
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: center;
}

.btn-inc-dec button {
    background-color: transparent;
    border: 0;
    padding: 5px;
    font-size: 1.5rem;
    cursor: pointer;
}

.btn-inc-dec span {
    padding: 5px;
}

.product-description p {
    width: 85%;
    line-height: 25px;
}

.product-add {
    padding: 0 40px;
    display: flex;
    margin-bottom: 20px;
}

.product-add button {
    border: 0;
    padding: 10px;
    border-radius: 20px;
    font-size: 1.1rem;
    background-color: rgb(255, 131, 62);
    color: white;
    flex-grow: 1;
    cursor: pointer;
}

.product-add span {
    color: rgb(255, 131, 62);
    font-size: 2rem;
    font-weight: 800;
    padding: 10px;
    text-align: right;
}

@media (min-width: 768px) {
    .container {
        display: flex;
    }
    .btn {
        position: absolute;
        right: 0;
    }
    .product-header {
        width: auto;
    }
    .product-container {
        flex-grow: 1;
    }
    .product-info {
        padding: 40px 20px 20px 20px;
    }
    .product-description {
        width: 70%;
        margin: auto;
    }
    .product-add {
        width: 70%;
        margin: 0 auto 20px auto;
    }
    .product-add button {
        width: 150px;
        flex: none;
    }
}
</style>
