import { Notification } from './scripts/Notification';

export const getComedians = async () => {
    try {
        const response = await fetch('http://localhost:8080/comedians');
        if (!response.ok) {
            throw new Error(`Сервер вернул ошибку: ${response.status}`);
        }

        return response.json();
    } catch (error) {

       Notification.getInstance().show(
        "Возникла ошибка сервера, попробуйте позжe"
        ); 
    }
};


export const sendData = async (method, data, id) => {
    try {
        const response = await fetch(`http://localhost:8080/clients${id ? `/${id}` : ""}`, 
        {
            method,
            headers: {
                "Content-Type": 'application/json'
            }, 
            body: JSON.stringify(data),
        },
        );
        if (!response.ok) {
            throw new Error(`Сервер вернул ошибку: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error(`Возникла проблема с fetch запросом: ${error.message}`);

       Notification.getInstance().show(
        "Возникла ошибка сервера, попробуйте позжe"
        ); 
        return false;
    }
};










// export const sendData = async (method, data, id) => {
//     try {
//         const response = await fetch(
//             `http://localhost:8080/clients${id ? `/${id}` : ''}`, 
//             {
//                 method,
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(data),
//             },
//         );
//         if (!response.ok) {
//             throw new Error(`Сервер вернул ошибку: ${response.status}`);
//         return true;
//     } catch (error) {

//        Notification.getInstance().show(
//         "Возникла ошибка сервера, попробуйте позжe"
//         ); 
//        return false;
//     }
// };
