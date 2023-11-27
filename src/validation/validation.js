export const validationSendRequest = ({sum, wallet}) => {
    try {
      let arr = [];

      if(!sum || sum <= 0) {
        arr.push({
          isValid: false,
          error: 'The amount cannot be 0 or less',
          reason: 'sum'
        })
      }
      if(!wallet || wallet.length < 1) {
        arr.push({
          isValid: false,
          error: 'The address cannot be empty',
          reason: 'wallet'
        })
      }

      return arr;

    } catch (e) {
      console.log(e);
    }
  };