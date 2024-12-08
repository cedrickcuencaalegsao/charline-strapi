import axios from "axios";

export const useGetTodo = (searchTerm) => {
    const getAllTodos = async () => {
        try {
            const response = await axios.get(
                `http://localhost:1337/api/products`,
                {
                    params: {
                        filters: {
                            name: {
                                $eq: searchTerm,
                            }
                        }
                    }
                }
            );

            return response?.data?.data;
        } catch (error) {
            console.error(error);
        }
    };

    return { getAllTodos };
};
