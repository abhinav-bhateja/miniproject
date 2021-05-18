import axios from "./axios";

export const postData = (data) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`/project`,data)
            .then((data) => {
                resolve(data)
                console.log(data)
            })
            .catch(err => {
                console.log(err)
                reject("Something went wrong")
            })

    })
}