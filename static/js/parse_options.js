// =========== GET DATA AND CONFIG FROM URL PARAMETERS =================
window.addEventListener('load', () => {
    change_genre('../networks/all/')
})

var d1 = "../networks/all/";
var d2 = "withsingles/genre/";

var t1 = "all";
var t2 = "genre";
var t3 = "with all"

function change_genre(d, n) {
    d1 = d;
    controls = {};
    controls['file_path'] = d1 + d2 + 'network.json';

    d3.json(d1 + d2 + 'config.json', new_controls => {
        controls = {...controls, ...new_controls}
        vis(controls);
    })

    d3.json(d1 + d2 + 'stats.json', stats => {
        change_statistics(stats)
    })

    change_title(n, null, null);
}

function change_type(d, t, l) {
    d2 = d;
    controls = {};
    controls['file_path'] = d1 + d2 + 'network.json';

    d3.json(d1 + d2 + 'config.json', new_controls => {
        controls = {...controls, ...new_controls}
        vis(controls);
    })

    d3.json(d1 + d2 + 'stats.json', stats => {
        change_statistics(stats)
    })

    change_title(null, t, l);
}

function change_statistics(stats) {
    Object.entries(stats).forEach(([key, value]) => {
        if (key != 'Betweenness centrality') {
            document.getElementById(key).innerHTML = value;
        } else {
            let rows = document.getElementsByClassName(key);
            let between_centrals = Object.entries(value);
            for (let i=0; i<rows.length; i++) {
                let children = rows[i].getElementsByTagName("td");
                children[0].innerHTML = between_centrals[i][0]
                children[1].innerHTML = between_centrals[i][1]
            }
        }
    })
}


function change_title(n, t, l) {
    if (n != null) {
        t1 = n;
    }
    if (t != null) {
        t2 = t;
    }
    if (l != null) {
        t3 = l;
    }
    document.getElementById("network_title").innerHTML = t1 + " colored by " + t2 + " " + t3 + " singletons";
}