---
title: Home Page
layout: single
next: data-description
---

Everyone consumes music one way or another, ...
Music artists often collaborate on songs. But which artists collaborate more? Do collaborations happen more often in some genres, than others? Are artists collaborating more today, than in the 1960's? Does the lyrics used in songs change through the years? What about between genres? Has Drake collaborated with more artists than DJ Khaled? All good questions, which we hope to answer in this project.

To get a list of songs to investigate, we looked at the [Billboard 'Hot-100' list](https://www.billboard.com/charts/hot-100/). Here, we collected song titles and artist names of all songs that appeared on the list starting from the first week of 1960, all the way to today. Then we used this data to collect lyrics, release year, collaborations, genres and titles from [genius.com](https://genius.com/Rick-astley-never-gonna-give-you-up-lyrics). This was done via two APIs: the [billboard.py API](https://github.com/guoguo12/billboard-charts) and the [LyricsGenius API](https://lyricsgenius.readthedocs.io/en/master/).

![](https://upload.wikimedia.org/wikipedia/commons/5/51/Genius-logo.png)

The data was then cleaned via various methods (link til section?), ...


## [Explainer Notebook](explainer-notebook.html)
The notebook containing all code used for the completion of this project can be seen [here](explainer-notebook.html).


## Math formula


$$ x^n + y^n = z^n $$

## Code chunk

```
import pandas as pd

df = pd.DataFrame()
```

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec mauris aliquet, convallis ligula vel, mollis est. Fusce accumsan massa vel lectus dapibus, at vehicula elit auctor.

| Column 1  | Column 2  |  Column 3 |
|---|---|---|
| 1 | 4 | 7 |
| 2 | 5 | 8 |
| 3 | 6 | 9 |


THIS IS A SONG EMBEDDED VIA SHORTCODES:

{{< spotify type="track" id="2dR5WkrpwylTuT3jRWNufa" width="50%" height="80" >}}


THIS IS A SONG EMBEDDED VIA SPOTIFY SHARE:
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/31dynF6Vm6s6cLsHEBL8kp?utm_source=generator" width="50%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>


THIS IS AN EXAMPLE OF HOW TO USE TABS
{{< tabs >}}
{{< tab "MacOS" >}}
### MacOS

This is tab **MacOS** content.

Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter!
{{< /tab >}}

{{< tab "Linux" >}}
## Linux

This is tab[^example2] **Linux** content.[^example3]

Example text that *may* contain **markdown** `markup`.[^example]
{{< /tab >}}

{{< tab "Windows" >}}
### Windows

This is tab **Windows** content.

Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter!
{{< /tab >}}
{{< /tabs >}}

