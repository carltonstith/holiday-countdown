<template>
    <div class="dashboard container">
        <div class="row">
            <div class="container mt-4">
                    <h1 class="display-4 text-center">
                    <i class="fas fa-gifts"></i> <span class="text-primary">{{ user.username }}'s</span>ChristmasList</h1>
                    <input 
                        type="text" 
                        class="form-control"
                        v-bind:class="{formControl: formControl}"
                        placeholder="Add item..." v-on:keyup.enter="addToChristmasList">
                    <div class="christmasListForm">
                        <ul>
                        <li 
                            v-for="christmasListItem in christmasListItems" :key="christmasListItem.id" 
                            class="itemsInline">
                            <label>
                                <input 
                                    type="checkbox" 
                                    v-model="christmasListItem.done">
                                <span>&nbsp;</span>
                            </label>
                            <del v-if="christmasListItem.done">{{ christmasListItem.gift }}</del>
                            <span v-else>{{ christmasListItem.gift }}</span>
                            <div class="space"></div>
                            <button class="btn btn-danger" @click="removeChristmasListItem(christmasListItem.id)">X</button>
                        </li>
                        </ul>
                    </div>
                    <!-- <form id="christmas-list-form" v-for="item in christmasList" :key="item">
                        <div class="form-group">
                            <label for="gift">Gift</label>
                            <input 
                                v-model="christmasList.gift" 
                                ref="gift" 
                                type="text" 
                                id="gift" 
                                class="form-control">
                        </div>
                        <div class="form-group">
                            <label 
                            for="recipient">Recipient</label>
                            <input 
                                v-model="christmasList.recipient"
                                ref="recipient"
                                type="text" 
                                id="recipient" 
                                class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="cost">Cost</label>
                            <input 
                                v-model="christmasList.cost"
                                ref="cost"
                                type="text" 
                                id="cost" 
                                class="form-control">
                        </div>
                            <input 
                            @click="addToChristmasList" 
                            value="+" 
                            class="btn btn-primary btn-block" style="font-family: FontAwesome">
                    </form>
                    <table class="table table-striped mt-5">
                    <thead>
                        <tr>
                        <th>Gift</th>
                        <th>Recipient</th>
                        <th>Cost</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody id="christmas-list" ref="christmasList"></tbody>
                    </table> -->
                </div>
        </div>
    </div>  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'dashboard',
    data() {
        return {
            christmasListItems: [
                {
                    gift: 'Raspberry Pi',
                    done: false,
                    id: Date.now()
                }
            ],
            formControl: true
        }
    },
    computed: mapGetters(['user']),
    created() {
        this.getProfile();
    },
    methods: {
        ...mapActions(['getProfile']),
        addToChristmasList({target}) {
            this.christmasListItems.push({gift: target.value, id: Date.now()})
            target.value = ''
        },
        removeChristmasListItem(id) {
            this.christmasListItems = this.christmasListItems.filter(christmasListItem => christmasListItem.id !== id)
        }
    },
}
</script>

<style lang="scss">
.dashboard {
    height: 100vh;
    display: flex;
    align-items: center;
    margin: auto;

    .christmasListForm {
        margin: auto;
        width: 100%;
    }

    span {
        color: #F4F2F3;
    }
    // Dashoard 
    .formControl {
        color: #F4F2F3 !important;
    }
    th {
        color: #F4F2F3;
    }
    .form-group {
        color: #F4F2F3;
    }
    .itemsInline {
        display: flex;
        justify-content: space-between;
        margin: 1rem auto;
    }
    del {
        color: #F4F2F3;
    }
}

</style>