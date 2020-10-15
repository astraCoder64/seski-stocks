const { db } = require('./admin');
const {regEx,regEx2}=require('./needed_values');

const isEmail = (email) => {

    if (email.match(regEx)) return true;
    else return false;
  };

  const isMobile= (mobile)=>{
   
    if(mobile.match(regEx2))return true;
    else return false;
  }
  
  const isEmpty = (dx) => {
    if (dx.trim() === '') return true;
    else return false;
  };

  exports.validateSignupData = (data) => {
    let errors = {};
    if(isEmpty(data.name))
    {
        errors.name='Must not be empty';
    }

    if (isEmpty(data.email)) {
      errors.email = 'Must not be empty';
    } else if (!isEmail(data.email)) {
      errors.email = 'Must be a valid email address';
    }
  
    if (isEmpty(data.password)) errors.password = 'Must not be empty';
    if (data.password !== data.confirmPassword)
      errors.confirmPassword = 'Passwords must match';

    if(isEmpty(data.mobile)){
      error.mobile='Enter valid mobile number'
    }
    else if(!isMobile(data.mobile))
    {
      errors.mobile='Must be a valid phone number';
    }
   
  
    return {
      errors,
      valid: Object.keys(errors).length === 0 ? true : false
    };
  };

  exports.isValidStocks= (data,email)=>{
    let errors={};
    let cnt=0;
      data.forEach(item => {
        cnt++;
      });
      
      if(cnt===0)
      {
        errors.stock_data='No stock data';
      }
      
       return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
      };
  };