<template>
    <div class="card">
        <div class="pageContent">
            <h2>{{ title }}</h2>
            <p>{{ desc }}</p>
            <a :href="'https://' + url">{{ url }}</a>
        </div>

        <div class="controls">
            <button>
                <img src="../assets/delete.svg" class="buttonIcon" alt="" />
            </button>
            <button>
                <img src="../assets/edit.svg" class="buttonIcon" alt="" />
            </button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: { type: String, default: "" },
    desc: { type: String, default: "" },
    url: { type: String, default: "" },
});
</script>

<style scoped>
.card {
    width: 90%;
    margin-bottom: 10px;
    padding: 10px;
    height: 270px;
    border-radius: 15px;
    background-color: #ecf0f1;
    filter: drop-shadow(0px 0px 6px #34495e76);
}

h2 {
    font-size: 1.5em;
    color: #000000;
    font-weight: 700;
    text-overflow: ellipsis;
}

p {
    color: #000000;
    text-overflow: ellipsis;
}

button {
    border: none;
    background: none;
}

.buttonIcon {
    width: 30px;
}

.pageContent{
    height: 220px;
}

.controls {
    display: flex;
    justify-content: space-between;
    height: 30px;
}
</style>