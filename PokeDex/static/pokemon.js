function update(index_num)
{    fetch('../static/pokemon.json')
    .then(data => data.json())
    .then(Data => {
        // console.log(data);
        data = Data[index_num];
        {
            let id = data.number;
            if (data.name == 'Mega Gyarados'){
                id -= 1;
            }
            document.getElementById('dex-no').innerHTML = "#"+id;

            let poke_name = data.name;
            if (poke_name == 'Zygarde - Complete Forme'){
                poke_name = 'Zygarde - 100% Forme';
            }

            document.getElementById('Poke-name').innerHTML = poke_name;

            index = index_num
            temp = Data[index].number
            if (Data[index].name == 'Mega Gyarados'){
                temp -= 1
            }
            if (temp.length==1){
                temp = '00'+String(temp)
            }
            else if (temp.length==2){
                temp = '0' + String(temp)
            }
            console.log(temp);
            if (index == 0){
                img_url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${temp}.png`
            }
            else{
                img_url =  `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${temp}_f${index+1}.png`
            }

            let poke_img = img_url;
            // console.log(poke_img);
            document.getElementById("Poke-img").src = poke_img;

            let types = data.types;
            // console.log(types);
            let doc_type = document.getElementById('types');
            let str = '';
            if (types.length != 1){
            for (let z = 0; z<types.length; z++){
                str+=`<button type='button' class='${types[z]}-btn-${z+1} btn-${z+1}'>${types[z]}</button> `;
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

                index = (index_num+1)%Data.length
                temp = Data[index].number
                if (Data[index].name == 'Mega Gyarados'){
                    temp -= 1
                }
                if (temp.length==1){
                    temp = '00'+String(temp)
                }
                else if (temp.length==2){
                    temp = '0' + String(temp)
                }
                console.log(temp);
                if (index == 0){
                    img_url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${temp}.png`
                }
                else{
                    img_url =  `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${temp}_f${index+1}.png`
                }


                document.getElementById('circle_container_1').innerHTML = `
                <img id='circle_1' onclick = update(${(index_num+1)%Data.length}) src=${img_url}></img>
                `
            }
            else if (Data.length == 3)
            {
                console.log(document.getElementById('circle_container_1'));
                
                index = (index_num+1)%Data.length
                temp = Data[index].number
                if (temp.length==1){
                    temp = '00'+String(temp)
                }
                else if (temp.length==2){
                    temp = '0' + String(temp)
                }
                console.log(temp);
                if (index == 0){
                    img_url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${temp}.png`
                }
                else{
                    img_url =  `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${temp}_f${index+1}.png`
                }

                document.getElementById('circle_container_1').innerHTML = `
                <img id='circle_1' onclick = update(${index}) src=${img_url}></img>
                `
                console.log(document.getElementById('circle_container_2'));

                index = (index_num+2)%Data.length
                temp = Data[index].number
                if (temp.length==1){
                    temp = '00'+String(temp)
                }
                else if (temp.length==2){
                    temp = '0' + String(temp)
                }
                console.log(temp);
                if (index == 0){
                    img_url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${temp}.png`
                }
                else{
                    img_url =  `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${temp}_f${index+1}.png`
                }

                document.getElementById('circle_container_2').innerHTML = `
                <img id='circle_2' onclick = update(${(index_num+2)%Data.length}) src=${img_url}></img>
                `
            }
        }
    })}

update(0);