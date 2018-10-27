document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            const customersingle = JSON.parse(this.responseText);
            
            let output = `
                <div style="background: #f3f3f3;">
                    <p>ID: ${customersingle.id}</p>
                    <p>Name: ${customersingle.name}</p>
                    <p>Phone: ${customersingle.phone}</p>
                </div>
            `;
            
            document.getElementById("customer").innerHTML = output;
        }
    }
    xhr.send();
}

function loadCustomers(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            const customers = JSON.parse(this.responseText);
            let output = '';

            customers.forEach(function(customer){
                output += `
                <div style="background: #f3f3f3;">
                    <p>ID: ${customer.id}</p>
                    <p>Name: ${customer.name}</p>
                    <p>Phone: ${customer.phone}</p>
                </div>
                `
            });

            document.getElementById('customers').innerHTML = output;
        }
    }
    xhr.send();
}