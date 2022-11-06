<template>
    <div class="container">
        <q-card class="my-card">
            <q-card-section>
                <div class="text-subtitle2">by John Doe</div>
            </q-card-section>

            <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>

            <q-separator dark />

            <q-card-actions>
                <q-btn flat round color="negative" icon="delete" />
                <q-btn flat round color="primary" icon="edit" />
            </q-card-actions>
        </q-card>

        <q-card class="my-card">
            <q-card-section>
                <div class="text-subtitle2">by John Doe</div>
            </q-card-section>

            <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>

            <q-separator dark />

            <q-card-actions>
                <q-btn flat round color="negative" icon="delete" />
                <q-btn flat round color="primary" icon="edit" />
            </q-card-actions>
        </q-card>

        <q-card class="my-card">
            <q-card-section>
                <div class="text-subtitle2">by John Doe</div>
            </q-card-section>

            <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>

            <q-separator dark />

            <q-card-actions>
                <q-btn flat round color="negative" icon="delete" />
                <q-btn flat round color="primary" icon="edit" />
            </q-card-actions>
        </q-card>

        <q-card class="my-card">
            <q-card-section>
                <div class="text-subtitle2">by John Doe</div>
            </q-card-section>

            <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>

            <q-separator dark />

            <q-card-actions>
                <q-btn flat round color="negative" icon="delete" />
                <q-btn flat round color="primary" icon="edit" />
            </q-card-actions>
        </q-card>

        <q-card class="my-card">
            <q-card-section>
                <div class="text-subtitle2">by John Doe</div>
            </q-card-section>

            <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>

            <q-separator dark />

            <q-card-actions>
                <q-btn flat round color="negative" icon="delete" />
                <q-btn flat round color="primary" icon="edit" />
            </q-card-actions>
        </q-card>

        <q-card class="my-card">
            <q-card-section>
                <div class="text-subtitle2">by John Doe</div>
            </q-card-section>

            <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>

            <q-separator dark />

            <q-card-actions>
                <q-btn flat round color="negative" icon="delete" />
                <q-btn flat round color="primary" icon="edit" />
            </q-card-actions>
        </q-card>
        <div class="inputSection">
            <q-input v-model="text" label="Add note" class="textInput" />
            <q-btn flat round color="primary" icon="send" class="sendButton" />
        </div>
    </div>
</template>

<style scoped>
.container {
    margin-top: 50px;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    max-height: calc(100vh - 170px);
    margin-left: auto;
    margin-right: auto;
    width: 500px;
    overflow-y: auto;
}

.my-card {
    margin-bottom: 20px;
}

.inputSection {
    width: 470px;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.textInput {
    width: calc(100% - 100px);
}

.sendButton {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>