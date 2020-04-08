function SignInBuilder({ authService, userDb }) {
    return async function signIn({ body }) {
        const { emailAddress, password } = body;
        if (!emailAddress || !password)
           return throwError('Email addess or password is not valid');

        const user = await userDb.findOne({ emailAddress: emailAddress });
        if (!user)
           return throwError('Email address did not match');

        const isMatched = authService.compare( password,user.passwordHash);

        if (isMatched)
            return new Promise((resolve, reject) => {
                const token = authService.generateJWT(user, 'secret');
                console.log(token);
                resolve({ token });
            })

        return throwError('Password did not match');
    }

    function throwError(message) {
        return new Promise((resolve, reject) => {
            reject(message);
        })
    }
}

module.exports=SignInBuilder;