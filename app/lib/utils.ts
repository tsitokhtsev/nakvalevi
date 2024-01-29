export const getFormattedYear = (year: string) => {
    if (year.includes('-')) {
        return  `${year} წლები`;
    }

    if (year.match(/[A-Z]/)) {
        return year;
    }

    return `${year} წელი`;
};
