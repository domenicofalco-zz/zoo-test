export default {
  errorPlacement: () => true,
  rules: {
    firstName: {
      required: true
    },
    lastName: {
      required: true
    },
    street: {
      required: true
    },
    gender: {
      required: true
    }
  },
  messages: {
    firstName: {
      required: 'First Name is required'
    },
    lastName: {
        required: 'Last Name is required'
    },
    street: {
      required: 'Street is required'
    },
    gender: {
      required: 'Gender is required'
    }
  }
}