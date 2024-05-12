let SHEET_ID = '1hp1ZVZMjlKVP55SFsBrn_VxHWxAapTGb-xlxfzRIkT4';
let SHEET_TITLE = 'Player_Shoes';
let SHEET_RANGE = 'A:G';
let datasheet = [];

function fetchData() {
    return new Promise((resolve, reject) => {
        let FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE}`;

        fetch(FULL_URL)
            .then(response => response.text())
            .then(text => {
                let data = JSON.parse(text.substr(47).slice(0, -2)).table.rows;
                datasheet = data;
                resolve(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                reject(error);
            });
    });
}

export default async function Database() {
    try {
        let data = await fetchData();
        return data;
    } catch (error) {
        throw error;
    }
}
