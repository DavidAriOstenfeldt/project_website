// =========== GET DATA AND CONFIG FROM URL PARAMETERS =================
window.addEventListener('load', () => {
    network_load('../networks/full/')
})
function network_load(d) {
    controls = {};
    console.log(window.location.href + d)
    controls['file_path'] = d + 'network.json';



    d3.json(d + 'config.json', new_controls => {
        controls = {...controls, ...new_controls}
        vis(controls);
    })
}