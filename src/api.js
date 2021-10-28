import { API_URL } from "./config"

const getCourses = async () => {
    const response = await fetch(API_URL);
    return await response.json();
};

export { getCourses }
