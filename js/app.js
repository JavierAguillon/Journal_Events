//Variables xD
let date_field = document.querySelector('#date_field')
let event_field = document.querySelector('#event_field')
let accident_check = document.querySelector('#accident_check')
let submit_btn = document.querySelector('#submit_btn')

let table_body = document.querySelector('#table_body')


let addEvent = (date, event, accident) => {
    let new_row = document.createElement('tr')
    
    new_row.className = 'table_active'
    new_row.innerHTML = `<th scope = 'row'> ${date} </th>
    <td> ${event} </td>
    <td> ${accident} </td>`
    table_body.appendChild(new_row)
}

let parseAccidentCheck = (value) => {
    if (value) {
        return 'YES'
    }
    return 'THANKS TO GOD NO.'
}


submit_btn.addEventListener('click', function(){
    let date = date_field.value
    let event = event_field.value
    let accident = parseAccidentCheck(accident_check.checked)

    addEvent(date, event, accident)
})

