import { mapGetters } from 'vuex'

export default {
  methods: {
    logConsole(param) {
      console.log(param)
    },
    incrementQuantity() {
      if (this.quantity && this.quantity < 20) this.quantity++
      else {
        this.$root.$emit('snackbar', {
          text: "You've reached max quantity",
        })
      }
    },
    decrementQuantity() {
      if (this.quantity === 1) return
      if (this.quantity) this.quantity--
    },
    isLoggedIn() {
      return this.loggedIn ? this.$router.push('/') : true
    },
    getFormattedDate(date) {
      if (date) return this.$dayjs(date).format('D MMM YYYY')
    },
  },
  computed: {
    displayName() {
      return this.getUser.email.split('@')[0]
    },
    ...mapGetters({
      products: 'products/products',
      cart: 'products/cart',
      getUser: 'user/getUser',
      loggedIn: 'user/isLoggedIn',
      grandTotal: 'products/getGrandTotal',
      getTotalCartItems: 'products/getTotalCartItems',
    }),
  },
}
