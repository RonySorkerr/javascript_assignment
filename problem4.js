// function password(obj) 

function password(obj) {

    if (!obj || typeof obj !== 'object' || !('name' in obj) || !('birthYear' in obj) || !('siteName' in obj)) {
        return 'invalid';
    }

    const { name, birthYear, siteName } = obj;
    const nSiteName = siteName.charAt(0).toUpperCase() + siteName.slice(1);
    const password = `${nSiteName}#${name}@${birthYear}`;
    if (birthYear.toString().length < 4) {
        return "invalid";
    }
    return password;
}

// passed : 