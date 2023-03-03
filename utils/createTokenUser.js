const createTokenUser = (user) => {
    return {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        userId: user._id,
        role: user.role,
        image: user.image
    };
};

module.exports = createTokenUser;