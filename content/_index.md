---
title: Home Page
layout: single
next: data-description
---

Music is a large part of our daily lives. A study shows that [only 4% of Danes do not listen to any music whatsoever, leaving 96% listening through various means, such as radio, streaming, live music, tv etc](https://www.dst.dk/da/Statistik/emner/kultur-og-fritid/musik/musikvaner). But how much do we actually know about the various connections and intersections that happen to make our favourite pastime work? How do artists get together to create the music we love to listen to? Which artists collaborate more? Are some genres more prone to collaboration than others? Are artists collaborating more today, than in the 1960s? Does the language used in songs change through the years? What about between genres? Has Drake collaborated with more artists than DJ Khaled? All good questions, which we hope to answer in this project.

The project is carried out in three main parts:
1. [Collect data](./data-description).
2. [Create various networks](./network-analysis) to investigate the collaboration between artists.
3. [Analyse the lyrics](./text-analysis) of all the songs collected.

Here is a small preview of what we are going to create:

INSERT IMAGE OF WHOLE NETWORK HERE



To get a list of songs to investigate, we looked at the [Billboard 'Hot-100' list](https://www.billboard.com/charts/hot-100/). Here, we collected song titles and artist names of all songs that appeared on the list starting from the first week of 1960, all the way to today. Then we used this data to collect lyrics, release year, collaborations, genres and titles from [genius.com](https://genius.com/Rick-astley-never-gonna-give-you-up-lyrics). This was done via two APIs: the [billboard.py API](https://github.com/guoguo12/billboard-charts) and the [LyricsGenius API](https://lyricsgenius.readthedocs.io/en/master/).

![](https://upload.wikimedia.org/wikipedia/commons/5/51/Genius-logo.png)

The data was then cleaned via various methods (see [Data](./data-description) for more info), such that we were only left with unique songs.


## Explainer Notebook
The notebook containing all code used for the completion of this project can be seen [here](explainer-notebook.html). In it is a detailed walkthrough of every step of the process. As there is a lot of code, and it might become unwieldy, we have also split it into three separate notebooks, one for each section: [Data notebook](data_notebook.html), [network notebook](network_notebook.html), [text notebook](text_notebook.html).


## Math formula


$$ x^n + y^n = z^n $$

INLINE MATH:

This is a line of text $5 + 5^2 = 30$ with some math in the middle of it.

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
<br></br>
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

{{< tab "Windows" >}}
### Windows

This is tab **Windows** content.

Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter!
{{< /tab >}}

{{< tab "Windows" >}}
### Windows

This is tab **Windows** content.

Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter!
{{< /tab >}}

{{< tab "Windows" >}}
### Windows

This is tab **Windows** content.

Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter!
{{< /tab >}}

{{< tab "Windows" >}}
### Windows

This is tab **Windows** content.

Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter!
{{< /tab >}}

{{< tab "Windows" >}}
### Windows

This is tab **Windows** content.

Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter!
{{< /tab >}}

{{< tab "Windows" >}}
### Windows

This is tab **Windows** content.

Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter!
{{< /tab >}}

{{< tab "Windows" >}}
### Windows

This is tab **Windows** content.

Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter!
{{< /tab >}}

{{< tab "Windows" >}}
### Windows

This is tab **Windows** content.

Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter!
{{< /tab >}}
{{< /tabs >}}

THIS IS AN EXAMPLE OF HOW TO USE PLOTLY (with json):
{{< load-plotly >}}
{{< plotly json="plotly/songs_per_artist.json" height="325px" >}}


This is a long test to see what will happen when the text goes over the middle, maybe we need a higher container.

TESTING OUT TABS IN TABS
<br></br>

{{< tabs >}}
{{< tab "Rap" >}}
{{< tabs >}}
  {{< tab "Drake" >}}
  ### Inner Tab 1
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}

  {{< tab "Lil Wayne" >}}
  ### Inner Tab 2
  This is an inner tab

  {{< /tab >}}

  {{< /tabs >}}
{{< /tab >}}

{{< tab "Outer Tab 2" >}}
## Outer Tab 2
Frank Sinatra 

![](/images/frank_sinatra_no_bg.png)

Example text that *may* contain **markdown** `markup`.[^example]
{{< /tab >}}
{{< /tabs >}}

