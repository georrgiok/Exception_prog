class WrongPasswordException extends Error {
  constructor(message = 'Wrong password') {
    super(message);
    this.name = 'WrongPasswordException';
  }
}

class WrongLoginException extends Error {
  constructor(message = 'Wrong login') {
    super(message);
    this.name = 'WrongLoginException';
  }
}

function validateCredentials(login, password, confirmPassword) {
  try {
    const loginRegex = /^[a-z0-9_]{1,20}$/i;
    const passwordRegex = /^[a-z0-9_]{1,20}$/i;
    if (!loginRegex.test(login)) {
      throw new WrongLoginException();
    }
    if (!passwordRegex.test(password) || password !== confirmPassword) {
      throw new WrongPasswordException();
    }
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}