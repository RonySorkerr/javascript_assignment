function password(obj) {
    const { name, birthYear, siteName } = obj;
    const nSiteName = siteName.charAt(0).toUpperCase() + siteName.slice(1);
    const password = `${nSiteName}#${name}@${birthYear}`;
    if (birthYear.toString().length !== 4) {
        return "invalid";
    }
    return password;
}

const input = { name: "maisha" ,  birthYear: 2002 };
console.log(password(input));