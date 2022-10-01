<template>
    <div class="app">
        <ul>
            <li>
                <p>dark mode</p>
                <input type="checkbox" id="switch" /><label for="switch"
                    >Toggle</label
                >
            </li>
        </ul>
    </div>
</template>

<style scoped>
/* I used switch from this codePen: https://codepen.io/mburnette/pen/LxNxNg */
.app {
    padding-top: 60px;
}
input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
}

label {
    cursor: pointer;
    text-indent: -9999px;
    width: 70px;
    height: 34px;
    background: #34495e;
    display: block;
    border-radius: 100px;
    position: relative;
}

label:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 30px;
    height: 30px;
    background: #ecf0f1;
    border-radius: 90px;
    transition: 0.3s;
}

input:checked + label {
    background: #3498db;
}

input:checked + label:after {
    left: calc(100% - 2px);
    transform: translateX(-100%);
}

label:active:after {
    width: 30px;
}

p {
    color: black;
}

ul{
    padding-left: 25px;
}

li{
    display: flex;
}
</style>