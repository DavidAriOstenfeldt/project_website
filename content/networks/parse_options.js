// =========== GET DATA AND CONFIG FROM URL PARAMETERS =================
window.addEventListener('load', () => {
    network_load('full\\')
})

function network_load(d) {
    controls = {};

    controls['file_path'] = d + 'network.json';

    d3.json(d + 'config.json', new_controls => {
        controls = {...controls, ...new_controls}
        vis(controls);
    })
}