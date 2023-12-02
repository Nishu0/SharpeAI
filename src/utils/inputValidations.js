export const name_validation = {
    name: 'name',
    label: 'name',
    type: 'text',
    multiType : false,
    id: 'name',
    placeholder: 'write your name ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 30,
        message: '30 characters max',
      },
    },
  }
  
  export const desc_validation = {
    name: 'description',
    label: 'transaction Description',
    multiline: true,
    id: 'description',
    placeholder: 'write transaction description ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 200,
        message: '200 characters max',
      },
    },
  }
  
  export const walletAddress_validation = {
    name: 'walletAddress',
    label: 'wallet address',
    type: 'text', 
    multiType: false,
    id: 'walletAddress',
    placeholder: 'Enter a valid wallet address',
    validation: {
      required: {
        value: true,
        message: 'Required',
      },
      pattern: {
        value: /^[a-zA-Z0-9]{34,}$/g, // Adjust the pattern based on your specific requirements
        message: 'Invalid wallet address',
      },
    },
  };