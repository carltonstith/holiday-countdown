class Gift {
    constructor(gift, recipient, cost) {
        this.gift = gift;
        this.recipient = recipient;
        this.cost = cost;
    }
}

class UI {
    static displayGifts() {
        const gifts = Store.getGifts();

        gifts.forEach((gift) => UI.addGiftToList(gift));
    }

    static addGiftToList(gift) {
        const list = document.querySelector('#christmas-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${gift.gift}</td>
            <td>${gift.recipient}</td>
            <td>${gift.cost}</td>
            <td><a href="" class="btn btn-danger btn-sm delete"><i class="fas fa-trash"></i></a></td>
        `;
        list.appendChild(row);
    }

    static deleteGift(el) {
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const form = document.querySelector('#christmas-list-form');
        container.insertBefore(div, form);

        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    static clearFields() {
        document.querySelector('#gift').value = '';
        document.querySelector('#recipient').value = '';
        document.querySelector('#cost').value = '';
    }
}

class Store {
    static getGifts() {
        let gifts;
        if(localStorage.getItem('gifts') === null) {
            gifts = [];
        } else {
            gifts = JSON.parse(localStorage.getItem('gifts'));
        }

        return gifts;
    }

    static addGift(gift) {
        const gifts = Store.getGifts();
        gifts.push(gift);
        localStorage.setItem('gifts', JSON.stringify(gifts));
    }

    static removeGift(cost) {
        const gifts = Store.getGifts();

        gifts.forEach((gift, index) => {
            if(gift.cost === cost) {
                gifts.splice(index, 1);
            }
        });

        localStorage.setItem('gifts', JSON.stringify(gifts));
    }
}

document.addEventListener('DOMContentLoaded', UI.displayGifts);

document.querySelector('#christmas-list-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const gift = document.querySelector('#gift').value;
    const recipient = document.querySelector('#recipient').value;
    const cost = document.querySelector('#cost').value;

    if(gift === '' || recipient === '' || cost === '') {
        UI.showAlert('Fill in all fields', 'danger');
    } else {
        const newGift = new Gift(gift, recipient, cost);

        UI.addGiftToList(newGift);

        Store.addGift(newGift);

        UI.showAlert('Gift Added', 'success');

        UI.clearFields();
    }
});

document.querySelector('#christmas-list').addEventListener('click', (e) => {
    UI.deleteGift(e.target);

    Store.removeGift(e.target.parentElement.previousElementSibling.textContent);

    UI.showAlert('Gift Removed', 'success');
});