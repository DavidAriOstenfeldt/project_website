window.addEventListener('load', () => {
    d = "networks/all/withsingles/genre/"
    controls = {};
    controls['file_path'] = d + 'network.json';
    d3.json(d + 'config.json', new_controls => {
        controls = {...controls, ...new_controls}
        vis(controls);
    })
})