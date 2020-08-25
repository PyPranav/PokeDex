fetch('static/pokemon.json')
.then(data => data.json())
.then(data => {
    console.log(data);
    data = data[0];
    {
        let id = data.number;
        document.getElementById('dex-no').innerHTML = "#"+id;

        let poke_name = data.name;
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
        console.log(str);
        doc_type.innerHTML = str;

        let height = data.height;
        let weight = data.weight;
        document.getElementById('height').innerHTML = height;
        document.getElementById('weight').innerHTML = (weight.replace(' lbs.', '')/2.2).toFixed(1)+'Kg';

        let description = data.description
        document.getElementById("Description").innerHTML = description;
    }
})