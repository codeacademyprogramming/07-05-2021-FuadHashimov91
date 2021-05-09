export class CreateHTML{
    static addOne(data_finder){
        return `
        <tr>
            <td><img src=" ${data_finder.img}"/></td>
            <td>${data_finder.name}</td>
            <td>${data_finder.surname}</td>
            <td>${data_finder.salary}</td>
            <td>${data_finder.loan}</td>
        </tr>`
    }
}