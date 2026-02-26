document.querySelector('.talent_data .table_box')
    .querySelectorAll('dl')
    .forEach(dl=>{
        if(dl.querySelector('dt').textContent == "身長"){
            const height = Math.ceil(Math.random() * 200);
            dl.querySelector('dd').textContent = `${height}cm`;
        }
    });
