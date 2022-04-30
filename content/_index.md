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
The notebook containing all code used for the completion of this project can be seen [here](explainer-notebook.html). In it is a detailed walkthrough of every step of the process.


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

THIS IS AN EXAMPLE OF HOW TO USE PLOTLY (with json):
{{< load-plotly >}}
{{< plotly json="plotly/songs_per_artist.json" height="325px" >}}


This is a long test to see what will happen when the text goes over the middle, maybe we need a higher container.

TESTING OUT TABS IN TABS
<br></br>
{{< tabs >}}
{{< tab "Pop" >}}
  {{< tabs >}}
  {{< tab "Ariana Grande" >}}
  ![](/images/ariana_grande.png)
  ### Ariana Grande
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Beyoncé" >}}
  ![](/images/beyoncé.png)
  ### Beyoncé
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Billie Eilish" >}}
  ![](/images/billie_eilish.png)
  ### Billie Eilish
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Britney Spears" >}}
  ![](/images/britney_spears.png)
  ### Britney Spears
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Cher" >}}
  ![](/images/cher.png)
  ### Cher
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Ed Sheeran" >}}
  ![](/images/ed_sheeran.png)
  ### Ed Sheeran
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Elton John" >}}
  ![](/images/elton_john.png)
  ### Elton John
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Frank Sinatra" >}}
  ![](/images/frank_sinatra.png)
  ### Frank Sinatra
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Justin Bieber" >}}
  ![](/images/justin_bieber.png)
  ### Justin Bieber
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Katy Perry" >}}
  ![](/images/katy_perry.png)
  ### Katy Perry
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Madonna" >}}
  ![](/images/madonna.png)
  ### Madonna
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Michael Jackson" >}}
  ![](/images/michael_jackson.png)
  ### Michael Jackson
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Miley Cyrus" >}}
  ![](/images/miley_cyrus.png)
  ### Miley Cyrus
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Taylor Swift" >}}
  ![](/images/taylor_swift.png)
  ### Taylor Swift
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< /tabs >}}
{{< /tab >}}

{{< tab "R&B" >}}
  {{< tabs >}}
  {{< tab "Aretha Franklin" >}}
  ![](/images/aretha_franklin.png)
  ### Aretha Franklin
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Chris Brown" >}}
  ![](/images/chris_brown.png)
  ### Chris Brown
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "James Brown" >}}
  ![](/images/james_brown.png)
  ### James Brown
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Marvin Gaye" >}}
  ![](/images/marvin_gaye.png)
  ### Marvin Gaye
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Prince" >}}
  ![](/images/prince.png)
  ### Prince
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Stevie Wonder" >}}
  ![](/images/stevie_wonder.png)
  ### Stevie Wonder
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "The Weeknd" >}}
  ![](/images/the_weeknd.png)
  ### The Weeknd
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< /tabs >}}
{{< /tab >}}

{{< tab "Rap" >}}
  {{< tabs >}}
  {{< tab "Drake" >}}
  ![](/images/drake.png)
  ### Inner Tab 1
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Eminem" >}}
  ![](/images/eminem.png)
  ### Eminem
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Future" >}}
  ![](/images/future.png)
  ### Future
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "J. Cole" >}}
  ![](/images/j._cole.png)
  ### J. Cole
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Jay-Z" >}}
  ![](/images/jay-z.png)
  ### Jay-z
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Juice Wrld" >}}
  ![](/images/juice_wrld.png)
  ### Juice Wrld
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Kanye West" >}}
  ![](/images/kanye_west.png)
  ### Juice Wrld
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Lil Baby" >}}
  ![](/images/lil_baby.png)
  ### Lil Baby
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Lil Durk" >}}
  ![](/images/lil_durk.png)
  ### Lil Durk
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Lil Uzi Vert" >}}
  ![](/images/lil_uzi_vert.png)
  ### Lil Uzi Vert
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Lil Wayne" >}}
  ![](/images/lil_wayne.png)
  ### Lil Wayne
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Nicki Minaj" >}}
  ![](/images/nicki_minaj.png)
  ### Nicki Minaj
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Snoop Dogg" >}}
  ![](/images/snoop_dogg.png)
  ### Snoop Dogg
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Travis Scott" >}}
  ![](/images/travis_scott.png)
  ### Travis Scott
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Young Thug" >}}
  ![](/images/young_thug.png)
  ### Young Thug
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Youngboy Never Broke Again" >}}
  ![](/images/youngboy_never_broke_again.png)
  ### Youngboy Never Broke Again
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< /tabs >}}
{{< /tab >}}

{{< tab "Rock" >}}
  {{< tabs >}}
  {{< tab "Elvis Presley" >}}
  ![](/images/elvis_presley.png)
  ### Elvis Presley
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Queen" >}}
  ![](/images/queen.png)
  ### Queen
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "The Beatles" >}}
  ![](/images/the_beatles.png)
  ### The Beatles
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< /tabs >}}
{{< /tab >}}
{{< /tabs >}}

