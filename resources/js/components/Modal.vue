<template>
    <div class="modal-container fade-in" @click.self="$emit('on:close')">
        <div class="modal-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    emits: ["on:close"],
};
</script>

<style>
.btn {
    background: transparent;
    border: 0;
    padding: 4px;
    cursor: pointer;
}
.btn-close {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 1.5rem;
    color: rgb(255, 131, 62);
}
.btn-save,
.btn-cancel {
    font-size: 1.09rem;
    margin-left: 5px;
    box-shadow: 0 0 6px 0px gainsboro;
    border-radius: 5px;
}
.modal-container {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
    z-index: 1000;
}
.modal-content {
    width: 90%;
    height: 80%;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 0 0 14px 5px #0000004d;
    margin: 0 10px;
}
.modal-header {
    padding: 10px;
    position: relative;
}
.modal-body {
    flex-grow: 1;
    padding: 10px;
    max-height: 350px;
    overflow: auto;
}
.modal-footer {
    border-top: 3px solid gainsboro;
    padding: 10px;
    text-align: end;
}

.fade-in {
    animation: fadeIn ease-out 0.2s;
    -webkit-animation: fadeIn ease-out 0.2s;
    -moz-animation: fadeIn ease-out 0.2s;
    -o-animation: fadeIn ease-out 0.2s;
    -ms-animation: fadeIn ease-out 0.2s;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@-moz-keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@-webkit-keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@-o-keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@-ms-keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@media (min-width: 768px) {
    .modal-content {
        width: 80%;
        height: 60%;
    }
    .modal-body {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: flex-start;
    }
}
@media (min-width: 992px) {
    .modal-content {
        width: 50%;
    }
}
</style>
<!-- <div >
                <h1>modal title</h1>
                <button class="btn btn-close">
                    <i class="fa-solid fa-circle-xmark"></i>
                </button>
            </div> -->
<!-- <div class="modal-body">
                <input type="text" placeholder="write something" />
                <input type="text" placeholder="write something" />
                <input type="text" placeholder="write something" />
                <input type="text" placeholder="write something" />
                <input type="text" placeholder="write something" />
            </div> -->
<!-- <div class="modal-footer">
                <button class="btn btn-cancel">
                    <i class="fa-solid fa-circle-xmark"></i> cancelar
                </button>
                <button class="btn btn-save">
                    <i class="fa-solid fa-floppy-disk"></i> Guardar
                </button>
            </div> -->
