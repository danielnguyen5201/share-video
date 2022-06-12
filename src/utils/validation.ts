export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

    if (!email)
        return false;

    if(email.length>254)
        return false;

    const valid = emailRegex.test(email);

    if(!valid)
        return false;

    const parts = email.split("@");

    if(parts[0].length>64)
        return false;

    const domainParts = parts[1].split(".");

    return !domainParts.some(function (part) {
        return part.length > 63;
    });
}