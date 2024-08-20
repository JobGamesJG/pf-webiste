export const getAge = (): number => {
    const bday = Date.parse(new Date("21 February 2008").toString());
    const current = Date.now();
    const sumOfTime = 365 * 60 * 60 * 24 * 1e3;

    return Math.floor((current - bday) / sumOfTime);
};
