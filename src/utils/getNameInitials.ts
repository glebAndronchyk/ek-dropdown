const getNameInitials = (name: string, surname: string): string => {
    return `${name[0]}${surname[0]}`;
}

export default getNameInitials;
