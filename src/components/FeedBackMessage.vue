<template>
    <div class="feedback-container">
        <p class="success-feedback" v-if="isValid">{{successMessage}}</p>
        <p class="error-feedback" v-if="!isValid">{{errorMessage}}</p>
    </div>
</template>

<script>
export default {
    name: "FeedBackMessage",
    props: {
        valid: {
            type: Boolean,
            default: false
        },
        error: {
            type: String,
            default: ''
        },
        success: {
            type: String,
            default: ''
        }
    },
    created () {
        this.errorMessage = this.error;
        this.successMessage = this.success;
        this.isValid = this.valid;
    },
    data () {
        return {
            isValid: false,
            errorMessage: '',
            successMessage: ''
        }
    },
    watch: {
        valid: {
            immediate: true,
            handler (newVal) {
                this.isValid = newVal;
            }
        }
    }
}
</script>

<style scoped>
    .success-feedback {
        color: lawngreen;
    }
    .error-feedback {
        color: red;
    }
</style>