function update(index_num)
{    fetch('static/pokemon.json')
    .then(data => data.json())
    .then(Data => {
        // console.log(data);
        data = Data[index_num];
        {
            let id = data.number;
            document.getElementById('dex-no').innerHTML = "#"+id;

            let poke_name = data.name;
            if (poke_name == 'Zygarde - Complete Forme'){
                poke_name = 'Zygarde - 100% Forme';
            }

            document.getElementById('Poke-name').innerHTML = poke_name;

            let poke_img = data.sprite;
            // console.log(poke_img);
            document.getElementById("Poke-img").src = poke_img;

            let types = data.types;
            // console.log(types);
            let doc_type = document.getElementById('types');
            let str = '';
            if (types.length != 1){
            for (let z = 0; z<types.length; z++){
                str+=`<button type='button' class='${types[z]}-btn-${z+1}'>${types[z]}</button> `;
            }}
            else{
                str = `<button type='button' class='${types[0]}-btn-${1} single-btn'>${types[0]}</button> `
            }
            // console.log(str);
            doc_type.innerHTML = str;

            let height = data.height;
            let weight = data.weight;
            document.getElementById('height').innerHTML = height;
            document.getElementById('weight').innerHTML = (weight.replace(' lbs.', '')/2.2).toFixed(1)+'Kg';

            let description = data.description
            document.getElementById("Description").innerHTML = description;
            console.log(Data.length);
            if (Data.length == 2)
            {
                console.log(document.getElementById('circle_container_1'));
                document.getElementById('circle_container_1').innerHTML = `
                <img id='circle_1' onclick = update(${(index_num+1)%Data.length}) src=${Data[(index_num+1)%Data.length].sprite}></img>
                `
            }
            else if (Data.length == 3)
            {
                console.log(document.getElementById('circle_container_1'));
                document.getElementById('circle_container_1').innerHTML = `
                <img id='circle_1' onclick = update(${(index_num+1)%Data.length}) src=${Data[(index_num+1)%Data.length].sprite}></img>
                `
                console.log(document.getElementById('circle_container_2'));
                document.getElementById('circle_container_2').innerHTML = `
                <img id='circle_2' onclick = update(${(index_num+2)%Data.length}) src=${Data[(index_num+2)%Data.length].sprite}></img>
                `
            }
        }
    })}

update(0);