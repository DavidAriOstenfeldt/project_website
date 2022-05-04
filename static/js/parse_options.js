// =========== GET DATA AND CONFIG FROM URL PARAMETERS =================
window.addEventListener('load', () => {
    change_genre('../networks/rap/withsingles/genre/')
})

var d1 = "../networks/rap/";
var d2 = "withsingles/genre/";

function change_genre(d) {
    d1 = d;
    controls = {};
    controls['file_path'] = d1 + d2 + 'network.json';

    d3.json(d1 + d2 + 'config.json', new_controls => {
        controls = {...controls, ...new_controls}
        vis(controls);
    })
}

function change_type(d) {
    d2 = d;
    controls = {};
    controls['file_path'] = d1 + d2 + 'network.json';

    d3.json(d1 + d2 + 'config.json', new_controls => {
        controls = {...controls, ...new_controls}
        vis(controls);
    })
}