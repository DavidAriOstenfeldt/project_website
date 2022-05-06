window.addEventListener('load', () => {
    d = "../networks/all/withsingles/louvain/"
    controls = {};
    controls['file_path'] =  + 'network.json';

    d3.json(d1 + d2 + 'config.json', new_controls => {
        controls = {...controls, ...new_controls}
        vis(controls);
    })
})