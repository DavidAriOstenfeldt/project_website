---
title: Data description
prev: "/"
next: network-analysis
---

# Gathering the data

First, we got the songs we wanted to investigate from the [Billboard 'The Hot 100' list](https://www.billboard.com/charts/hot-100/). Here, we collected song titles and artist names of all songs that appeared on the list starting from the first week of 1960, all the way to today. This was done with the [billboard.py API](https://github.com/guoguo12/billboard-charts). We made sure to only collect the songs if it was either the first time they appeared on the chart, or if we hadn't already added them to the list. This way we collected a total of 29,128 unique songs, out of the total possible 322,400 songs (5,200 a year * 62 years), which means 293,272 songs had multiple appearances on the Billboard 'The Hot 100' list.

![](/images/billboard_py.png)

We used the songs from this list to limit our scope, as otherwise the amount of data we would have to download would be insurmountable. This of course means that the data set does not provide a full picture of the entire network and vocabulary of artists, but as the data is collected from the most popular songs each week, we believe it to be a sufficient representation of the general trends in artists and lyrics through the years. We used the list of artists and song titles to collect lyrics, release year, collaborations, genres and titles from [genius.com](https://genius.com/Rick-astley-never-gonna-give-you-up-lyrics). For this part the [LyricsGenius API](https://lyricsgenius.readthedocs.io/en/master/) was used, which is an extension of the [base genius API](https://docs.genius.com/) that also collects the lyrics from each song via the python module [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/). However, the LyricsGenius API does not collect the genres of the songs (known as tags on the genius website), thus we had to modify the code to allow us to collect genres as well:

```Python
def something(some, thing):
  return some += thing
````

## Avoiding incorrect songs

Since song titles on Billboard's 'The Hot 100' have horrible naming schemes, which differs a lot from one song to another, some preprocessing need to take place. An example of this, is the artist *Earth, Wind \& Fire with The Emotions* which actually denotes *Earth, Wind \& Fire* featuring *The Emotions*. When searching for songs on the Genius website, the best result achieved when searching for both the song title and artists, as many songs share titles. The problem comes when we search for *Boogie Wonderland* by *Earth, Wind \& Fire with The Emotions* using the Genius API, since this won't return any song.

When searching for songs using the Genius API, we used a sequential searching strategy. This means that we would first search for the song title and full artist name and if that does not yield any results, we first split the artist name at *'feature'*, *'feat.'*, *'ft.'* or *'with'* and then search for the song title and the first partition of the artists name query. If this still doesn't result in any valid song, we remove parentheses from the artist names and replace *'and'* with *'&'*, after which we again search for the song title and artists name. If this fails as well, we try splitting the modified artist names at *'&'* and *','* and search again. If none of these steps result in a valid song, we simply search for the song title and hope for the best.

## Filtering out bad genres and separating artists

Immediately after loading a song, we make sure it is actually a song. To do this, we filter out songs with specific genres/tags, as Genius also house texts which are not song lyrics. We therefore used the following list of bad genres to avoid those; `['track\\s?list', 'album art(work)?', 'liner notes', 'booklet', 'credits', 'interview', 'skit', 'instrumental', 'setlist', 'non-music', 'literature']`.

The last step before all the raw data was gathered, was to separate all artists for each song. This was done using regex to find and split artists at *','*, *'and'*, *'featuring'* and so on. This results in the artists *Megan Thee Stallion & Dua Lipa* for the song *Sweetest Pie* to be changed to `[Megan Thee Stallion, Dua Lipa]` and the artists *Lil Durk Featuring Gunna* for the song *What Happened To Virgil* to be changed to `[Lil Durk, Gunna]`. However, a negative side effect of this processing is, that artists like the previously mentioned *Earth, Wind & Fire* was changed to `[Earth, Wind, Fire]`. This was a necessary part of the preprocessing and these kinds of artists were regrouped later in the data cleaning.

This way, when collecting data for each song through the modified LyricsGenius API, we would retrieve five attributes: date of release, artists who collaborated on the song, lyrics, genres and the song title. The data looks as follows:

|   released |          artists |                                             lyrics |           genres |                          title |
|-----------:|-----------------:|---------------------------------------------------:|-----------------:|-------------------------------:|
|       1957 |  [marty robbins] |  El Paso Lyrics\nOut in the West Texas town of ... |        [country] |                        El Paso |
| 1960-01-04 | [frankie avalon] | Why Lyrics I'll never let you go\nWhy? Because ... |            [pop] |                            Why |
|       1959 | [johnny preston] |  Running Bear LyricsOn the bank of the river\nS... |            [pop] |                   Running Bear |
| 1960-01-04 |  [freddy cannon] | Way Down Yonder in New Orleans LyricsWell, way ... |            [pop] | Way Down Yonder in New Orleans |
| 1960-01-04 |   [guy mitchell] |  Heartaches by the Number Lyrics\nHeartaches by... | [country, cover] |       Heartaches by the Number |

# Preliminary investigation and cleaning

At this point we had all the raw data, but it was apparent that in spite of our efforts during the data gathering, a lot of cleaning still had to be done.

### Unwanted characters and non-english songs

First of all, unwanted unicodes like *\u200b*, *\u200c* and *\u200e*, which had slipped in when the data was loaded, was removed from artists, genres and the lyrics. Next up, duplicates were removed and songs which were not in english were removed by doing a language detection with the Python module `langdetect`.

As can be seen in the table above, each of the songs' lyric's begins with the title of the song and *'Lyrics'*. This was also removed, as it wasn't part of the actually lyrics, but rather an artifact from gathering the song info using the Genius API.

### Removing long songs

Afterwards, we made a decision to remove all songs where the lyrics were longer than 10,000 characters. This was done because, in spite of all the aforementioned approaches to clean the data, e.g. entire book chapters by the French novelist [Marcel Proust](https://en.wikipedia.org/wiki/Marcel_Proust) were still present in the dataset because they were labelled with the genre *rap*. The cut-off at 10,000 were chosen based on the fact that all songs we investigated that were longer, were songs that we clearly loaded in wrong. In addition to this, the 6-minute-long song *Rap God* by *Eminem*, where he flexes his ability to rap fast, contains 7,984 characters.

The full distribution of the song lengths can be seen in the figure below:
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

### Blacklist

While doing a finer combing of the data, we also produced a blacklist for artists that we deemed unwanted in the data set. This list includes *Glee Cast* as they were present in over 200 songs, even though their songs are covers of other popular songs. The full list is seen here `['highest to lowest', 'marcel proust', 'watsky', 'glee cast', 'harttsick', 'eric the red', 'fabvl', 'c-mob']`.

### Regrouping artists

As mentioned earlier, after gathering the data, we had to separate all artists to work with them properly, though in some cases, this results in one artist being split up into multiple - as was the case with *Earth, Wind & Fire*. To mitigate this problem, we first calculated how many times each artist appeared in the data set and afterwards, for each artist, how many times they apperead with collaborating artists. Having known these values, we could then for each artist check which other artists they have collaborated with on all of their songs. Artists found using this method were then joined with an underscore, such that `['earth', 'wind', 'fire']` became `['earth_fire_wind']`.

# Properties of the data

After doing all data processing and cleaning, the final data set is comprised of 25,419 songs and 7,855 unique artists. In the table below, the three data sets used throughout the project can be seen and downloaded.

| Data Set                                                                                             |  Songs | Size (mb) |
|:-----------------------------------------------------------------------------------------------------|-------:|----------:|
| [Billboard List](https://drive.google.com/file/d/1Gd4YH_U98Z8mellnIV_haINLL4UhLJKG/view?usp=sharing) | 29,128 |       1.6 |
| [Pre-cleaned](https://drive.google.com/file/d/1cyiIWnXD_0CHLsj8C0tcwNadfYI7z8FD/view?usp=sharing)    | 29,128 |      92.5 |
| [Cleaned](https://drive.google.com/file/d/1Zhof84KbTJa3a1zfhN3TcwdWqPFCTnEv/view?usp=sharing)        | 25,419 |      44.2 |

The distribution of songs per artist (for artists with over 50 songs on the 'Hot-100' list) looks as follows:
{{< load-plotly >}}
{{< plotly json="plotly/songs_per_artist.json" height="325px" >}}

The distribution over genres:
{{< plotly json="plotly/songs_per_genre.json" height="325px" >}}

And finally the distribution over decades:
{{< plotly json="plotly/songs_per_decade.json" height="325px" >}}

## Characteristics of the data
The data has now been gathered and thoroughly cleaned, but before we are ready to apply our network science and text analysing techniques to it, we will first look at [_the ten characteristics of Big Data_](https://www.bitbybitbook.com/en/1st-ed/observing-behavior/characteristics/):

> ### Big

As mentioned previously, the data set comprises 25,419 songs and 7,855 unique artists, but in addition, the lyric corpus has a total size of 8,476,446 with 74,915 unique tokens. With this type of information, a data set of this size would be tough to come by other than scraping the internet.


> ### Always-on

Billboard updates their 'The Hot 100' chart each week, which means the list has been updated since we first collected the data. Because it updates each week, the data set can be updated 52 times a year, which makes the data longitudinal, but since it updates only 52 times a year and not constantly like, e.g. Twitter, it is not entirely _always-on_.

> ### Non-reactive

Reactivity describes whether subjects know researchers are observing them because that might change the subjects' behaviour. All musical artists are most likely aware that they are present on the chart and might follow their ranking closely, but the question is how much they change their behaviour and musical style to get a higher ranking on the chart. One could speculate that some artists might change their use of words and language to appeal to a broader audience to perform better on the chart, while others follow their musical heart. Though, with this being said, we do not believe that the fact that researchers might also be looking at the chart with the intent to do network science and text analysis will change the behaviour of the artists.

> ### Incomplete

Completeness express if the data set manages to capture the entire unfolding of a specific event or, e.g., the entire network of a specific group. In the case of this project, we are attempting to analyse the network and text of the most popular artists and songs through modern time. With this in mind, we believe that using Billboard's 'The Hot 100' chart gives a good indication of the most popular artists and songs, though arguments could be made for the case that the chart might be skewed towards music popular in the states.


> ### Inaccessable

The data used in this project is very much accessible. As was accounted for earlier on this page, everything has been downloaded freely off the internet via different APIs.

> ### Nonrepresentative

Representativity denotes whether the data can generalise to, e.g., social phenomena more in general - out-of-sample generalisation. To this end, being a musician is quite a unique occupation when it comes to a social network of collaboration, in comparison to, e.g. a profession like acting. One could presume the typical actor is more connected than the typical musician since many actors are associated with a movie or tv-show, while often not many musicians are working on a song. At least not many musicians are seen shown as the artists on a given song, while many people might have worked on it during the songwriting and musical production.
Additionally, since our data set only contains songs in English from a popular music chart in the west, the data might not be suited for generalisation of the network, or text, for musicians from other parts of the planet. With this being said, the data set is probably still perfectly applicable for within-sample comparisons.

> ### Drifting

There is some systemic drifting in the data set, as the way songs were picked for the 'Hot-100' list has changed since its inception back in 1958. Originally, songs were picked purely based on how well they sold, but as the music industry evolved and radio, tv and streaming started becoming more prevalent, all these factors are now considered, when songs are picked for the list.

> ### Algorithmically confounded

As the songs are only picked from the Billboard 'Hot-100' list, there is some amount of algorithmic confounding going on.

> ### Dirty

The data set could be dirty as some songs could still be loaded wrongly, or we might have missed something via the cleaning. Furthermore, the data is not a complete overview of the connections between artists or the language they use, as we only chose songs that appeared on the 'Hot-100' list.

> ### Sensitive
> 
The data is not sensitive, as the data set consists of basic stats such as release year, song title, song artists, which are all things used by artists themselves to describe the titles.