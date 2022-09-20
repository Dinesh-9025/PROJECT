const validateEmail = (email:any) => {
    if (!email.length) {
      return { valid: false, error: "This field is required" };
    }
    if (!email.match(/^\w+([.-]?\w+)_@\w+(_[_.-]?\w+)_(.\w{2,3})+$/)) {
      return { valid: false, error: "Please, enter a valid email." };
    }
    return { valid: true, error: null };
  };
  
  const validatePassword = (password:any) => {
    if (!password.length) {
      return { valid: false, error: "This field is required" };
    }
    if (password.length < 8) {
      return { valid: false, error: "Password is too short" };
    }
    return { valid: true, error: null };
  };