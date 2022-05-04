---
title: Introduction
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

The distribution of songs per artist (for artists with over 50 songs on the 'Hot-100' list) looks as follows:
{{< load-plotly >}}
{{< plotly json="plotly/songs_per_artist.json" height="475px" >}}

As we can see on the plot, it is mostly pop artists, with some rap, r&b and rock mixed in between.  Drake is leading with 253 songs on the chart, and most of the artists are big names from the last 10-20 years. Some well known names from before still manage to break through, like the king of rock, Elvis, with 89 songs on the chart.

Likewise, the distribution of songs over genres (for genres with more than 500 songs in them):
{{< plotly json="plotly/songs_per_genre.json" height="475px" >}}

Here, it becomes clear to see that the genres are dominated by pop, rock r&b and rap, with there being as many pop songs as the next three genres combined.


Finally, the distribution of songs per decade looks as following:
{{< plotly json="plotly/songs_per_decade.json" height="475px" >}}

We can see that each decade has between 3000 and 5000 songs, with the most being the 1960s and the 2010s. 1920 to 1940 is of course substantially lower, since the chart started in 1958, and 2020 incomplete, as there are still 8 years left in this decade.


<br></br>
{{< tabs >}}
{{< tab "Pop" >}}
  {{< tabs >}}
  {{< tab "Ariana Grande" >}}
  ![](/images/ariana_grande.png)
  {{< spotify type="track" id="6ocbgoVGwYJhOv1GgI9NsF" width="50%" height="80" >}}
        
  
  ### Ariana Grande
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Beyoncé" >}}
  ![](/images/beyoncé.png)
  {{< spotify type="track" id="2CvOqDpQIMw69cCzWqr5yr" width="50%" height="80" >}}
  ### Beyoncé
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Billie Eilish" >}}
  ![](/images/billie_eilish.png)
  {{< spotify type="track" id="2Fxmhks0bxGSBdJ92vM42m" width="50%" height="80" >}}
  ### Billie Eilish
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Britney Spears" >}}
  ![](/images/britney_spears.png)
  {{< spotify type="track" id="6I9VzXrHxO9rA9A5euc8Ak" width="50%" height="80" >}}
  ### Britney Spears
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Cher" >}}
  ![](/images/cher.png)
  {{< spotify type="track" id="2goLsvvODILDzeeiT4dAoR" width="50%" height="80" >}}
  ### Cher
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Ed Sheeran" >}}
  ![](/images/ed_sheeran.png)
  {{< spotify type="track" id="0tgVpDi06FyKpA1z0VMD4v" width="50%" height="80" >}}
  ### Ed Sheeran
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Elton John" >}}
  ![](/images/elton_john.png)
  {{< spotify type="track" id="3gdewACMIVMEWVbyb8O9sY" width="50%" height="80" >}}
  ### Elton John
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Frank Sinatra" >}}
  ![](/images/frank_sinatra.png)
  {{< spotify type="track" id="2dR5WkrpwylTuT3jRWNufa" width="50%" height="80" >}}
  ### Frank Sinatra
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Justin Bieber" >}}
  ![](/images/justin_bieber.png)
  {{< spotify type="track" id="50kpGaPAhYJ3sGmk6vplg0" width="50%" height="80" >}}
  ### Justin Bieber
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Katy Perry" >}}
  ![](/images/katy_perry.png)
  {{< spotify type="track" id="4jbmgIyjGoXjY01XxatOx6" width="50%" height="80" >}}
  ### Katy Perry
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Madonna" >}}
  ![](/images/madonna.png)
  {{< spotify type="track" id="22sLuJYcvZOSoLLRYev1s5" width="50%" height="80" >}}
  ### Madonna
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Michael Jackson" >}}
  ![](/images/michael_jackson.png)
  {{< spotify type="track" id="5ChkMS8OtdzJeqyybCc9R5" width="50%" height="80" >}}
  ### Michael Jackson
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Miley Cyrus" >}}
  ![](/images/miley_cyrus.png)
  {{< spotify type="track" id="3E7dfMvvCLUddWissuqMwr" width="50%" height="80" >}}
  ### Miley Cyrus
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Taylor Swift" >}}
  ![](/images/taylor_swift.png)
  {{< spotify type="track" id="55n9yjI6qqXh5F2mYvUc2y" width="50%" height="80" >}}
  ### Taylor Swift
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< /tabs >}}
{{< /tab >}}

{{< tab "R&B" >}}
  {{< tabs >}}
  {{< tab "Aretha Franklin" >}}
  ![](/images/aretha_franklin.png)
  {{< spotify type="track" id="7s25THrKz86DM225dOYwnr" width="50%" height="80" >}}
  ### Aretha Franklin
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Chris Brown" >}}
  ![](/images/chris_brown.png)
  {{< spotify type="track" id="6XHVuErjQ4XNm6nDPVCxVX" width="50%" height="80" >}}
  ### Chris Brown
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "James Brown" >}}
  ![](/images/james_brown.png)
  {{< spotify type="track" id="5XeSAezNDk9tuw3viiCbZ3" width="50%" height="80" >}}
  ### James Brown
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Marvin Gaye" >}}
  ![](/images/marvin_gaye.png)
  {{< spotify type="track" id="7tqhbajSfrz2F7E1Z75ASX" width="50%" height="80" >}}
  ### Marvin Gaye
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Prince" >}}
  ![](/images/prince.png)
  {{< spotify type="track" id="54X78diSLoUDI3joC2bjMz" width="50%" height="80" >}}
  ### Prince
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Stevie Wonder" >}}
  ![](/images/stevie_wonder.png)
  {{< spotify type="track" id="4N0TP4Rmj6QQezWV88ARNJ" width="50%" height="80" >}}
  ### Stevie Wonder
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "The Weeknd" >}}
  ![](/images/the_weeknd.png)
  {{< spotify type="track" id="0VjIjW4GlUZAMYd2vXMi3b" width="50%" height="80" >}}
  ### The Weeknd
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< /tabs >}}
{{< /tab >}}

{{< tab "Rap" >}}
  {{< tabs >}}
  {{< tab "DJ Khaled" >}}
  ![](/images/dj_khaled.png)
  {{< spotify type="track" id="3DXncPQOG4VBw3QHh3S817" width="50%" height="80" >}}
  ### DJ Khaled
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Drake" >}}
  ![](/images/drake.png)
  {{< spotify type="track" id="1zi7xx7UVEFkmKfv06H8x0" width="50%" height="80" >}}
  ### Inner Tab 1
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Eminem" >}}
  ![](/images/eminem.png)
  {{< spotify type="track" id="1v7L65Lzy0j0vdpRjJewt1" width="50%" height="80" >}}
  ### Eminem
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Future" >}}
  ![](/images/future.png)
  {{< spotify type="track" id="0VgkVdmE4gld66l8iyGjgx" width="50%" height="80" >}}
  ### Future
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "J. Cole" >}}
  ![](/images/j._cole.png)
  {{< spotify type="track" id="68Dni7IE4VyPkTOH9mRWHr" width="50%" height="80" >}}
  ### J. Cole
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Jay-Z" >}}
  ![](/images/jay-z.png)
  {{< spotify type="track" id="4Li2WHPkuyCdtmokzW2007" width="50%" height="80" >}}
  ### Jay-z
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Juice Wrld" >}}
  ![](/images/juice_wrld.png)
  {{< spotify type="track" id="285pBltuF7vW8TeWk8hdRR" width="50%" height="80" >}}
  ### Juice Wrld
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Kanye West" >}}
  ![](/images/kanye_west.png)
  {{< spotify type="track" id="0j2T0R9dR9qdJYsB7ciXhf" width="50%" height="80" >}}
  ### Juice Wrld
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Lil Baby" >}}
  ![](/images/lil_baby.png)
  {{< spotify type="track" id="78QR3Wp35dqAhFEc2qAGjE" width="50%" height="80" >}}
  ### Lil Baby
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Lil Durk" >}}
  ![](/images/lil_durk.png)
  {{< spotify type="track" id="2SAqBLGA283SUiwJ3xOUVI" width="50%" height="80" >}}
  ### Lil Durk
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Lil Uzi Vert" >}}
  ![](/images/lil_uzi_vert.png)
  {{< spotify type="track" id="7GX5flRQZVHRAGd6B4TmDO" width="50%" height="80" >}}
  ### Lil Uzi Vert
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Lil Wayne" >}}
  ![](/images/lil_wayne.png)
  {{< spotify type="track" id="5UsLjwBaTHBX4ektWIr4XX" width="50%" height="80" >}}
  ### Lil Wayne
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Nicki Minaj" >}}
  ![](/images/nicki_minaj.png)
  {{< spotify type="track" id="0dKg2vGC1hFqcK5LGTaKzX" width="50%" height="80" >}}
  ### Nicki Minaj
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Snoop Dogg" >}}
  ![](/images/snoop_dogg.png)
  {{< spotify type="track" id="3FNy4yzOhHhFBeA5p4ofoq" width="50%" height="80" >}}
  ### Snoop Dogg
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Travis Scott" >}}
  ![](/images/travis_scott.png)
  {{< spotify type="track" id="6gBFPUFcJLzWGx4lenP6h2" width="50%" height="80" >}}
  ### Travis Scott
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Young Thug" >}}
  ![](/images/young_thug.png)
  {{< spotify type="track" id="1IIKrJVP1C9N7iPtG6eOsK" width="50%" height="80" >}}
  ### Young Thug
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Youngboy Never Broke Again" >}}
  ![](/images/youngboy_never_broke_again.png)
  {{< spotify type="track" id="1oWM79mUVdZGCGYjSirHZR" width="50%" height="80" >}}
  ### Youngboy Never Broke Again
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< /tabs >}}
{{< /tab >}}

{{< tab "Rock" >}}
  {{< tabs >}}
  {{< tab "Elvis Presley" >}}
  ![](/images/elvis_presley.png)
  {{< spotify type="track" id="44AyOl4qVkzS48vBsbNXaC" width="50%" height="80" >}}
  ### Elvis Presley
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Queen" >}}
  ![](/images/queen.png)
  {{< spotify type="track" id="4u7EnebtmKWzUH433cf5Qv" width="50%" height="80" >}}
  ### Queen
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "The Beatles" >}}
  ![](/images/the_beatles.png)
  {{< spotify type="track" id="6dGnYIeXmHdcikdzNNDMm2" width="50%" height="80" >}}
  ### The Beatles
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< /tabs >}}
{{< /tab >}}
{{< /tabs >}}

