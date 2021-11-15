import jwt from 'jsonwebtoken';

const generateToken = (id) => {
    return jwt.sign({id}, "V2fuQWY19kj2IfnT", {
        expiresIn: "30d",
    });
}

export default generateToken;