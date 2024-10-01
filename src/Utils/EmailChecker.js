const EmailChecker = (email = "tusharimranvip895@gmail.com") => {
     const emlailRgex = /^[a-z0-9]+([._-][0-9a-z]+)*@[a-z0-9]+([.-][0-9a-z]+)*\.[a-z]{1,3}$/
     const testResult = emlailRgex.test(email)
     return testResult
}
const PasswordChecker = (Password = "tusharimranvip895@gmail.com") => {
     const PasswordRgex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
     const testResult = PasswordRgex.test(Password)
     return testResult
}

module.exports = {EmailChecker,PasswordChecker}